//
// TableHelper.js
//
// Requires 'he' library
//
// Example Usage:
//

	//
	// Options: 
	
	//
	// options: {ignorePropertyPrefixList:['!','IgnoreThisElement']
	//           includeBlankEntries:true  // default:false
	//          }
	function TableHelper_MakeTable(data=null,options=null)
	{
		let tableHelper = new TableHelper(data,options);
		
		return tableHelper.GetTableAsHtml();
	}
	function TableHelper(data=null,options=null)
	{
		this.titles = [];
		this.all_rows=[];
		this.options = options;
		this.orig_data = data;
		
		this.asHtml = function(obj)
		{
			if (obj == null) return "";
			
			if ((typeof obj == 'array') || Array.isArray(obj))
			{
				return TableHelper_MakeTable(obj,this.options);
			}

			if (typeof obj == 'object')
			{
				if (typeof obj['html'] == 'string') return obj['html']; // Special case - it means we have already done the hard work
				return TableHelper_MakeTable(obj,this.options);
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
					this.AddObjAsLine({name:propt,value:obj[propt]});
				}
			}
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
					let merge_up = this.ElementIsInMergeUpList(propt);
					if (merge_up)
					{
						let count = obj[propt].length;
						let index=0;
						let sub_entries_arrayed={};
						let merge_up_done = false;
						for (const element_to_merge of obj[propt])
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
						let html = this.asHtml(obj[propt]).trim();
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
								if (rowspan == 1)
									row_to_add.push(html)
								else
									row_to_add.push({html:html,attr:("rowspan="+rowspan)});
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
			
			
			if (attributes_to_use != '') attributes_to_use=' '+attributes_to_use;
			return '<table'+attributes_to_use+'>'+this.GetTableContentsAsHtml()+'</table>';
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
					html += '<tr>';
					
					let name='';
					let value='';
					
					if (typeof entry.row_data[0] != 'undefined') name= entry.row_data[0];
					
					
					if (name != "") name +=' :';
					if (typeof entry.row_data[1] != 'undefined') value= entry.row_data[1];
					
					
					if ((value != '') || this.GetOptionOrDefault('include_empty_values'))
						html += '<tr>'+this.MakeHtmlTableCol(name,'td')+this.MakeHtmlTableCol(value,'td')+"</tr>\n";
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
						let title = title_lookup_to_use[x];
						titles_to_use.push(title);
					}
				}
				
				html += this.MakeHtmlTableLine(titles_to_use,num_cols,'th');
				
				
							
				for(const entry of this.all_rows)
				{
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
		this.MakeHtmlTableCol = function(item,kind='td')
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
				html = item;
			
			
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
