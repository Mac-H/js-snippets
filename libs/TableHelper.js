//
// TableHelper.js
// 
// Requires 'he' library
//
// Example Usage:
//
function FormatItem(item)
{			
	let value;
	
	value = RemovePrefixOrNull(item,'linuxtime_utc:','#');
	if (value != null)
	{
		try
		{
			return new Date((value+0)*1000).format('Y-m-d H:i:s'); // If you have an error on this line - you probably haven't imported 'date.format.js'
		}
		catch (ee)
		{
			//
			return item;
		}
		//html += '['+(typeof item)+']';
	}
	else
	{
	}
	return item; // +'['+format+':'+(typeof item)+']';
}
function RemovePrefixOrNull(item,prefix_str,format='')
{
	item = item.trim()
	let item_txt = item.toLowerCase();
	
	if (!item_txt.startsWith(prefix_str)) return null;
	
	item_txt =item_txt.substring(prefix_str.length);
	if (format == '#')
	{
		let value_num = parseInt(item_txt);
		
		if (isNaN(value_num))
			return null;
		else
			return value_num;
	}
//	console.log("RemovePrefixOrNull(`"+item+"`,'`"+prefix_str+"`)=`"+item_txt+"`");
		
	return item_txt;
}
	//
	// Options: 
	
	//
	// options: {ignorePropertyPrefixList:['!','IgnoreThisElement']
	//           includeBlankEntries:true  // default:false
	//          }
	function TableHelper_MakeTable(data=null,options=null,sub_level=0)
	{
		let tableHelper = new TableHelper(data,options,sub_level);
		
		return tableHelper.GetTableAsHtml();
	}
	function TableHelper(data=null,options=null,sub_level=0)
	{
		this.titles = [];
		this.all_rows=[];
		this.options = options;
		this.orig_data = data;
		this.sub_level = sub_level;
		
		this.asHtml = function(obj)
		{
			if (obj == null) return "";
			
			if ((typeof obj == 'array') || Array.isArray(obj))
			{
				return TableHelper_MakeTable(obj,this.options,this.sub_level+1);
			}

			if (typeof obj == 'object')
			{
				if (typeof obj['html'] == 'string') return obj['html']; // Special case - it means we have already done the hard work
				return TableHelper_MakeTable(obj,this.options,this.sub_level+1);
			}
			
			let txt = ""+obj;
			if (txt.startsWith("html:"))
			{
				return txt.split("html:").join(""); // Special case - It is already formatted
			}
			else
			{
				let html= he.encode(txt);
			
				if (!this.GetOptionOrDefault('muffle_newlines',false)) html = html.split("\n").join("<br>");

				return html;
			}
		}
		this.GetOptionOrDefault = function (name,default_value=null)
		{
			try
			{
				if (this.options == null) return default_value;
				if (default_value == null)
				{
					if (typeof this.options[name] == 'undefined') return default_value;
				}
				else
				{
					if (typeof this.options[name] != typeof default_value) return default_value;
					if (Array.isArray(this.options[name])!=Array.isArray(default_value)) return default_value;
				}
			
				return this.options[name];
			}
			catch (ee)
			{
				console.log('TableHelper.GetOptionOrDefault: Exception');
				return default_value;
			}
		}
		this.ElementIsInIgnoreList = function (txt)
		{
			try
			{
				for (const ignore_this_prefix of this.GetOptionOrDefault('ignorePropertyPrefixList',[]))
				{
				   if ((ignore_this_prefix !="") && txt.startsWith(ignore_this_prefix))
					  return true;
				}
			}
			catch (ee)
			{
				
			}
			return false;
		}
		this.FormatForProperty = function (propertyName)
		{
			//console.log("Looking for format: Property "+JSON.stringify(propertyName));
			try
			{
				let lookup=this.GetOptionOrDefault('propertyConvertFunctions',null);
				if (lookup==null) return null;
				//console.log("!!! Found 'propertyConvertFunctions': "+JSON.stringify(lookup));
				
				if (typeof lookup[propertyName] == 'undefined') return null;
				console.log("!!! Found format: Property "+JSON.stringify(propertyName)+"="+JSON.stringify(lookup[propertyName]));
				return lookup[propertyName];
			}
			catch (ee)
			{
				console.log("Exception in FormatForProperty("+JSON.stringify(propertyName)+"):");
				console.log(ee);
			}
			return null;
		}

		this.ElementIsInMergeUpList = function (txt)
		{
			try
			{
				return this.GetOptionOrDefault('merge_up',[]).includes(txt);
			}
			catch (ee)
			{
				
			}
			return false;
		}
		
		
		
		this.AddObjOrArray = function (obj_or_array)
		{
			if (obj_or_array == null) return;
			
			if ((typeof obj_or_array == 'array') || Array.isArray(obj_or_array))
			{
				for(var line of obj_or_array)
				{
					this.AddObjAsLine(this.CombinePropertiesIfRequested(line));
				}
			}
			else if (typeof obj_or_array == 'object')
			{
				let obj = this.CombinePropertiesIfRequested(obj_or_array);
				for(var propt in obj)
				{
					if (!this.ElementIsInIgnoreList(propt)) 
					{
						this.AddObjAsLine({name:propt,value:this.GetPropertyWithOptionalFormatting(obj,propt)});
					}
				}
			}
		}
		
		this.GetPropertyWithOptionalFormatting = function(obj,propt_name)
		{
			let obj_value=obj[propt_name];
			let lookup=this.FormatForProperty(propt_name);
			
			if (lookup == null) return obj_value;
			
			try
			{
				if (typeof window[lookup] === 'function')
				{
					console.log("TableFormat: Calling formating function "+lookup+"("+JSON.stringify(obj_value)+")");
					obj_value = window[lookup](obj_value);
				}
				else
				{
					console.log("!! Unable to format  "+JSON.stringify(obj_value)+" : "+JSON.stringify(lookup)+" is not a function");
				}
			
			
			}
			catch (ee)
			{
				console.log("!! Exception formatting "+JSON.stringify(obj_value)+" with "+JSON.stringify(lookup));
				console.log(ee);
			}
			return obj_value;
		}
		//
		// eg: "create_urls":[{"text":"sheet_title","url":"google_url","combined":"Spreadsheet"},{"text":"Edit","url":"edit_source_link","combined":"Source"}]}
		//
		this.CombinePropertiesIfRequested = function (obj)
		{
			let merge_array = this.GetOptionOrDefault('create_urls',[]);
			
			if (merge_array.length == 0) return obj;
			
			for (const merge of merge_array)
			{
				let url_title =merge['url'];
				let merged_title = url_title;
				if (typeof obj[url_title] != 'undefined')
				{
					let url = obj[url_title];
					delete obj[url_title];
					
					let caption_title = merge['text'];
					let caption = caption_title;
					
					if (typeof obj[caption_title] != 'undefined')
					{
						merged_title = caption_title;
						caption = obj[caption_title];
						delete obj[caption_title];
					}

					if (typeof merge['combined'] != 'undefined')
						merged_title = merge['combined'];
					
					obj[merged_title]={html:("<a target='_blank' href='"+url+"'>"+caption+"</a>")};
				}	
			}
			
			return (obj);
		}
		this.AddObjAsLine = function (obj)
		{
			this.StartLine();
			let merge_count_max=0;
			
			obj = this.CombinePropertiesIfRequested(obj);
			
			for(var propt in obj)
			{
				if (!this.ElementIsInIgnoreList(propt))
				{	
					let item_entry=this.GetPropertyWithOptionalFormatting(obj,propt);
					
					let merge_up = this.ElementIsInMergeUpList(propt);
					if (merge_up)
					{
						let count = item_entry.length;
						let index=0; 
						let sub_entries_arrayed={};
						let merge_up_done = false;
						for (const element_to_merge of item_entry)
						{
							let sub_item = this.CombinePropertiesIfRequested(element_to_merge);
							let used=false;
							
							for(var sub_propt in sub_item)
							{
								if (!this.ElementIsInIgnoreList(sub_propt))
								{	
									let html = this.asHtml(sub_item[sub_propt]).trim();
									if (html != '')
									{
										used=true;
										if (typeof sub_entries_arrayed[sub_propt] == 'undefined')
										{
											sub_entries_arrayed[sub_propt]=[];
										}
										while (sub_entries_arrayed[sub_propt].length < index)
											sub_entries_arrayed[sub_propt].push('');
										
										sub_entries_arrayed[sub_propt][index] = html;
										this.AddElement(sub_propt,sub_entries_arrayed[sub_propt]);
									}
								}
							}
							
							if (used)
							{
								merge_up_done  = true;
								index++;
							}
						}
						
						if (merge_up_done && (index > merge_count_max))
							merge_count_max = index;
					}
					else
					{
						let html = this.asHtml(item_entry).trim();
						if (html != '')
						{
							this.AddElement(propt,html);
						}
					}
				}
			}
			this.EndLine(merge_count_max);
		}
		this.StartLine = function()
		{
		   this.current_row = [];
		}
		this.EndLine = function(merge_count_max=1)
		{
			if (this.current_row.length > 0)
			{
				if (merge_count_max < 1)
				{
					this.all_rows.push({row_data:this.current_row});
				}
				else
				{
					for(let n=0; n < merge_count_max; n++)
					{
						let row_to_add = [];
						for (const item of this.current_row)
						{
							let html = null;
							let rowspan=1;
							
							if (typeof item == 'string')
							{
								if (merge_count_max == 1)
									html = item;
								else if (n==0)
								{
									html = item;
									rowspan = merge_count_max;
								}
							}
							else if ( n <= item.length-1)
							{
								html = item[n];
								rowspan = (n < (item.length-1))?1:merge_count_max-n;
							}
							
							if (html != null)
							{
								if (rowspan == 1)	row_to_add.push(html)
								else				row_to_add.push({html:html,attr:("rowspan="+rowspan)});
							}
						}
						let row_class = 'other';
						if (n == 0)
							row_class = 'first';
						else if (n == merge_count_max-1)
							row_class = 'last';
						
						this.all_rows.push({row_data:row_to_add,row_class:(n==0)?'row_merged_line_first':'row_merge_line_'+row_class});
					}
				}
			}
			this.current_row = [];
		}
		this.AddElement = function(name,value_as_html)
		{
			let col= this.titles.indexOf(name);
			
			if (col < 0)
				col = this.titles.push(name)-1;
				
		    while (this.current_row.length <= col)
			{
				this.current_row.push('');
			}
			
			this.current_row[col]=value_as_html;
		}
		this.GetTableAsHtml = function(extra_attributes='')
		{	
			let attributes_to_use = this.GetOptionOrDefault('table_attributes','');
			
			if ((extra_attributes != '') && (attributes_to_use!=''))
				attributes_to_use += ' ';
			attributes_to_use += extra_attributes;
			
			if ((','+this.GetOptionOrDefault('sub_table_format','')+',').includes(',simplify_single_lines,'))
			{
				if (this.sub_level > 0)
				{
					if (this.all_rows.length < 2)
					{
						//attributes_to_use += ' simplify=yes ';
						let simple= this.GetTableContentsAsHtml(true);
						simple = simple.split('<tr><td>').join('');
						simple = simple.split('</td></tr>').join('');
						simple = simple.split('</td><td>').join('&nbsp;');
						
						return simple; // '!'+he.encode(simple)+'!';
					}
					/* else { attributes_to_use += ' hide=yes '; } */
				}
			}
			
			
			if (attributes_to_use != '') attributes_to_use=' '+attributes_to_use;
			return '<table'+attributes_to_use+' table_level='+this.sub_level+' >'+this.GetTableContentsAsHtml()+'</table>';
		}
		this.GetTableContentsAsHtml = function()
		{
			let num_cols = this.GetNumColumns();
			
			let html='';

			let is_name_values_pairs = false;
			if (this.titles.length == 2)
			{
				let name_value_pair_list = this.GetOptionOrDefault('value_pairs',[]);
				
				name_value_pair_list.push('name:value');
				
				if (name_value_pair_list.includes(this.titles[0]+':'+this.titles[1]))
					is_name_values_pairs=true;
			}
			if (is_name_values_pairs) 
			{
				for(const entry of this.all_rows)
				{
					//html += '<tr>';
					
					let name='';
					let value='';
					
					if (typeof entry.row_data[0] != 'undefined') name= entry.row_data[0];
					
					
					if (name != "") name +=' :';
					if (typeof entry.row_data[1] != 'undefined') value= entry.row_data[1];
					
					
					if ((value != '') || this.GetOptionOrDefault('include_empty_values'))
						html += '<tr>'+this.MakeHtmlTableCol(name,'td')+this.MakeHtmlTableCol(value,'td',name)+"</tr>\n";
				}
			}
			else
			{
				let title_lookup_to_use = this.GetOptionOrDefault('title_lookup',{});
				
				let titles_to_use = [];
				for (let x of this.titles)
				{
					if (typeof title_lookup_to_use[x] == 'undefined')
					{
						titles_to_use.push(x);
					}
					else
					{
						titles_to_use.push(title_lookup_to_use[x]);
					}
				}

				html += this.MakeHtmlTableLine(titles_to_use,num_cols,'th');
				//let colnum=0;
	//			console.log(this.all_rows);
				
				for(let entry of this.all_rows)
				{
					//entry.titles=titles_to_use;
					//entry.formats=formats_to_use;
					//console.log(entry);
					html += this.MakeHtmlTableLine(entry,num_cols,'td');
				}
			}
			return html; // he.encode(JSON.stringify(this.titles)+"|"+JSON.stringify(this.all_rows));
			//</tr>";
		}
		this.GetNumColumns = function()
		{
			return this.titles.length;
		}
		this.MakeHtmlTableCol = function(item,kind='td',prop_kind='')
		{
			let html = '';
			let attr='';
			if (typeof item == 'object')
			{
				if (typeof item['html'] == 'undefined')
					html = JSON.stringify(item);
				else 
				{
					html = item['html'];
					if (typeof item['attr'] == 'string')
						attr = ' '+item['attr'];
				}
				
			}
			else
				html = FormatItem(item);
			
			return '<'+kind+attr+'>'+html+"</"+kind+">";
	
		}
		this.MakeHtmlTableLine=function(_array_or_row_def,min_cols,kind='td')
		{
			let html_row = "";
			
			
			if (Array.isArray(_array_or_row_def))
			{
				html_row = "<tr>";
				for(const entry of _array_or_row_def)
				{
					html_row+=this.MakeHtmlTableCol(entry,kind);
				}
			}
			else
			{
				html_row = "<tr class='"+_array_or_row_def.row_class+"'>";
				let col_num=0;
	//			console.log(_array_or_row_def);
				for(const entry of _array_or_row_def.row_data)
				{
					html_row+=this.MakeHtmlTableCol(entry,kind);
				}
			}
			
			// Min cols doesn't work anymore since we have col_span !

			//for (let n=_array.length; n < min_cols; n++)
			//	html_row+=this.MakeHtmlTableCol('!?',kind);
				
			html_row += "</tr>\n";
			
			return html_row;
		}
	
	
		this.AddObjOrArray(data);

	}
