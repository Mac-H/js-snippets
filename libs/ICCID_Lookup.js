

// Verifies an ICCID (Mobile phone card ID).
//
// Use: function  ICCID_Lookup(value_txt)
//      function  ICCID_Lookup(value_txt,true ) // bad_checksum_is_warning_only:true = default
//      function  ICCID_Lookup(value_txt,false) // bad_checksum_is_warning_only:false
//
// Returns: {valid:false,cleaned_iccid:"1334234",reason:"The number must be 20 digits long" (or whatever)
//  -or-    {valid:true,cleaned_iccid:"892600312312313123",Location:"Zambia",Company:"Zambia Telecommunications Company Ltd (ZAMTEL)",IIN_WithSpaces:"89 260 03",IIN:"8926003"}
//  -or-    {valid:true,"warning":"The check digits are not valid for an ICCID code","Company":....})

		
//
//
// Use ICCID_UnitTestsAll() to verify
//

//
// Valid as per Q1 2018.  See https://en.wikipedia.org/wiki/Subscriber_identity_module for details, including how to get the most recent dump.
//
var IIN_Lookup = {
"899301":{"Location":"Afghanistan","Company":"Tryco International Inc.","IIN_WithSpaces":"89 93 01","IIN":"899301"},
"8935501":{"Location":"Albania","Company":"Albania Mobile Communications sh.a","IIN_WithSpaces":"89 355 01","IIN":"8935501"},
"8935503":{"Location":"Albania","Company":"Eagle Mobile Sh.a","IIN_WithSpaces":"89 355 03","IIN":"8935503"},
"8935504":{"Location":"Albania","Company":"Plus Communications Sh.a.","IIN_WithSpaces":"89 355 04","IIN":"8935504"},
"8935502":{"Location":"Albania","Company":"Vodafone Albania sha","IIN_WithSpaces":"89 355 02","IIN":"8935502"},
"8921301":{"Location":"Algeria","Company":"ATM Mobilis (Algérie Telecom spa)","IIN_WithSpaces":"89 213 01","IIN":"8921301"},
"8937603":{"Location":"Andorra","Company":"Servei de Telecomunicacions d'Andorra","IIN_WithSpaces":"89 376 03","IIN":"8937603"},
"8924402":{"Location":"Angola","Company":"Unitel sarl","IIN_WithSpaces":"89 244 02","IIN":"8924402"},
"891010":{"Location":"Anguilla","Company":"Cable and Wireless (W.I.) Ltd","IIN_WithSpaces":"89 1 010","IIN":"891010"},
"891130":{"Location":"Antigua and Barbuda","Company":"Antigua Public Utilities Authority (APUA)","IIN_WithSpaces":"89 1 130","IIN":"891130"},
"891011":{"Location":"Antigua and Barbuda","Company":"Cable and Wireless (W.I.) Ltd","IIN_WithSpaces":"89 1 011","IIN":"891011"},
"895400":{"Location":"Argentina","Company":"Telecom Argentina S.A.","IIN_WithSpaces":"89 54 00","IIN":"895400"},
"895454":{"Location":"Argentina","Company":"Telefónica de Argentina S.A.","IIN_WithSpaces":"89 54 54","IIN":"895454"},
"8937401":{"Location":"Armenia","Company":"Armentel JV CJSC","IIN_WithSpaces":"89 374 01","IIN":"8937401"},
"8937405":{"Location":"Armenia","Company":"K Telecom","IIN_WithSpaces":"89 374 05","IIN":"8937405"},
"8937404":{"Location":"Armenia","Company":"PMF SAL","IIN_WithSpaces":"89 374 04","IIN":"8937404"},
"8929786":{"Location":"Aruba","Company":"SETAR, Servicio di Telecomunicacion di Aruba","IIN_WithSpaces":"89 297 86","IIN":"8929786"},
"896114":{"Location":"Australia","Company":"AAPT Ltd","IIN_WithSpaces":"89 61 14","IIN":"896114"},
"896188":{"Location":"Australia","Company":"EZI Phonecard Pty. Ltd.","IIN_WithSpaces":"89 61 88","IIN":"896188"},
"896106":{"Location":"Australia","Company":"Hutchison 3G Australia Pty Ltd (H3GA)","IIN_WithSpaces":"89 61 06","IIN":"896106"},
"896102":{"Location":"Australia","Company":"Singtel Optus Ltd.","IIN_WithSpaces":"89 61 02","IIN":"896102"},
"896112":{"Location":"Australia","Company":"Singtel Optus Ltd.","IIN_WithSpaces":"89 61 12","IIN":"896112"},
"896121":{"Location":"Australia","Company":"Singtel Optus Ltd.","IIN_WithSpaces":"89 61 21","IIN":"896121"},
"896123":{"Location":"Australia","Company":"Singtel Optus Ltd.","IIN_WithSpaces":"89 61 23","IIN":"896123"},
"896100":{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 00","IIN":"896100"},
"896101":{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101"},
"896161":{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 61","IIN":"896161"},
"896162":{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 62","IIN":"896162"},
"896103":{"Location":"Australia","Company":"Vodafone Pacific  Ltd.","IIN_WithSpaces":"89 61 03","IIN":"896103"},
"8967210":{"Location":"Australian External Territories","Company":"Norfolk Telecom","IIN_WithSpaces":"89 672 10","IIN":"8967210"},
"894308":{"Location":"Austria","Company":"3G Mobile Telecommunications GmbH","IIN_WithSpaces":"89 43 08","IIN":"894308"},
"894305":{"Location":"Austria","Company":"Connect Austria Gesellschaft für Telekommunikation GmbH","IIN_WithSpaces":"89 43 05","IIN":"894305"},
"894303":{"Location":"Austria","Company":"Max.Mobil Telekommunikation Service GmbH","IIN_WithSpaces":"89 43 03","IIN":"894303"},
"894301":{"Location":"Austria","Company":"Mobilikom Austria AG","IIN_WithSpaces":"89 43 01","IIN":"894301"},
"894307":{"Location":"Austria","Company":"Tele.ring Telekom Service GmbH & Co.","IIN_WithSpaces":"89 43 07","IIN":"894307"},
"8999401":{"Location":"Azerbaijan","Company":"Azercell Telecom Joint Venture","IIN_WithSpaces":"89 994 01","IIN":"8999401"},
"8999404":{"Location":"Azerbaijan","Company":"Azerfon LLC","IIN_WithSpaces":"89 994 04","IIN":"8999404"},
"8999403":{"Location":"Azerbaijan","Company":"Caspian American Telecom LLC","IIN_WithSpaces":"89 994 03","IIN":"8999403"},
"891282":{"Location":"Bahamas","Company":"Bahamas Telecommunications Company Ltd.","IIN_WithSpaces":"89 1 282","IIN":"891282"},
"8997301":{"Location":"Bahrain","Company":"Bahrain Telecommunications Company (BATELCO)","IIN_WithSpaces":"89 973 01","IIN":"8997301"},
"8997302":{"Location":"Bahrain","Company":"Zain Bahrain","IIN_WithSpaces":"89 973 02","IIN":"8997302"},
"891012":{"Location":"Barbados","Company":"Barbados Telephone Company Ltd. (BARTEL)","IIN_WithSpaces":"89 1 012","IIN":"891012"},
"8937503":{"Location":"Belarus","Company":"Belarusian Telecommunication Network (ZAO BeST)","IIN_WithSpaces":"89 375 03","IIN":"8937503"},
"8937501":{"Location":"Belarus","Company":"FE Velcom","IIN_WithSpaces":"89 375 01","IIN":"8937501"},
"8937502":{"Location":"Belarus","Company":"The Mobile TeleSystems Joint Ltd Liability Company","IIN_WithSpaces":"89 375 02","IIN":"8937502"},
"893200":{"Location":"Belgium","Company":"BELGACOM société anonyme de droit public","IIN_WithSpaces":"89 32 00","IIN":"893200"},
"893205":{"Location":"Belgium","Company":"Elephant Talk Communication Schweiz GmbH","IIN_WithSpaces":"89 32 05","IIN":"893205"},
"893203":{"Location":"Belgium","Company":"KPN Orange Belgium N.V.","IIN_WithSpaces":"89 32 03","IIN":"893203"},
"893202":{"Location":"Belgium","Company":"Mobistar N.V.","IIN_WithSpaces":"89 32 02","IIN":"893202"},
"893201":{"Location":"Belgium","Company":"Society for Worldwide interbank Financial Telecommunications","IIN_WithSpaces":"89 32 01","IIN":"893201"},
"893208":{"Location":"Belgium","Company":"Voxbone SA/NV","IIN_WithSpaces":"89 32 08","IIN":"893208"},
"8950167":{"Location":"Belize","Company":"Belize Telecommunications Ltd. (BTL)","IIN_WithSpaces":"89 501 67","IIN":"8950167"},
"8950168":{"Location":"Belize","Company":"Intelco","IIN_WithSpaces":"89 501 68","IIN":"8950168"},
"8922905":{"Location":"Benin","Company":"Glomobile Benin Ltd","IIN_WithSpaces":"89 229 05","IIN":"8922905"},
"891351":{"Location":"Bermuda","Company":"Bermuda Digital Communications Ltd","IIN_WithSpaces":"89 1 351","IIN":"891351"},
"891013":{"Location":"Bermuda","Company":"Cable and Wireless plc","IIN_WithSpaces":"89 1 013","IIN":"891013"},
"891232":{"Location":"Bermuda","Company":"The Bermuda Telephone Company Ltd.","IIN_WithSpaces":"89 1 232","IIN":"891232"},
"8997511":{"Location":"Bhutan","Company":"B-Mobile","IIN_WithSpaces":"89 975 11","IIN":"8997511"},
"8997577":{"Location":"Bhutan","Company":"Tashl Infocomm Ltd","IIN_WithSpaces":"89 975 77","IIN":"8997577"},
"8959102":{"Location":"Bolivia (Plurinational State of)","Company":"Empresa Nacional de Telecomunicaciones (ENTEL)","IIN_WithSpaces":"89 591 02","IIN":"8959102"},
"8959101":{"Location":"Bolivia (Plurinational State of)","Company":"Nuevatel PCS de Bolivia S.A.","IIN_WithSpaces":"89 591 01","IIN":"8959101"},
"8959978":{"Location":"Bonaire, Sint Eustatius and Saba","Company":"Telbo","IIN_WithSpaces":"89 599 78","IIN":"8959978"},
"8938701":{"Location":"Bosnia and Herzegovina","Company":"BH Telecom","IIN_WithSpaces":"89 387 01","IIN":"8938701"},
"8938703":{"Location":"Bosnia and Herzegovina","Company":"HT Mostar","IIN_WithSpaces":"89 387 03","IIN":"8938703"},
"8938705":{"Location":"Bosnia and Herzegovina","Company":"Telekomunicaje RS, a.d. Banjaluka","IIN_WithSpaces":"89 387 05","IIN":"8938705"},
"8926704":{"Location":"Botswana","Company":"Botswana Telecommunications Corporation (BTC)","IIN_WithSpaces":"89 267 04","IIN":"8926704"},
"8926701":{"Location":"Botswana","Company":"Mascom Wireless (Pty) Ltd","IIN_WithSpaces":"89 267 01","IIN":"8926701"},
"8926702":{"Location":"Botswana","Company":"Orange (Botswana) Pty Ltd","IIN_WithSpaces":"89 267 02","IIN":"8926702"},
"895524":{"Location":"Brazil","Company":"Amazonia Celular S/A","IIN_WithSpaces":"89 55 24","IIN":"895524"},
"895505":{"Location":"Brazil","Company":"BCP","IIN_WithSpaces":"89 55 05","IIN":"895505"},
"895516":{"Location":"Brazil","Company":"Brasil Telecom Celular S.A.","IIN_WithSpaces":"89 55 16","IIN":"895516"},
"895526":{"Location":"Brazil","Company":"IDT Brasil Telecomunicaçôes Ltda","IIN_WithSpaces":"89 55 26","IIN":"895526"},
"895515":{"Location":"Brazil","Company":"Sercomtel Celular S/A","IIN_WithSpaces":"89 55 15","IIN":"895515"},
"895523":{"Location":"Brazil","Company":"Telemig Celular S/A","IIN_WithSpaces":"89 55 23","IIN":"895523"},
"891014":{"Location":"British Virgin Islands","Company":"Cable and Wireless (W.I.) Ltd.","IIN_WithSpaces":"89 1 014","IIN":"891014"},
"891348":{"Location":"British Virgin Islands","Company":"Caribbean Cellular Telephone d.b.a. CCT Boatphone","IIN_WithSpaces":"89 1 348","IIN":"891348"},
"8935905":{"Location":"Bulgaria","Company":"Cosmo Bulgaria Mobile Ltd.","IIN_WithSpaces":"89 359 05","IIN":"8935905"},
"8935901":{"Location":"Bulgaria","Company":"Mobiltel EAD","IIN_WithSpaces":"89 359 01","IIN":"8935901"},
"8922602":{"Location":"Burkina Faso","Company":"Celtel Burkina SA","IIN_WithSpaces":"89 226 02","IIN":"8922602"},
"8922603":{"Location":"Burkina Faso","Company":"Telecel Faso","IIN_WithSpaces":"89 226 03","IIN":"8922603"},
"8925707":{"Location":"Burundi","Company":"Lacell SU","IIN_WithSpaces":"89 257 07","IIN":"8925707"},
"8985501":{"Location":"Cambodia","Company":"CAMGSM","IIN_WithSpaces":"89 855 01","IIN":"8985501"},
"891250":{"Location":"Canada","Company":"ALO Mobile Inc","IIN_WithSpaces":"89 1 250","IIN":"891250"},
"891236":{"Location":"Canada","Company":"Bell Canada","IIN_WithSpaces":"89 1 236","IIN":"891236"},
"891369":{"Location":"Canada","Company":"Bell Canada","IIN_WithSpaces":"89 1 369","IIN":"891369"},
"891789":{"Location":"Canada","Company":"Bell Canada","IIN_WithSpaces":"89 1 789","IIN":"891789"},
"891035":{"Location":"Canada","Company":"Bragg Communications Inc","IIN_WithSpaces":"89 1 035","IIN":"891035"},
"891228":{"Location":"Canada","Company":"British Columbia Telephone Company Ltd.","IIN_WithSpaces":"89 1 228","IIN":"891228"},
"891654":{"Location":"Canada","Company":"British Columbia Telephone Company Ltd.","IIN_WithSpaces":"89 1 654","IIN":"891654"},
"891037":{"Location":"Canada","Company":"First Networks Operation Inc.","IIN_WithSpaces":"89 1 037","IIN":"891037"},
"891490":{"Location":"Canada","Company":"Globalive Wireless Management Corp. (Wind Mobile)","IIN_WithSpaces":"89 1 490","IIN":"891490"},
"891895":{"Location":"Canada","Company":"International Telecommunications Services Inc.","IIN_WithSpaces":"89 1 895","IIN":"891895"},
"891482":{"Location":"Canada","Company":"Island Tel","IIN_WithSpaces":"89 1 482","IIN":"891482"},
"891593":{"Location":"Canada","Company":"Island Tel","IIN_WithSpaces":"89 1 593","IIN":"891593"},
"891456":{"Location":"Canada","Company":"Manitoba Telecom Services","IIN_WithSpaces":"89 1 456","IIN":"891456"},
"891687":{"Location":"Canada","Company":"Manitoba Telecom Services","IIN_WithSpaces":"89 1 687","IIN":"891687"},
"891688":{"Location":"Canada","Company":"Maritime Telegraph and Telephone Company Ltd.","IIN_WithSpaces":"89 1 688","IIN":"891688"},
"891699":{"Location":"Canada","Company":"Maritime Telegraph and Telephone Company Ltd.","IIN_WithSpaces":"89 1 699","IIN":"891699"},
"891370":{"Location":"Canada","Company":"Microcell Solutions Inc.","IIN_WithSpaces":"89 1 370","IIN":"891370"},
"891660":{"Location":"Canada","Company":"MTS Allstream Inc.","IIN_WithSpaces":"89 1 660","IIN":"891660"},
"891628":{"Location":"Canada","Company":"New Brunswick Telephone Company Ltd.","IIN_WithSpaces":"89 1 628","IIN":"891628"},
"891629":{"Location":"Canada","Company":"New Brunswick Telephone Company Ltd.","IIN_WithSpaces":"89 1 629","IIN":"891629"},
"891635":{"Location":"Canada","Company":"Newfoundland Telephone Company Ltd.","IIN_WithSpaces":"89 1 635","IIN":"891635"},
"891682":{"Location":"Canada","Company":"Newfoundland Telephone Company Ltd.","IIN_WithSpaces":"89 1 682","IIN":"891682"},
"891930":{"Location":"Canada","Company":"Northwestel Inc.","IIN_WithSpaces":"89 1 930","IIN":"891930"},
"891835":{"Location":"Canada","Company":"Quebec Telephone","IIN_WithSpaces":"89 1 835","IIN":"891835"},
"891837":{"Location":"Canada","Company":"Quebec Telephone","IIN_WithSpaces":"89 1 837","IIN":"891837"},
"891277":{"Location":"Canada","Company":"Sask Tel","IIN_WithSpaces":"89 1 277","IIN":"891277"},
"891727":{"Location":"Canada","Company":"Sask Tel","IIN_WithSpaces":"89 1 727","IIN":"891727"},
"891821":{"Location":"Canada","Company":"Tata Communications  Canada ULC","IIN_WithSpaces":"89 1 821","IIN":"891821"},
"891007":{"Location":"Canada","Company":"Telebec Ltée","IIN_WithSpaces":"89 1 007","IIN":"891007"},
"891223":{"Location":"Canada","Company":"Telus Communications Company","IIN_WithSpaces":"89 1 223","IIN":"891223"},
"891248":{"Location":"Canada","Company":"Telus Communications Inc.","IIN_WithSpaces":"89 1 248","IIN":"891248"},
"891258":{"Location":"Canada","Company":"Telus Communications Inc.","IIN_WithSpaces":"89 1 258","IIN":"891258"},
"891869":{"Location":"Canada","Company":"Unitel Communications Inc.","IIN_WithSpaces":"89 1 869","IIN":"891869"},
"8923801":{"Location":"Cape Verde","Company":"CV Móvel, S.A.","IIN_WithSpaces":"89 238 01","IIN":"8923801"},
"8923802":{"Location":"Cape Verde","Company":"T+Telecomunicações","IIN_WithSpaces":"89 238 02","IIN":"8923802"},
"891015":{"Location":"Cayman Islands","Company":"Cable and Wireless (C.I.) Ltd.","IIN_WithSpaces":"89 1 015","IIN":"891015"},
"8923501":{"Location":"Chad","Company":"Celtel Tchad S.A.","IIN_WithSpaces":"89 235 01","IIN":"8923501"},
"8923502":{"Location":"Chad","Company":"Tchad Mobile - Libertis","IIN_WithSpaces":"89 235 02","IIN":"8923502"},
"898600":{"Location":"China","Company":"China Telecom","IIN_WithSpaces":"89 86 00","IIN":"898600"},
"8957002":{"Location":"Colombia","Company":"Edatel S.A. E.S.P.","IIN_WithSpaces":"89 57 002","IIN":"8957002"},
"8957123":{"Location":"Colombia","Company":"Telefónica Móviles Colombia SA (Movistar)","IIN_WithSpaces":"89 57 123","IIN":"8957123"},
"8926901":{"Location":"Comoros","Company":"Société nationale des télécommunications (Comores Telecom)","IIN_WithSpaces":"89 269 01","IIN":"8926901"},
"8924201":{"Location":"Congo","Company":"Celtel Congo S.A.","IIN_WithSpaces":"89 242 01","IIN":"8924201"},
"8950601":{"Location":"Costa Rica","Company":"Instituto Costarricense de Electricidad (ICE)","IIN_WithSpaces":"89 506 01","IIN":"8950601"},
"8922502":{"Location":"Côte d'Ivoire","Company":"Atlantique Telecom Côte d'Ivoire","IIN_WithSpaces":"89 225 02","IIN":"8922502"},
"8922501":{"Location":"Côte d'Ivoire","Company":"Comstar S.A.","IIN_WithSpaces":"89 225 01","IIN":"8922501"},
"8938598":{"Location":"Croatia","Company":"Croatian  Telecom","IIN_WithSpaces":"89 385 98","IIN":"8938598"},
"8938591":{"Location":"Croatia","Company":"VIP-NET GSM d.o.o","IIN_WithSpaces":"89 385 91","IIN":"8938591"},
"895301":{"Location":"Cuba","Company":"Empresa de Telecomunicaciones Celulares del Caribe S.A. (C-COM)","IIN_WithSpaces":"89 53 01","IIN":"895301"},
"8959900":{"Location":"Curaçao","Company":"ANTELECOM N.V.","IIN_WithSpaces":"89 599 00","IIN":"8959900"},
"8959996":{"Location":"Curaçao","Company":"Curacao Telecom","IIN_WithSpaces":"89 599 96","IIN":"8959996"},
"8959991":{"Location":"Curaçao","Company":"UTS - SETEL","IIN_WithSpaces":"89 599 91","IIN":"8959991"},
"8935722":{"Location":"Cyprus","Company":"Cablenet Communications Systems Ltd","IIN_WithSpaces":"89 357 22","IIN":"8935722"},
"8935789":{"Location":"Cyprus","Company":"Cyprus Telecommunications Authority (CYTA)","IIN_WithSpaces":"89 357 89","IIN":"8935789"},
"8935720":{"Location":"Cyprus","Company":"PrimeTel Plc","IIN_WithSpaces":"89 357 20","IIN":"8935720"},
"8935710":{"Location":"Cyprus","Company":"Scancom (Cyprus) Ltd.","IIN_WithSpaces":"89 357 10","IIN":"8935710"},
"8942004":{"Location":"Czech Rep.","Company":"Mobilkom a.s.","IIN_WithSpaces":"89 420 04","IIN":"8942004"},
"8942098":{"Location":"Czech Rep.","Company":"Správa Zeleznicni Dopravni Cesty, s.o.","IIN_WithSpaces":"89 420 98","IIN":"8942098"},
"8942005":{"Location":"Czech Rep.","Company":"Telefónica O2 Czech Republic a.s.","IIN_WithSpaces":"89 420 05","IIN":"8942005"},
"8942020":{"Location":"Czech Rep.","Company":"Telefónica O2 Czech Republic a.s.","IIN_WithSpaces":"89 420 20","IIN":"8942020"},
"8942001":{"Location":"Czech Rep.","Company":"T-Mobile Czech Republic a.s.","IIN_WithSpaces":"89 420 01","IIN":"8942001"},
"8942007":{"Location":"Czech Rep.","Company":"Travel Telekommunikation s.r.o.","IIN_WithSpaces":"89 420 07","IIN":"8942007"},
"8942031":{"Location":"Czech Rep.","Company":"Vodafone Czech Republic a.s.","IIN_WithSpaces":"89 420 31","IIN":"8942031"},
"8985001":{"Location":"Dem. People's Rep. of Korea","Company":"North East Asia Telephone and Telecommunications Co. Ltd.","IIN_WithSpaces":"89 850 01","IIN":"8985001"},
"8924302":{"Location":"Dem. Rep. of the Congo","Company":"Celtel Congo (RDC) sprl","IIN_WithSpaces":"89 243 02","IIN":"8924302"},
"8924384":{"Location":"Dem. Rep. of the Congo","Company":"Congo-Chine Telecom Sarl","IIN_WithSpaces":"89 243 84","IIN":"8924384"},
"8924389":{"Location":"Dem. Rep. of the Congo","Company":"Sait Telecom","IIN_WithSpaces":"89 243 89","IIN":"8924389"},
"8924301":{"Location":"Dem. Rep. of the Congo","Company":"Vodacom Congo RDC sprl","IIN_WithSpaces":"89 243 01","IIN":"8924301"},
"894506":{"Location":"Denmark","Company":"Hi3G Denmark ApS","IIN_WithSpaces":"89 45 06","IIN":"894506"},
"894501":{"Location":"Denmark","Company":"TDC Mobil A/S","IIN_WithSpaces":"89 45 01","IIN":"894501"},
"894503":{"Location":"Denmark","Company":"Telia Sonera A/S","IIN_WithSpaces":"89 45 03","IIN":"894503"},
"894504":{"Location":"Denmark","Company":"Telia Sonera A/S","IIN_WithSpaces":"89 45 04","IIN":"894504"},
"891016":{"Location":"Dominica","Company":"Telecommunications of Dominica Ltd.","IIN_WithSpaces":"89 1 016","IIN":"891016"},
"891028":{"Location":"Dominican Rep.","Company":"Globe Wireless","IIN_WithSpaces":"89 1 028","IIN":"891028"},
"891650":{"Location":"Dominican Rep.","Company":"Verizon Dominicana","IIN_WithSpaces":"89 1 650","IIN":"891650"},
"8959301":{"Location":"Ecuador","Company":"Consorcio Ecuatoriano de Telecomunicaciones S.A. (Conecel)","IIN_WithSpaces":"89 593 01","IIN":"8959301"},
"892002":{"Location":"Egypt","Company":"Vodafone Egypt Telecommunications  S.A.E.","IIN_WithSpaces":"89 20 02","IIN":"892002"},
"8924001":{"Location":"Equatorial Guinea","Company":"Guinea Ecuatorial de Telecomunicaciones Sociedad Anónima","IIN_WithSpaces":"89 240 01","IIN":"8924001"},
"8929101":{"Location":"Eritrea","Company":"Eritrea Telecommunication Services Corporation (EriTel)","IIN_WithSpaces":"89 291 01","IIN":"8929101"},
"8937204":{"Location":"Estonia","Company":"Elion Enterprises Ltd","IIN_WithSpaces":"89 372 04","IIN":"8937204"},
"8937201":{"Location":"Estonia","Company":"Estonian Mobile Telephone Company Ltd (EMT)","IIN_WithSpaces":"89 372 01","IIN":"8937201"},
"8937202":{"Location":"Estonia","Company":"Radiolinja Estonia Ltd (Radiolinja EESTI AS)","IIN_WithSpaces":"89 372 02","IIN":"8937202"},
"8937203":{"Location":"Estonia","Company":"Ritabell Ltd","IIN_WithSpaces":"89 372 03","IIN":"8937203"},
"8925101":{"Location":"Ethiopia","Company":"Ethiopian Telecommunications Corporation (ETC)","IIN_WithSpaces":"89 251 01","IIN":"8925101"},
"8950001":{"Location":"Falkland Islands (Malvinas)","Company":"Cable and Wireless Falkland Islands","IIN_WithSpaces":"89 500 01","IIN":"8950001"},
"8929802":{"Location":"Faroe Islands","Company":"Kall P/F","IIN_WithSpaces":"89 298 02","IIN":"8929802"},
"8967902":{"Location":"Fiji","Company":"Digicel (Fiji) Ltd","IIN_WithSpaces":"89 679 02","IIN":"8967902"},
"8967901":{"Location":"Fiji","Company":"Vodafone Fiji Ltd.","IIN_WithSpaces":"89 679 01","IIN":"8967901"},
"8935807":{"Location":"Finland","Company":"Alands Mobiltelefon Ab","IIN_WithSpaces":"89 358 07","IIN":"8935807"},
"8935804":{"Location":"Finland","Company":"DNA Finland Oy","IIN_WithSpaces":"89 358 04","IIN":"8935804"},
"8935806":{"Location":"Finland","Company":"DNA Finland Oy","IIN_WithSpaces":"89 358 06","IIN":"8935806"},
"8935802":{"Location":"Finland","Company":"Elisa Corporation","IIN_WithSpaces":"89 358 02","IIN":"8935802"},
"8935803":{"Location":"Finland","Company":"Elisa Corporation","IIN_WithSpaces":"89 358 03","IIN":"8935803"},
"8935805":{"Location":"Finland","Company":"Elisa Corporation","IIN_WithSpaces":"89 358 05","IIN":"8935805"},
"8935809":{"Location":"Finland","Company":"Saunalahti Group Oyj","IIN_WithSpaces":"89 358 09","IIN":"8935809"},
"8935801":{"Location":"Finland","Company":"TeliaSonera Finland Oyj","IIN_WithSpaces":"89 358 01","IIN":"8935801"},
"8935810":{"Location":"Finland","Company":"Ukko Mobile Oy","IIN_WithSpaces":"89 358 10","IIN":"8935810"},
"893320":{"Location":"France","Company":"Bouygues Telecom Europa","IIN_WithSpaces":"89 33 20","IIN":"893320"},
"893301":{"Location":"France","Company":"France Telecom","IIN_WithSpaces":"89 33 01","IIN":"893301"},
"893322":{"Location":"France","Company":"TRANSATEL","IIN_WithSpaces":"89 33 22","IIN":"893322"},
"8968915":{"Location":"French Polynesia","Company":"Pacific Mobile Telecom","IIN_WithSpaces":"89 689 15","IIN":"8968915"},
"8968901":{"Location":"French Polynesia","Company":"Tikiphone","IIN_WithSpaces":"89 689 01","IIN":"8968901"},
"8924103":{"Location":"Gabon","Company":"Celtel Gabon S.A.","IIN_WithSpaces":"89 241 03","IIN":"8924103"},
"8922002":{"Location":"Gambia","Company":"Africell Gambia","IIN_WithSpaces":"89 220 02","IIN":"8922002"},
"8922003":{"Location":"Gambia","Company":"Comium Gambia Ltd","IIN_WithSpaces":"89 220 03","IIN":"8922003"},
"8922004":{"Location":"Gambia","Company":"QCELL Gambia Ltd","IIN_WithSpaces":"89 220 04","IIN":"8922004"},
"8999501":{"Location":"Georgia","Company":"Geocell Ltd.","IIN_WithSpaces":"89 995 01","IIN":"8999501"},
"8999502":{"Location":"Georgia","Company":"Magticom Ltd.","IIN_WithSpaces":"89 995 02","IIN":"8999502"},
"894923":{"Location":"Germany","Company":"AirData AG","IIN_WithSpaces":"89 49 23","IIN":"894923"},
"894901":{"Location":"Germany","Company":"Deutsche Telekom AG","IIN_WithSpaces":"89 49 01","IIN":"894901"},
"894902":{"Location":"Germany","Company":"Deutsche Telekom AG","IIN_WithSpaces":"89 49 02","IIN":"894902"},
"894903":{"Location":"Germany","Company":"Deutsche Telekom AG","IIN_WithSpaces":"89 49 03","IIN":"894903"},
"894921":{"Location":"Germany","Company":"E-Plus Mobilfunk GmbH (E-Plus)","IIN_WithSpaces":"89 49 21","IIN":"894921"},
"894922":{"Location":"Germany","Company":"O2 (Germany) GmbH & Co.","IIN_WithSpaces":"89 49 22","IIN":"894922"},
"894931":{"Location":"Germany","Company":"Vintage Wireless Networks Gesellschaft für Telekommunikation mbH","IIN_WithSpaces":"89 49 31","IIN":"894931"},
"894926":{"Location":"Germany","Company":"Viola Kabelgesellschaft mbH","IIN_WithSpaces":"89 49 26","IIN":"894926"},
"894920":{"Location":"Germany","Company":"Vodafone D2 GmbH","IIN_WithSpaces":"89 49 20","IIN":"894920"},
"8923309":{"Location":"Ghana","Company":"ACG Telesystems Ghana Ltd.","IIN_WithSpaces":"89 233 09","IIN":"8923309"},
"8923302":{"Location":"Ghana","Company":"Ghana Telecommunications Co. Ltd.","IIN_WithSpaces":"89 233 02","IIN":"8923302"},
"8935009":{"Location":"Gibraltar","Company":"Eazi Telecom Ltd","IIN_WithSpaces":"89 350 09","IIN":"8935009"},
"8935001":{"Location":"Gibraltar","Company":"GIBTELECOM Ltd","IIN_WithSpaces":"89 350 01","IIN":"8935001"},
"893001":{"Location":"Greece","Company":"COSMOTE","IIN_WithSpaces":"89 30 01","IIN":"893001"},
"893002":{"Location":"Greece","Company":"Hellenic Telecommunication Organization S.A.(OTE)","IIN_WithSpaces":"89 30 02","IIN":"893002"},
"893009":{"Location":"Greece","Company":"Info-Quest S.A.","IIN_WithSpaces":"89 30 09","IIN":"893009"},
"893005":{"Location":"Greece","Company":"Vodafone","IIN_WithSpaces":"89 30 05","IIN":"893005"},
"893010":{"Location":"Greece","Company":"WIND Hellas (ex-TIM)","IIN_WithSpaces":"89 30 10","IIN":"893010"},
"8929901":{"Location":"Greenland","Company":"TELE Greenland A/S","IIN_WithSpaces":"89 299 01","IIN":"8929901"},
"891017":{"Location":"Grenada","Company":"Grenada Telecommunications Ltd. (GRENTEL)","IIN_WithSpaces":"89 1 017","IIN":"891017"},
"8959001":{"Location":"Guadeloupe","Company":"France Caraïbe Mobiles","IIN_WithSpaces":"89 590 01","IIN":"8959001"},
"8959003":{"Location":"Guadeloupe","Company":"Saint Martin & Saint Barthelemy Tel Cell sarl","IIN_WithSpaces":"89 590 03","IIN":"8959003"},
"891008":{"Location":"Guam","Company":"Wave Runner LLC","IIN_WithSpaces":"89 1 008","IIN":"891008"},
"8922401":{"Location":"Guinea","Company":"Orange Guinée","IIN_WithSpaces":"89 224 01","IIN":"8922401"},
"8924509":{"Location":"Guinea-Bissau","Company":"Guiné Telecom - Companhia de Telecomunicaçôes de GuinéBissau","IIN_WithSpaces":"89 245 09","IIN":"8924509"},
"8924501":{"Location":"Guinea-Bissau","Company":"Guinétel S.A.","IIN_WithSpaces":"89 245 01","IIN":"8924501"},
"8924502":{"Location":"Guinea-Bissau","Company":"Spacetel Guinea-Bissau S.A.","IIN_WithSpaces":"89 245 02","IIN":"8924502"},
"8959202":{"Location":"Guyana","Company":"Guyana Telephone and Telegraph Company Ltd. (GT&T)","IIN_WithSpaces":"89 592 02","IIN":"8959202"},
"8985207":{"Location":"Hong Kong, China","Company":"China Unicom International Ltd","IIN_WithSpaces":"89 852 07","IIN":"8985207"},
"8985211":{"Location":"Hong Kong, China","Company":"China-Hongkong Telecom Ltd","IIN_WithSpaces":"89 852 11","IIN":"8985211"},
"8985219":{"Location":"Hong Kong, China","Company":"Hong Kong Telecommunications Ltd","IIN_WithSpaces":"89 852 19","IIN":"8985219"},
"8985200":{"Location":"Hong Kong, China","Company":"Hongkong CSL Ltd","IIN_WithSpaces":"89 852 00","IIN":"8985200"},
"8985203":{"Location":"Hong Kong, China","Company":"Hutchison 3G HK Ltd","IIN_WithSpaces":"89 852 03","IIN":"8985203"},
"8985268":{"Location":"Hong Kong, China","Company":"Hutchison Global Communications Ltd","IIN_WithSpaces":"89 852 68","IIN":"8985268"},
"8985204":{"Location":"Hong Kong, China","Company":"Hutchison Telephone Company Ltd","IIN_WithSpaces":"89 852 04","IIN":"8985204"},
"8985216":{"Location":"Hong Kong, China","Company":"Mandarin Communications Ltd","IIN_WithSpaces":"89 852 16","IIN":"8985216"},
"8985210":{"Location":"Hong Kong, China","Company":"New World PCS Ltd","IIN_WithSpaces":"89 852 10","IIN":"8985210"},
"8985269":{"Location":"Hong Kong, China","Company":"New World Telecommunication Ltd","IIN_WithSpaces":"89 852 69","IIN":"8985269"},
"8985218":{"Location":"Hong Kong, China","Company":"Pacific Link Communication Ltd","IIN_WithSpaces":"89 852 18","IIN":"8985218"},
"8985230":{"Location":"Hong Kong, China","Company":"PCCW-HKT","IIN_WithSpaces":"89 852 30","IIN":"8985230"},
"8985280":{"Location":"Hong Kong, China","Company":"PCCW-HKT","IIN_WithSpaces":"89 852 80","IIN":"8985280"},
"8985212":{"Location":"Hong Kong, China","Company":"Peoples Telephone Company Ltd","IIN_WithSpaces":"89 852 12","IIN":"8985212"},
"8985206":{"Location":"Hong Kong, China","Company":"SmartTone Mobile Communications Ltd","IIN_WithSpaces":"89 852 06","IIN":"8985206"},
"8985208":{"Location":"Hong Kong, China","Company":"Trident Telecom Ventures Ltd","IIN_WithSpaces":"89 852 08","IIN":"8985208"},
"8985277":{"Location":"Hong Kong, China","Company":"Wharf T&T  Ltd","IIN_WithSpaces":"89 852 77","IIN":"8985277"},
"893620":{"Location":"Hungary","Company":"Telenor Hungary Ltd","IIN_WithSpaces":"89 36 20","IIN":"893620"},
"893631":{"Location":"Hungary","Company":"UPC MAGYARORSZÀG KFT.","IIN_WithSpaces":"89 36 31","IIN":"893631"},
"893630":{"Location":"Hungary","Company":"WESTEL 900 Mobil Távközlési Rt.","IIN_WithSpaces":"89 36 30","IIN":"893630"},
"8935405":{"Location":"Iceland","Company":"Hallo GSM","IIN_WithSpaces":"89 354 05","IIN":"8935405"},
"8935407":{"Location":"Iceland","Company":"IceCell ehf","IIN_WithSpaces":"89 354 07","IIN":"8935407"},
"8935400":{"Location":"Iceland","Company":"Iceland Telecom Ltd","IIN_WithSpaces":"89 354 00","IIN":"8935400"},
"8935404":{"Location":"Iceland","Company":"IMC Island ehf","IIN_WithSpaces":"89 354 04","IIN":"8935404"},
"8935403":{"Location":"Iceland","Company":"Islandesimi GSM","IIN_WithSpaces":"89 354 03","IIN":"8935403"},
"8935402":{"Location":"Iceland","Company":"Ital hf","IIN_WithSpaces":"89 354 02","IIN":"8935402"},
"899101":{"Location":"India","Company":"Aircel Digilink India Ltd","IIN_WithSpaces":"89 91 01","IIN":"899101"},
"899110":{"Location":"India","Company":"Bharti Mobile Ltd","IIN_WithSpaces":"89 91 10","IIN":"899110"},
"899121":{"Location":"India","Company":"BPL Mobile Communications","IIN_WithSpaces":"89 91 21","IIN":"899121"},
"899105":{"Location":"India","Company":"Fascel Ltd","IIN_WithSpaces":"89 91 05","IIN":"899105"},
"899130":{"Location":"India","Company":"Hutchison Essar South Ltd","IIN_WithSpaces":"89 91 30","IIN":"899130"},
"899168":{"Location":"India","Company":"Mahanagar Telephone Nigam Ltd","IIN_WithSpaces":"89 91 68","IIN":"899168"},
"899109":{"Location":"India","Company":"Reliance Telecom Ltd","IIN_WithSpaces":"89 91 09","IIN":"899109"},
"899114":{"Location":"India","Company":"Spice Communications Ltd","IIN_WithSpaces":"89 91 14","IIN":"899114"},
"899111":{"Location":"India","Company":"Sterling Cellular Ltd","IIN_WithSpaces":"89 91 11","IIN":"899111"},
"896200":{"Location":"Indonesia","Company":"PT Pasifik Satelit Nusantara","IIN_WithSpaces":"89 62 00","IIN":"896200"},
"896201":{"Location":"Indonesia","Company":"PT Satelit Palapa Indonesia (PT Satelindo)","IIN_WithSpaces":"89 62 01","IIN":"896201"},
"899814":{"Location":"Iran (Islamic Republic of)","Company":"Kish free-zone organisation (KFZO), Payem Kish","IIN_WithSpaces":"89 98 14","IIN":"899814"},
"899811":{"Location":"Iran (Islamic Republic of)","Company":"Telecommunications Company of Iran (TCI)","IIN_WithSpaces":"89 98 11","IIN":"899811"},
"8996405":{"Location":"Iraq","Company":"Asiacell Communications LLC","IIN_WithSpaces":"89 964 05","IIN":"8996405"},
"8996440":{"Location":"Iraq","Company":"Korek Telecom","IIN_WithSpaces":"89 964 40","IIN":"8996440"},
"8996420":{"Location":"Iraq","Company":"Zain Iraq (previously Atheer)","IIN_WithSpaces":"89 964 20","IIN":"8996420"},
"8996430":{"Location":"Iraq","Company":"Zain Iraq (previously Iraqna)","IIN_WithSpaces":"89 964 30","IIN":"8996430"},
"8935304":{"Location":"Ireland","Company":"IDT Card Services Ireland Ltd","IIN_WithSpaces":"89 353 04","IIN":"8935304"},
"8935311":{"Location":"Ireland","Company":"Liffey Telecom Ltd","IIN_WithSpaces":"89 353 11","IIN":"8935311"},
"8935303":{"Location":"Ireland","Company":"Meteor Mobile Communications","IIN_WithSpaces":"89 353 03","IIN":"8935303"},
"8935302":{"Location":"Ireland","Company":"Telefónica Ireland Ltd","IIN_WithSpaces":"89 353 02","IIN":"8935302"},
"8935301":{"Location":"Ireland","Company":"Vodaphone GSM Network","IIN_WithSpaces":"89 353 01","IIN":"8935301"},
"8997203":{"Location":"Israel","Company":"Barak I.T.C.","IIN_WithSpaces":"89 972 03","IIN":"8997203"},
"8997202":{"Location":"Israel","Company":"Cellcom Israel Ltd","IIN_WithSpaces":"89 972 02","IIN":"8997202"},
"8997208":{"Location":"Israel","Company":"Golan Telecom Ltd","IIN_WithSpaces":"89 972 08","IIN":"8997208"},
"8997250":{"Location":"Israel","Company":"Pelephone Communications Ltd","IIN_WithSpaces":"89 972 50","IIN":"8997250"},
"893901":{"Location":"Italy","Company":"Azienda Di Stato per i Servizi Telefonici","IIN_WithSpaces":"89 39 01","IIN":"893901"},
"893998":{"Location":"Italy","Company":"Blu S.p.A.","IIN_WithSpaces":"89 39 98","IIN":"893998"},
"893999":{"Location":"Italy","Company":"H3G S.p.A.","IIN_WithSpaces":"89 39 99","IIN":"893999"},
"893977":{"Location":"Italy","Company":"IPSE 2000","IIN_WithSpaces":"89 39 77","IIN":"893977"},
"893910":{"Location":"Italy","Company":"Vodafone Omnitel  S.p.A.","IIN_WithSpaces":"89 39 10","IIN":"893910"},
"891018":{"Location":"Jamaica","Company":"Cable and Wireless Jamaica Ltd","IIN_WithSpaces":"89 1 018","IIN":"891018"},
"891582":{"Location":"Jamaica","Company":"Cable and Wireless Jamaica Ltd","IIN_WithSpaces":"89 1 582","IIN":"891582"},
"891050":{"Location":"Jamaica","Company":"Digicel Jamaica Ltd","IIN_WithSpaces":"89 1 050","IIN":"891050"},
"898165":{"Location":"Japan","Company":"Cable and Wireless IDC Inc.","IIN_WithSpaces":"89 81 65","IIN":"898165"},
"898100":{"Location":"Japan","Company":"eAccess Ltd.","IIN_WithSpaces":"89 81 00","IIN":"898100"},
"898101":{"Location":"Japan","Company":"KDDI Corporation","IIN_WithSpaces":"89 81 01","IIN":"898101"},
"898130":{"Location":"Japan","Company":"KDDI Corporation","IIN_WithSpaces":"89 81 30","IIN":"898130"},
"898110":{"Location":"Japan","Company":"NTT DoCoMo Inc.","IIN_WithSpaces":"89 81 10","IIN":"898110"},
"898131":{"Location":"Japan","Company":"UQ Communications Inc.","IIN_WithSpaces":"89 81 31","IIN":"898131"},
"898120":{"Location":"Japan","Company":"Vodafone Co. Ltd.","IIN_WithSpaces":"89 81 20","IIN":"898120"},
"898170":{"Location":"Japan","Company":"Willcom Inc.","IIN_WithSpaces":"89 81 70","IIN":"898170"},
"898171":{"Location":"Japan","Company":"Wireless City Planning Inc.","IIN_WithSpaces":"89 81 71","IIN":"898171"},
"8996277":{"Location":"Jordan","Company":"MobileCom","IIN_WithSpaces":"89 962 77","IIN":"8996277"},
"8999701":{"Location":"Kazakhstan","Company":"Kar-Tel Ltd","IIN_WithSpaces":"89 997 01","IIN":"8999701"},
"8925403":{"Location":"Kenya","Company":"Celtel Kenya Ltd","IIN_WithSpaces":"89 254 03","IIN":"8925403"},
"8925405":{"Location":"Kenya","Company":"Econet Wireless Kenya Ltd","IIN_WithSpaces":"89 254 05","IIN":"8925405"},
"8925402":{"Location":"Kenya","Company":"Safaricom Ltd","IIN_WithSpaces":"89 254 02","IIN":"8925402"},
"8925407":{"Location":"Kenya","Company":"Telkom Kenya Ltd","IIN_WithSpaces":"89 254 07","IIN":"8925407"},
"898201":{"Location":"Korea (Rep. of)","Company":"KT Corporation","IIN_WithSpaces":"89 82 01","IIN":"898201"},
"898230":{"Location":"Korea (Rep. of)","Company":"KTF Freetel Co. Ltd.","IIN_WithSpaces":"89 82 30","IIN":"898230"},
"8996504":{"Location":"Kuwait","Company":"Kuwait Telecom Company (VIVA)","IIN_WithSpaces":"89 965 04","IIN":"8996504"},
"899659":{"Location":"Kuwait","Company":"Zain (ex-Mobile Telecommunications Company)","IIN_WithSpaces":"89 965 9","IIN":"899659"},
"8999601":{"Location":"Kyrgyzstan","Company":"Bitel Ltd","IIN_WithSpaces":"89 996 01","IIN":"8999601"},
"8985608":{"Location":"Lao P.D.R.","Company":"Millicom Lao Company Ltd","IIN_WithSpaces":"89 856 08","IIN":"8985608"},
"8937101":{"Location":"Latvia","Company":"Latvian Mobile Telephone Co. Ltd.","IIN_WithSpaces":"89 371 01","IIN":"8937101"},
"8996101":{"Location":"Lebanon","Company":"FTML, S.A.L.","IIN_WithSpaces":"89 961 01","IIN":"8996101"},
"8996103":{"Location":"Lebanon","Company":"Libancell","IIN_WithSpaces":"89 961 03","IIN":"8996103"},
"8996105":{"Location":"Lebanon","Company":"Ogero Telecom","IIN_WithSpaces":"89 961 05","IIN":"8996105"},
"8926611":{"Location":"Lesotho","Company":"Tele-Com Mobile","IIN_WithSpaces":"89 266 11","IIN":"8926611"},
"8923134":{"Location":"Liberia","Company":"Celcom Telecommunications Inc.","IIN_WithSpaces":"89 231 34","IIN":"8923134"},
"8923104":{"Location":"Liberia","Company":"Comium Liberia Inc.","IIN_WithSpaces":"89 231 04","IIN":"8923104"},
"8923101":{"Location":"Liberia","Company":"Lonestar Communications Corporation","IIN_WithSpaces":"89 231 01","IIN":"8923101"},
"8921800":{"Location":"Libya","Company":"Libyana Mobile Phone","IIN_WithSpaces":"89 218 00","IIN":"8921800"},
"8942306":{"Location":"Liechtenstein","Company":"Cubic AG","IIN_WithSpaces":"89 423 06","IIN":"8942306"},
"8942307":{"Location":"Liechtenstein","Company":"First Mobile AG","IIN_WithSpaces":"89 423 07","IIN":"8942307"},
"8942305":{"Location":"Liechtenstein","Company":"Mobilkom Liechenstein AG","IIN_WithSpaces":"89 423 05","IIN":"8942305"},
"8942302":{"Location":"Liechtenstein","Company":"Orange (Liechtenstein) AG","IIN_WithSpaces":"89 423 02","IIN":"8942302"},
"8942301":{"Location":"Liechtenstein","Company":"Swisscom (Schweiz) AG","IIN_WithSpaces":"89 423 01","IIN":"8942301"},
"8937002":{"Location":"Lithuania","Company":"Bité GSM UAB","IIN_WithSpaces":"89 370 02","IIN":"8937002"},
"8937003":{"Location":"Lithuania","Company":"Tele2","IIN_WithSpaces":"89 370 03","IIN":"8937003"},
"8937001":{"Location":"Lithuania","Company":"UAB Omnitel","IIN_WithSpaces":"89 370 01","IIN":"8937001"},
"8935200":{"Location":"Luxembourg","Company":"Entreprise de Postes et Télécommunications","IIN_WithSpaces":"89 352 00","IIN":"8935200"},
"8935201":{"Location":"Luxembourg","Company":"Entreprise de Postes et Télécommunications","IIN_WithSpaces":"89 352 01","IIN":"8935201"},
"8935202":{"Location":"Luxembourg","Company":"MTX Connect S.à r.l.","IIN_WithSpaces":"89 352 02","IIN":"8935202"},
"8935277":{"Location":"Luxembourg","Company":"Tango S.A.","IIN_WithSpaces":"89 352 77","IIN":"8935277"},
"8935299":{"Location":"Luxembourg","Company":"Voxmobile","IIN_WithSpaces":"89 352 99","IIN":"8935299"},
"8985301":{"Location":"Macao, China","Company":"Companhia de Telecomunicaçôes de Macau SARL (CTM)","IIN_WithSpaces":"89 853 01","IIN":"8985301"},
"8985303":{"Location":"Macao, China","Company":"Hutchison Telefone (Macau) Limitada","IIN_WithSpaces":"89 853 03","IIN":"8985303"},
"8985300":{"Location":"Macao, China","Company":"Smartone Comunicaçôes Móveis S.A.","IIN_WithSpaces":"89 853 00","IIN":"8985300"},
"8926102":{"Location":"Madagascar","Company":"Orange Madagascar","IIN_WithSpaces":"89 261 02","IIN":"8926102"},
"8926502":{"Location":"Malawi","Company":"Celtel Malawi Ltd.","IIN_WithSpaces":"89 265 02","IIN":"8926502"},
"896001":{"Location":"Malaysia","Company":"Binariang Sdn. Bhd.","IIN_WithSpaces":"89 60 01","IIN":"896001"},
"896019":{"Location":"Malaysia","Company":"Celcom (Malaysia) Sdn. Bhd.","IIN_WithSpaces":"89 60 19","IIN":"896019"},
"896030":{"Location":"Malaysia","Company":"Packet One Networks (Malaysia) Sdn Bhd","IIN_WithSpaces":"89 60 30","IIN":"896030"},
"896000":{"Location":"Malaysia","Company":"Telekom Malaysia Berhad (TM)","IIN_WithSpaces":"89 60 00","IIN":"896000"},
"896088":{"Location":"Malaysia","Company":"Time Telecommunications Sdn. Bhd.","IIN_WithSpaces":"89 60 88","IIN":"896088"},
"896020":{"Location":"Malaysia","Company":"U Mobile Sdn Bhd","IIN_WithSpaces":"89 60 20","IIN":"896020"},
"8996001":{"Location":"Maldives","Company":"Dhivehi Raajjey Ge Gulhun Private Ltd. (DHIRAAGU)","IIN_WithSpaces":"89 960 01","IIN":"8996001"},
"8922302":{"Location":"Mali","Company":"Ikatel","IIN_WithSpaces":"89 223 02","IIN":"8922302"},
"8935677":{"Location":"Malta","Company":"3G Telecommunications Ltd","IIN_WithSpaces":"89 356 77","IIN":"8935677"},
"8969201":{"Location":"Marshall Islands","Company":"Marshall Islands National Telecommunications Authority","IIN_WithSpaces":"89 692 01","IIN":"8969201"},
"8922203":{"Location":"Mauritania","Company":"La Mauritano - Tunisienne de Télécommunications (MATTEL)","IIN_WithSpaces":"89 222 03","IIN":"8922203"},
"8922202":{"Location":"Mauritania","Company":"Mauritel Mobiles","IIN_WithSpaces":"89 222 02","IIN":"8922202"},
"8923002":{"Location":"Mauritius","Company":"Emtel Ltd.","IIN_WithSpaces":"89 230 02","IIN":"8923002"},
"8923003":{"Location":"Mauritius","Company":"Managhar Telephone (Mauritius) Ltd","IIN_WithSpaces":"89 230 03","IIN":"8923003"},
"8923001":{"Location":"Mauritius","Company":"Mauritius Telecom Ltd. (MT)","IIN_WithSpaces":"89 230 01","IIN":"8923001"},
"895203":{"Location":"Mexico","Company":"Pegaso Comunicaciones y Sistemas S.A. de C.V.","IIN_WithSpaces":"89 52 03","IIN":"895203"},
"895202":{"Location":"Mexico","Company":"Radiomóvil DIPSA, S.A. de C.V. (Telcel)","IIN_WithSpaces":"89 52 02","IIN":"895202"},
"895201":{"Location":"Mexico","Company":"Teléfonos de México S.A. de C.V.","IIN_WithSpaces":"89 52 01","IIN":"895201"},
"8969101":{"Location":"Micronesia","Company":"FSM Telecommunication Corporation","IIN_WithSpaces":"89 691 01","IIN":"8969101"},
"8937304":{"Location":"Moldova (Republic of)","Company":"I.M. Eventis Mobile s.r.l.","IIN_WithSpaces":"89 373 04","IIN":"8937304"},
"8937301":{"Location":"Moldova (Republic of)","Company":"JSC Orange Moldova","IIN_WithSpaces":"89 373 01","IIN":"8937301"},
"8937302":{"Location":"Moldova (Republic of)","Company":"Moldcell S.A.","IIN_WithSpaces":"89 373 02","IIN":"8937302"},
"8997606":{"Location":"Mongolia","Company":"G-Mobile Corporation","IIN_WithSpaces":"89 976 06","IIN":"8997606"},
"8938200":{"Location":"Montenegro","Company":"Crnogorski Telekom AD","IIN_WithSpaces":"89 382 00","IIN":"8938200"},
"8938203":{"Location":"Montenegro","Company":"MTEL d.o.o. Podgorica","IIN_WithSpaces":"89 382 03","IIN":"8938203"},
"8938201":{"Location":"Montenegro","Company":"Promonte GSM","IIN_WithSpaces":"89 382 01","IIN":"8938201"},
"891019":{"Location":"Montserrat","Company":"Cable and Wireless (W.I.) Ltd.","IIN_WithSpaces":"89 1 019","IIN":"891019"},
"8925804":{"Location":"Mozambique","Company":"VM Sarl","IIN_WithSpaces":"89 258 04","IIN":"8925804"},
"8926401":{"Location":"Namibia","Company":"Mobile Telecommunications Ltd.","IIN_WithSpaces":"89 264 01","IIN":"8926401"},
"8926422":{"Location":"Namibia","Company":"Wireless Technologies Namibia Pty Ltd","IIN_WithSpaces":"89 264 22","IIN":"8926422"},
"8997702":{"Location":"Nepal","Company":"Spice Nepal Private Ltd.","IIN_WithSpaces":"89 977 02","IIN":"8997702"},
"893102":{"Location":"Netherlands","Company":"6GMobile B.V.","IIN_WithSpaces":"89 31 02","IIN":"893102"},
"893101":{"Location":"Netherlands","Company":"ACN Europe B.V.","IIN_WithSpaces":"89 31 01","IIN":"893101"},
"893103":{"Location":"Netherlands","Company":"Blyk N.V.","IIN_WithSpaces":"89 31 03","IIN":"893103"},
"893116":{"Location":"Netherlands","Company":"Brucop Netherlands B.V.","IIN_WithSpaces":"89 31 16","IIN":"893116"},
"893105":{"Location":"Netherlands","Company":"Elephant Talk Communication Holding AG","IIN_WithSpaces":"89 31 05","IIN":"893105"},
"893117":{"Location":"Netherlands","Company":"Intercity Communications B.V.","IIN_WithSpaces":"89 31 17","IIN":"893117"},
"893100":{"Location":"Netherlands","Company":"KPN Telecom B.V., Card Services","IIN_WithSpaces":"89 31 00","IIN":"893100"},
"893110":{"Location":"Netherlands","Company":"KPN Telecom B.V., Card Services","IIN_WithSpaces":"89 31 10","IIN":"893110"},
"893109":{"Location":"Netherlands","Company":"Lycamobile Netherlands","IIN_WithSpaces":"89 31 09","IIN":"893109"},
"893124":{"Location":"Netherlands","Company":"Private Mobility Nederland BV","IIN_WithSpaces":"89 31 24","IIN":"893124"},
"893107":{"Location":"Netherlands","Company":"Teleena Nederlands","IIN_WithSpaces":"89 31 07","IIN":"893107"},
"893126":{"Location":"Netherlands","Company":"Telfort B.V.","IIN_WithSpaces":"89 31 26","IIN":"893126"},
"893120":{"Location":"Netherlands","Company":"T-Mobile (ex-Dutchtone N.V.)","IIN_WithSpaces":"89 31 20","IIN":"893120"},
"893118":{"Location":"Netherlands","Company":"UPC NL","IIN_WithSpaces":"89 31 18","IIN":"893118"},
"893144":{"Location":"Netherlands","Company":"Vodafone Libertel B.V.","IIN_WithSpaces":"89 31 44","IIN":"893144"},
"893131":{"Location":"Netherlands","Company":"Voiceworks BV","IIN_WithSpaces":"89 31 31","IIN":"893131"},
"893115":{"Location":"Netherlands","Company":"Ziggo BV","IIN_WithSpaces":"89 31 15","IIN":"893115"},
"8968701":{"Location":"New Caledonia","Company":"Office des Postes et des Télécommunications (OPT)","IIN_WithSpaces":"89 687 01","IIN":"8968701"},
"896402":{"Location":"New Zealand","Company":"Compass Communications Ltd","IIN_WithSpaces":"89 64 02","IIN":"896402"},
"896411":{"Location":"New Zealand","Company":"GoTalk Communications pty Ltd","IIN_WithSpaces":"89 64 11","IIN":"896411"},
"896415":{"Location":"New Zealand","Company":"Next Generation Network Ltd","IIN_WithSpaces":"89 64 15","IIN":"896415"},
"896424":{"Location":"New Zealand","Company":"NZ Communications Ltd","IIN_WithSpaces":"89 64 24","IIN":"896424"},
"896401":{"Location":"New Zealand","Company":"Pacific Funds Transfers Group Ltd","IIN_WithSpaces":"89 64 01","IIN":"896401"},
"896400":{"Location":"New Zealand","Company":"Telecom New Zealand Ltd","IIN_WithSpaces":"89 64 00","IIN":"896400"},
"896403":{"Location":"New Zealand","Company":"Telstra Clear Ltd","IIN_WithSpaces":"89 64 03","IIN":"896403"},
"8922702":{"Location":"Niger","Company":"Celtel Niger S.A.","IIN_WithSpaces":"89 227 02","IIN":"8922702"},
"891025":{"Location":"Northern Marianas","Company":"PTI","IIN_WithSpaces":"89 1 025","IIN":"891025"},
"8988299":{"Location":"Norway","Company":"AeroMobile (Telenor Mobile Aviation AS)","IIN_WithSpaces":"89 882 99","IIN":"8988299"},
"894705":{"Location":"Norway","Company":"Automobil Invest AS","IIN_WithSpaces":"89 47 05","IIN":"894705"},
"894708":{"Location":"Norway","Company":"Netcom GSM","IIN_WithSpaces":"89 47 08","IIN":"894708"},
"894700":{"Location":"Norway","Company":"Telenor AS","IIN_WithSpaces":"89 47 00","IIN":"894700"},
"894701":{"Location":"Norway","Company":"Telenor Mobile Aviation AS","IIN_WithSpaces":"89 47 01","IIN":"894701"},
"8996800":{"Location":"Oman","Company":"Oman Mobile Telecommunication Company LLC.","IIN_WithSpaces":"89 968 00","IIN":"8996800"},
"899204":{"Location":"Pakistan","Company":"CMPAK Ltd","IIN_WithSpaces":"89 92 04","IIN":"899204"},
"899201":{"Location":"Pakistan","Company":"Mobilink","IIN_WithSpaces":"89 92 01","IIN":"899201"},
"899203":{"Location":"Pakistan","Company":"Pak Telecom Mobile Ltd (UFONE)","IIN_WithSpaces":"89 92 03","IIN":"899203"},
"899206":{"Location":"Pakistan","Company":"Telenor Pakistan","IIN_WithSpaces":"89 92 06","IIN":"899206"},
"899207":{"Location":"Pakistan","Company":"Warid Telecom (Pvt) Ltd.","IIN_WithSpaces":"89 92 07","IIN":"899207"},
"8968080":{"Location":"Palau","Company":"Palau Mobile Corporation","IIN_WithSpaces":"89 680 80","IIN":"8968080"},
"8950701":{"Location":"Panama","Company":"Cable and Wireless Panama S.A.","IIN_WithSpaces":"89 507 01","IIN":"8950701"},
"8967503":{"Location":"Papua New Guinea","Company":"Digicel (PNG) Ltd","IIN_WithSpaces":"89 675 03","IIN":"8967503"},
"8959502":{"Location":"Paraguay","Company":"AMX Paraguay S.A.","IIN_WithSpaces":"89 595 02","IIN":"8959502"},
"8959501":{"Location":"Paraguay","Company":"Hóla Paraguay S.A.","IIN_WithSpaces":"89 595 01","IIN":"8959501"},
"8959505":{"Location":"Paraguay","Company":"Núcleo S.A.","IIN_WithSpaces":"89 595 05","IIN":"8959505"},
"895151":{"Location":"Peru","Company":"Telefónica del Peru S.A.","IIN_WithSpaces":"89 51 51","IIN":"895151"},
"896305":{"Location":"Philippines","Company":"Digital Telecommunications Phillipines, Inc.","IIN_WithSpaces":"89 63 05","IIN":"896305"},
"896300":{"Location":"Philippines","Company":"International Communications Corporation","IIN_WithSpaces":"89 63 00","IIN":"896300"},
"896301":{"Location":"Philippines","Company":"Philippine Global Communications Inc. (Philcom)","IIN_WithSpaces":"89 63 01","IIN":"896301"},
"896363":{"Location":"Philippines","Company":"Philippine Long Distance Telephone Company (PLDT)","IIN_WithSpaces":"89 63 63","IIN":"896363"},
"894801":{"Location":"Poland","Company":"Polkomtel S.A.","IIN_WithSpaces":"89 48 01","IIN":"894801"},
"894802":{"Location":"Poland","Company":"Polska telefonia Cyfrowa","IIN_WithSpaces":"89 48 02","IIN":"894802"},
"894819":{"Location":"Poland","Company":"Teleena Poland Ltd","IIN_WithSpaces":"89 48 19","IIN":"894819"},
"8935198":{"Location":"Portugal","Company":"Companhia Portugesa Rádio Marconi (CPRM), S.A.","IIN_WithSpaces":"89 351 98","IIN":"8935198"},
"8935104":{"Location":"Portugal","Company":"Lycamobile Portugal,Lda","IIN_WithSpaces":"89 351 04","IIN":"8935104"},
"8935103":{"Location":"Portugal","Company":"Main Road Telecomunicaçôes, SA","IIN_WithSpaces":"89 351 03","IIN":"8935103"},
"8935107":{"Location":"Portugal","Company":"Mundio Mobile (Portugal) Limited","IIN_WithSpaces":"89 351 07","IIN":"8935107"},
"8935199":{"Location":"Portugal","Company":"PT Comunicaçôes S.A.","IIN_WithSpaces":"89 351 99","IIN":"8935199"},
"8935112":{"Location":"Portugal","Company":"Refer Telecom Serviços de Telecomunicaçôes SA","IIN_WithSpaces":"89 351 12","IIN":"8935112"},
"8935101":{"Location":"Portugal","Company":"Telecel Comunicaçôes Pessoais S.A.","IIN_WithSpaces":"89 351 01","IIN":"8935101"},
"8935106":{"Location":"Portugal","Company":"Telecomunicações Moveis Nacionais","IIN_WithSpaces":"89 351 06","IIN":"8935106"},
"8935180":{"Location":"Portugal","Company":"Telecomunicações Moveis Nacionais","IIN_WithSpaces":"89 351 80","IIN":"8935180"},
"891283":{"Location":"Puerto Rico","Company":"AT&T","IIN_WithSpaces":"89 1 283","IIN":"891283"},
"891809":{"Location":"Puerto Rico","Company":"Puerto Rico Telephone Company (PTRC)","IIN_WithSpaces":"89 1 809","IIN":"891809"},
"891853":{"Location":"Puerto Rico","Company":"Telefónica Larga Distancia, Inc. (TLDI)","IIN_WithSpaces":"89 1 853","IIN":"891853"},
"8997400":{"Location":"Qatar","Company":"Qatar Telecom Q.S.C.","IIN_WithSpaces":"89 974 00","IIN":"8997400"},
"894003":{"Location":"Romania","Company":"Cosmorom S.A.","IIN_WithSpaces":"89 40 03","IIN":"894003"},
"894001":{"Location":"Romania","Company":"Mobifon S.A.","IIN_WithSpaces":"89 40 01","IIN":"894001"},
"894010":{"Location":"Romania","Company":"Orange Romania","IIN_WithSpaces":"89 40 10","IIN":"894010"},
"894002":{"Location":"Romania","Company":"Romtelecom","IIN_WithSpaces":"89 40 02","IIN":"894002"},
"897193":{"Location":"Russian Federation","Company":"Telecom XXI","IIN_WithSpaces":"89 7 193","IIN":"897193"},
"8925014":{"Location":"Rwanda","Company":"Airtel Rwanda Ltd","IIN_WithSpaces":"89 250 14","IIN":"8925014"},
"8925000":{"Location":"Rwanda","Company":"MTN Rwandacell sarl","IIN_WithSpaces":"89 250 00","IIN":"8925000"},
"891020":{"Location":"Saint Kitts and Nevis","Company":"Cable & Wireless St. Kitts and Nevis Ltd.","IIN_WithSpaces":"89 1 020","IIN":"891020"},
"891021":{"Location":"Saint Lucia","Company":"Cable and Wireless (St. Lucia) Ltd.","IIN_WithSpaces":"89 1 021","IIN":"891021"},
"8950801":{"Location":"Saint Pierre and Miquelon","Company":"SPM Telecom","IIN_WithSpaces":"89 508 01","IIN":"8950801"},
"891022":{"Location":"Saint Vincent and the Grenadines","Company":"Cable and Wireless (W.I.) Ltd.","IIN_WithSpaces":"89 1 022","IIN":"891022"},
"8968502":{"Location":"Samoa","Company":"SamoaTel","IIN_WithSpaces":"89 685 02","IIN":"8968502"},
"8923912":{"Location":"Sao Tome and Principe","Company":"Companhia Santomese de Telecomunicaçôes, SARL (CST)","IIN_WithSpaces":"89 239 12","IIN":"8923912"},
"8938103":{"Location":"Serbia","Company":"Preduzece za telekomunicacije \"Telekom Srbija' a.d.","IIN_WithSpaces":"89 381 03","IIN":"8938103"},
"8938101":{"Location":"Serbia","Company":"TELENOR d.o.o.","IIN_WithSpaces":"89 381 01","IIN":"8938101"},
"8938105":{"Location":"Serbia","Company":"Vip mobile d.o.o.","IIN_WithSpaces":"89 381 05","IIN":"8938105"},
"8924801":{"Location":"Seychelles","Company":"Cable and Wireless (Seychelles) Ltd.","IIN_WithSpaces":"89 248 01","IIN":"8924801"},
"8923233":{"Location":"Sierra Leone","Company":"Comium (Sierra Leone) Ltd","IIN_WithSpaces":"89 232 33","IIN":"8923233"},
"8923240":{"Location":"Sierra Leone","Company":"Datatel Network GSM (SL) Ltd","IIN_WithSpaces":"89 232 40","IIN":"8923240"},
"896503":{"Location":"Singapore","Company":"M1 Ltd","IIN_WithSpaces":"89 65 03","IIN":"896503"},
"896500":{"Location":"Singapore","Company":"Singapore Telecommunications Ltd (SingTel)","IIN_WithSpaces":"89 65 00","IIN":"896500"},
"896501":{"Location":"Singapore","Company":"Singapore Telecommunications Ltd (SingTel)","IIN_WithSpaces":"89 65 01","IIN":"896501"},
"896502":{"Location":"Singapore","Company":"Singapore Telecommunications Ltd (SingTel)","IIN_WithSpaces":"89 65 02","IIN":"896502"},
"896505":{"Location":"Singapore","Company":"StarHub Pte Ltd","IIN_WithSpaces":"89 65 05","IIN":"896505"},
"8942102":{"Location":"Slovakia","Company":"EUROTEL Bratislava a.s.","IIN_WithSpaces":"89 421 02","IIN":"8942102"},
"8942101":{"Location":"Slovakia","Company":"Orange Slovensko a.s.","IIN_WithSpaces":"89 421 01","IIN":"8942101"},
"8942103":{"Location":"Slovakia","Company":"Slovenské Telekomunikácie a.s. (Slovak Telekom)","IIN_WithSpaces":"89 421 03","IIN":"8942103"},
"8938641":{"Location":"Slovenia","Company":"Mobitel telekomunikacijske stortive d.d.","IIN_WithSpaces":"89 386 41","IIN":"8938641"},
"8938640":{"Location":"Slovenia","Company":"SI.Mobil d.d.","IIN_WithSpaces":"89 386 40","IIN":"8938640"},
"8938664":{"Location":"Slovenia","Company":"T-2 d.o.o.","IIN_WithSpaces":"89 386 64","IIN":"8938664"},
"8938670":{"Location":"Slovenia","Company":"TUSMOBIL d.o.o.","IIN_WithSpaces":"89 386 70","IIN":"8938670"},
"8925270":{"Location":"Somalia","Company":"Onkod Telecom Ltd","IIN_WithSpaces":"89 252 70","IIN":"8925270"},
"892701":{"Location":"South Africa","Company":"Mobile Telephone Networks (PTY) Ltd.","IIN_WithSpaces":"89 27 01","IIN":"892701"},
"8924905":{"Location":"South Sudan","Company":"Network of the World Ltd (NOW)","IIN_WithSpaces":"89 249 05","IIN":"8924905"},
"893418":{"Location":"Spain","Company":"Cableuropa, S.A.U.","IIN_WithSpaces":"89 34 18","IIN":"893418"},
"893402":{"Location":"Spain","Company":"Euskaltel S.A.","IIN_WithSpaces":"89 34 02","IIN":"893402"},
"893421":{"Location":"Spain","Company":"Jazz Telecom SA","IIN_WithSpaces":"89 34 21","IIN":"893421"},
"893429":{"Location":"Spain","Company":"NEO-SKY 2002 S.A.","IIN_WithSpaces":"89 34 29","IIN":"893429"},
"893406":{"Location":"Spain","Company":"R Cable y Telecomunicaciones Coruña S.A.","IIN_WithSpaces":"89 34 06","IIN":"893406"},
"893425":{"Location":"Spain","Company":"R Cable y Telecomunicaciones Galicia S.A.","IIN_WithSpaces":"89 34 25","IIN":"893425"},
"893401":{"Location":"Spain","Company":"Retevisión Móvil","IIN_WithSpaces":"89 34 01","IIN":"893401"},
"893409":{"Location":"Spain","Company":"Ruzorange sl","IIN_WithSpaces":"89 34 09","IIN":"893409"},
"893416":{"Location":"Spain","Company":"Telecable de Asturias, SAU","IIN_WithSpaces":"89 34 16","IIN":"893416"},
"893405":{"Location":"Spain","Company":"Telecor SA","IIN_WithSpaces":"89 34 05","IIN":"893405"},
"893434":{"Location":"Spain","Company":"Telefónica de España S.A.","IIN_WithSpaces":"89 34 34","IIN":"893434"},
"893407":{"Location":"Spain","Company":"Telefónica Móviles España","IIN_WithSpaces":"89 34 07","IIN":"893407"},
"893457":{"Location":"Spain","Company":"Vizzavi España, S.L.","IIN_WithSpaces":"89 34 57","IIN":"893457"},
"893456":{"Location":"Spain","Company":"Vodafone España S.A.","IIN_WithSpaces":"89 34 56","IIN":"893456"},
"893404":{"Location":"Spain","Company":"Xfera Móviles, S.A.","IIN_WithSpaces":"89 34 04","IIN":"893404"},
"899405":{"Location":"Sri Lanka","Company":"Bharti Airtel Lanka","IIN_WithSpaces":"89 94 05","IIN":"899405"},
"899403":{"Location":"Sri Lanka","Company":"Celltel Lanka Ltd.","IIN_WithSpaces":"89 94 03","IIN":"899403"},
"899402":{"Location":"Sri Lanka","Company":"Dialog Telekom Ltd","IIN_WithSpaces":"89 94 02","IIN":"899402"},
"8924999":{"Location":"Sudan","Company":"MTN - Sudan","IIN_WithSpaces":"89 249 99","IIN":"8924999"},
"8924901":{"Location":"Sudan","Company":"Sudan Telecom Company Ltd (Sudatel)","IIN_WithSpaces":"89 249 01","IIN":"8924901"},
"8959701":{"Location":"Suriname","Company":"International Communication Management & Services Ltd.","IIN_WithSpaces":"89 597 01","IIN":"8959701"},
"894606":{"Location":"Sweden","Company":"Abbla Mobile S.A.","IIN_WithSpaces":"89 46 06","IIN":"894606"},
"894605":{"Location":"Sweden","Company":"Götalandsnätet AB","IIN_WithSpaces":"89 46 05","IIN":"894605"},
"894607":{"Location":"Sweden","Company":"Hi3G Access AB","IIN_WithSpaces":"89 46 07","IIN":"894607"},
"894627":{"Location":"Sweden","Company":"Myindian AB","IIN_WithSpaces":"89 46 27","IIN":"894627"},
"894610":{"Location":"Sweden","Company":"Spring Mobil AB","IIN_WithSpaces":"89 46 10","IIN":"894610"},
"894614":{"Location":"Sweden","Company":"TDC Sverige AB","IIN_WithSpaces":"89 46 14","IIN":"894614"},
"894620":{"Location":"Sweden","Company":"Tele2 Sverige AB","IIN_WithSpaces":"89 46 20","IIN":"894620"},
"894670":{"Location":"Sweden","Company":"Tele2 Sverige AB","IIN_WithSpaces":"89 46 70","IIN":"894670"},
"894671":{"Location":"Sweden","Company":"Tele2 Sverige AB","IIN_WithSpaces":"89 46 71","IIN":"894671"},
"894609":{"Location":"Sweden","Company":"Telenor Mobile Sverige","IIN_WithSpaces":"89 46 09","IIN":"894609"},
"894608":{"Location":"Sweden","Company":"Telenor Sverige AB","IIN_WithSpaces":"89 46 08","IIN":"894608"},
"894601":{"Location":"Sweden","Company":"Telia Mobile AB","IIN_WithSpaces":"89 46 01","IIN":"894601"},
"894104":{"Location":"Switzerland","Company":"Bebbicell AG","IIN_WithSpaces":"89 41 04","IIN":"894104"},
"894126":{"Location":"Switzerland","Company":"Callventure Telecommunications","IIN_WithSpaces":"89 41 26","IIN":"894126"},
"894123":{"Location":"Switzerland","Company":"Die Schweizerische Post Information Technology Services","IIN_WithSpaces":"89 41 23","IIN":"894123"},
"894103":{"Location":"Switzerland","Company":"Orange Communications S.A.","IIN_WithSpaces":"89 41 03","IIN":"894103"},
"894102":{"Location":"Switzerland","Company":"Sunrise Communications AG","IIN_WithSpaces":"89 41 02","IIN":"894102"},
"894100":{"Location":"Switzerland","Company":"Swisscom","IIN_WithSpaces":"89 41 00","IIN":"894100"},
"894101":{"Location":"Switzerland","Company":"Swisscom","IIN_WithSpaces":"89 41 01","IIN":"894101"},
"894125":{"Location":"Switzerland","Company":"upc cablecom GmbH","IIN_WithSpaces":"89 41 25","IIN":"894125"},
"8925505":{"Location":"Tanzania","Company":"Celtel Tanzania Ltd.","IIN_WithSpaces":"89 255 05","IIN":"8925505"},
"896601":{"Location":"Thailand","Company":"CAT Telecom Public Company Ltd.","IIN_WithSpaces":"89 66 01","IIN":"896601"},
"896602":{"Location":"Thailand","Company":"TOT Corporation Public Company Ltd.","IIN_WithSpaces":"89 66 02","IIN":"896602"},
"896610":{"Location":"Thailand","Company":"Wireless Communications Services","IIN_WithSpaces":"89 66 10","IIN":"896610"},
"8938901":{"Location":"The Former Yugoslav Republic of Macedonia","Company":"Makedonski telekomunikacii A.D.","IIN_WithSpaces":"89 389 01","IIN":"8938901"},
"8967601":{"Location":"Tonga","Company":"Tonga Communications Corporation Ltd. (TCC)","IIN_WithSpaces":"89 676 01","IIN":"8967601"},
"891023":{"Location":"Trinidad and Tobago","Company":"Telecommunications Services of Trinidad and Tobago Ltd.(TSTT)","IIN_WithSpaces":"89 1 023","IIN":"891023"},
"899002":{"Location":"Turkey","Company":"Telsim","IIN_WithSpaces":"89 90 02","IIN":"899002"},
"899001":{"Location":"Turkey","Company":"Turkcell","IIN_WithSpaces":"89 90 01","IIN":"899001"},
"891024":{"Location":"Turks and Caicos Islands","Company":"Cable and Wireless (W.I.) Ltd.","IIN_WithSpaces":"89 1 024","IIN":"891024"},
"8938003":{"Location":"Ukraine","Company":"Kyivstar","IIN_WithSpaces":"89 380 03","IIN":"8938003"},
"8938001":{"Location":"Ukraine","Company":"Ukrainian Mobile Communications","IIN_WithSpaces":"89 380 01","IIN":"8938001"},
"8938002":{"Location":"Ukraine","Company":"Ukrainian Radio Systems Sc","IIN_WithSpaces":"89 380 02","IIN":"8938002"},
"899711":{"Location":"United Arab Emirates","Company":"The Emirates Telecommunications Corporations Ltd.","IIN_WithSpaces":"89 971 1","IIN":"899711"},
"8988216":{"Location":"United Arab Emirates","Company":"Thuraya Satellite Telecommunications Company","IIN_WithSpaces":"89 882 16","IIN":"8988216"},
"894402":{"Location":"United Kingdom","Company":"ARINC","IIN_WithSpaces":"89 44 02","IIN":"894402"},
"894424":{"Location":"United Kingdom","Company":"Asda Stores Ltd","IIN_WithSpaces":"89 44 24","IIN":"894424"},
"894480":{"Location":"United Kingdom","Company":"BLYK Limited","IIN_WithSpaces":"89 44 80","IIN":"894480"},
"894400":{"Location":"United Kingdom","Company":"British Telecommunications plc (British Telecom)","IIN_WithSpaces":"89 44 00","IIN":"894400"},
"894401":{"Location":"United Kingdom","Company":"British Telecommunications plc (British Telecom)","IIN_WithSpaces":"89 44 01","IIN":"894401"},
"894414":{"Location":"United Kingdom","Company":"Broadsword Network Ltd","IIN_WithSpaces":"89 44 14","IIN":"894414"},
"894405":{"Location":"United Kingdom","Company":"BT Skyphone","IIN_WithSpaces":"89 44 05","IIN":"894405"},
"894422":{"Location":"United Kingdom","Company":"Cable & Wireless Communications plc","IIN_WithSpaces":"89 44 22","IIN":"894422"},
"894433":{"Location":"United Kingdom","Company":"Cable & Wireless Guernsey Ltd","IIN_WithSpaces":"89 44 33","IIN":"894433"},
"894437":{"Location":"United Kingdom","Company":"Cable & Wireless Guernsey Ltd","IIN_WithSpaces":"89 44 37","IIN":"894437"},
"894418":{"Location":"United Kingdom","Company":"Cable and Wireless Isle of Man Ltd","IIN_WithSpaces":"89 44 18","IIN":"894418"},
"894436":{"Location":"United Kingdom","Company":"Cable and Wireless Jersey Ltd","IIN_WithSpaces":"89 44 36","IIN":"894436"},
"894477":{"Location":"United Kingdom","Company":"Cable and Wireless plc","IIN_WithSpaces":"89 44 77","IIN":"894477"},
"894417":{"Location":"United Kingdom","Company":"CreditCall Communications Ltd.","IIN_WithSpaces":"89 44 17","IIN":"894417"},
"894475":{"Location":"United Kingdom","Company":"Disney Mobile UK Ltd","IIN_WithSpaces":"89 44 75","IIN":"894475"},
"894421":{"Location":"United Kingdom","Company":"Dolphin Telecom plc","IIN_WithSpaces":"89 44 21","IIN":"894421"},
"894455":{"Location":"United Kingdom","Company":"Energis Communications Ltd","IIN_WithSpaces":"89 44 55","IIN":"894455"},
"894490":{"Location":"United Kingdom","Company":"Epay Ltd","IIN_WithSpaces":"89 44 90","IIN":"894490"},
"894404":{"Location":"United Kingdom","Company":"FMS Solutions Ltd","IIN_WithSpaces":"89 44 04","IIN":"894404"},
"894481":{"Location":"United Kingdom","Company":"Hay Systems Ltd.","IIN_WithSpaces":"89 44 81","IIN":"894481"},
"894412":{"Location":"United Kingdom","Company":"Hutchison Microtel","IIN_WithSpaces":"89 44 12","IIN":"894412"},
"894420":{"Location":"United Kingdom","Company":"Hutchison3G UK Ltd","IIN_WithSpaces":"89 44 20","IIN":"894420"},
"898811":{"Location":"United Kingdom","Company":"ICO Global Communications","IIN_WithSpaces":"89 881 1","IIN":"898811"},
"894489":{"Location":"United Kingdom","Company":"In Touch Communication Services Ltd","IIN_WithSpaces":"89 44 89","IIN":"894489"},
"8987099":{"Location":"United Kingdom","Company":"Inmarsat Ltd","IIN_WithSpaces":"89 870 99","IIN":"8987099"},
"894476":{"Location":"United Kingdom","Company":"Jersey Telenet Ltd","IIN_WithSpaces":"89 44 76","IIN":"894476"},
"894431":{"Location":"United Kingdom","Company":"Keygold.com Ltd","IIN_WithSpaces":"89 44 31","IIN":"894431"},
"894408":{"Location":"United Kingdom","Company":"Localphone Ltd","IIN_WithSpaces":"89 44 08","IIN":"894408"},
"894484":{"Location":"United Kingdom","Company":"Lycamobile UK Ltd","IIN_WithSpaces":"89 44 84","IIN":"894484"},
"894485":{"Location":"United Kingdom","Company":"Lycatel Distribution UK Ltd","IIN_WithSpaces":"89 44 85","IIN":"894485"},
"894453":{"Location":"United Kingdom","Company":"Manx Telecom","IIN_WithSpaces":"89 44 53","IIN":"894453"},
"894415":{"Location":"United Kingdom","Company":"Mapesbury Communications Ltd","IIN_WithSpaces":"89 44 15","IIN":"894415"},
"894403":{"Location":"United Kingdom","Company":"Marathon Telecom Ltd","IIN_WithSpaces":"89 44 03","IIN":"894403"},
"894430":{"Location":"United Kingdom","Company":"Mercury Personal Communications","IIN_WithSpaces":"89 44 30","IIN":"894430"},
"894416":{"Location":"United Kingdom","Company":"Mobile By Sainsbury's Limited","IIN_WithSpaces":"89 44 16","IIN":"894416"},
"894487":{"Location":"United Kingdom","Company":"Nowtel UK Ltd","IIN_WithSpaces":"89 44 87","IIN":"894487"},
"894409":{"Location":"United Kingdom","Company":"OnePhone (UK) Ltd","IIN_WithSpaces":"89 44 09","IIN":"894409"},
"894478":{"Location":"United Kingdom","Company":"Opal Telecom Ltd.","IIN_WithSpaces":"89 44 78","IIN":"894478"},
"894425":{"Location":"United Kingdom","Company":"Stanhope Communications Plc","IIN_WithSpaces":"89 44 25","IIN":"894425"},
"894411":{"Location":"United Kingdom","Company":"Telecom Securicor Cellular Radio Ltd","IIN_WithSpaces":"89 44 11","IIN":"894411"},
"894407":{"Location":"United Kingdom","Company":"Teleena UK Ltd","IIN_WithSpaces":"89 44 07","IIN":"894407"},
"894427":{"Location":"United Kingdom","Company":"Televoice UK Ltd","IIN_WithSpaces":"89 44 27","IIN":"894427"},
"894435":{"Location":"United Kingdom","Company":"Tesco Communications Ltd","IIN_WithSpaces":"89 44 35","IIN":"894435"},
"894428":{"Location":"United Kingdom","Company":"Tesco Mobile Ltd","IIN_WithSpaces":"89 44 28","IIN":"894428"},
"894488":{"Location":"United Kingdom","Company":"Tesco Stores Ltd (trading as Tesco Telecoms)","IIN_WithSpaces":"89 44 88","IIN":"894488"},
"894413":{"Location":"United Kingdom","Company":"TISMI BV","IIN_WithSpaces":"89 44 13","IIN":"894413"},
"894429":{"Location":"United Kingdom","Company":"T-Mobile Billing & Service GmbH","IIN_WithSpaces":"89 44 29","IIN":"894429"},
"894434":{"Location":"United Kingdom","Company":"Tribandglobal Ltd.","IIN_WithSpaces":"89 44 34","IIN":"894434"},
"894426":{"Location":"United Kingdom","Company":"Unitel Communications Ltd","IIN_WithSpaces":"89 44 26","IIN":"894426"},
"894482":{"Location":"United Kingdom","Company":"Use Your Noodle Ltd","IIN_WithSpaces":"89 44 82","IIN":"894482"},
"894406":{"Location":"United Kingdom","Company":"Valuedial Ltd","IIN_WithSpaces":"89 44 06","IIN":"894406"},
"894432":{"Location":"United Kingdom","Company":"Vanilla Vouchers Ltd","IIN_WithSpaces":"89 44 32","IIN":"894432"},
"894423":{"Location":"United Kingdom","Company":"Virgin Mobile Telecommunications Ltd","IIN_WithSpaces":"89 44 23","IIN":"894423"},
"8988239":{"Location":"United Kingdom","Company":"Vodafone Group Services Ltd","IIN_WithSpaces":"89 882 39","IIN":"8988239"},
"894410":{"Location":"United Kingdom","Company":"Vodafone plc","IIN_WithSpaces":"89 44 10","IIN":"894410"},
"894486":{"Location":"United Kingdom","Company":"Zamir Telecom Ltd","IIN_WithSpaces":"89 44 86","IIN":"894486"},
"891678":{"Location":"United States","Company":"African Communications Group, Inc.","IIN_WithSpaces":"89 1 678","IIN":"891678"},
"891866":{"Location":"United States","Company":"Alascom Inc.","IIN_WithSpaces":"89 1 866","IIN":"891866"},
"891091":{"Location":"United States","Company":"Allied Wireless Communications Corp.","IIN_WithSpaces":"89 1 091","IIN":"891091"},
"891039":{"Location":"United States","Company":"Aspider Solutions","IIN_WithSpaces":"89 1 039","IIN":"891039"},
"891253":{"Location":"United States","Company":"AT&T","IIN_WithSpaces":"89 1 253","IIN":"891253"},
"891288":{"Location":"United States","Company":"AT&T","IIN_WithSpaces":"89 1 288","IIN":"891288"},
"891123":{"Location":"United States","Company":"ATC","IIN_WithSpaces":"89 1 123","IIN":"891123"},
"891918":{"Location":"United States","Company":"Atlas Telephone Company, Inc.","IIN_WithSpaces":"89 1 918","IIN":"891918"},
"891227":{"Location":"United States","Company":"Bell of Pennsylvania","IIN_WithSpaces":"89 1 227","IIN":"891227"},
"891272":{"Location":"United States","Company":"Bell of Pennsylvania","IIN_WithSpaces":"89 1 272","IIN":"891272"},
"891200":{"Location":"United States","Company":"BellSouth Services","IIN_WithSpaces":"89 1 200","IIN":"891200"},
"891300":{"Location":"United States","Company":"BellSouth Services","IIN_WithSpaces":"89 1 300","IIN":"891300"},
"891221":{"Location":"United States","Company":"Chesapeake & Potomac Telephone Company of Maryland","IIN_WithSpaces":"89 1 221","IIN":"891221"},
"891276":{"Location":"United States","Company":"Chesapeake & Potomac Telephone Company of Maryland","IIN_WithSpaces":"89 1 276","IIN":"891276"},
"891235":{"Location":"United States","Company":"Chesapeake & Potomac Telephone Company of Virginia","IIN_WithSpaces":"89 1 235","IIN":"891235"},
"891278":{"Location":"United States","Company":"Chesapeake & Potomac Telephone Company of Virginia","IIN_WithSpaces":"89 1 278","IIN":"891278"},
"891220":{"Location":"United States","Company":"Chesapeake & Potomac telephone Company of Washington","IIN_WithSpaces":"89 1 220","IIN":"891220"},
"891273":{"Location":"United States","Company":"Chesapeake & Potomac telephone Company of Washington","IIN_WithSpaces":"89 1 273","IIN":"891273"},
"891224":{"Location":"United States","Company":"Chesapeake & Potomac Telephone Company of West Virginia","IIN_WithSpaces":"89 1 224","IIN":"891224"},
"891279":{"Location":"United States","Company":"Chesapeake & Potomac Telephone Company of West Virginia","IIN_WithSpaces":"89 1 279","IIN":"891279"},
"891246":{"Location":"United States","Company":"China Telephone Company","IIN_WithSpaces":"89 1 246","IIN":"891246"},
"891111":{"Location":"United States","Company":"Citizen Utilities Company","IIN_WithSpaces":"89 1 111","IIN":"891111"},
"891266":{"Location":"United States","Company":"Com Systems","IIN_WithSpaces":"89 1 266","IIN":"891266"},
"891350":{"Location":"United States","Company":"Com Systems","IIN_WithSpaces":"89 1 350","IIN":"891350"},
"891371":{"Location":"United States","Company":"Commnet Wireless LLC","IIN_WithSpaces":"89 1 371","IIN":"891371"},
"891080":{"Location":"United States","Company":"Corr Wireless Communications","IIN_WithSpaces":"89 1 080","IIN":"891080"},
"891555":{"Location":"United States","Company":"Creative Communications","IIN_WithSpaces":"89 1 555","IIN":"891555"},
"891999":{"Location":"United States","Company":"Creative Communications","IIN_WithSpaces":"89 1 999","IIN":"891999"},
"891226":{"Location":"United States","Company":"Diamond State Telephone Company","IIN_WithSpaces":"89 1 226","IIN":"891226"},
"891378":{"Location":"United States","Company":"Diamond State Telephone Company","IIN_WithSpaces":"89 1 378","IIN":"891378"},
"891362":{"Location":"United States","Company":"Dobson Telephone Company Inc.","IIN_WithSpaces":"89 1 362","IIN":"891362"},
"891382":{"Location":"United States","Company":"Dobson Telephone Company Inc.","IIN_WithSpaces":"89 1 382","IIN":"891382"},
"891006":{"Location":"United States","Company":"Duocash Inc.","IIN_WithSpaces":"89 1 006","IIN":"891006"},
"891868":{"Location":"United States","Company":"Eastern New Mexico Telephone Cooperative","IIN_WithSpaces":"89 1 868","IIN":"891868"},
"891357":{"Location":"United States","Company":"Eastern Telecommunication Services Company","IIN_WithSpaces":"89 1 357","IIN":"891357"},
"891004":{"Location":"United States","Company":"Endless Mountains Wireless LLC","IIN_WithSpaces":"89 1 004","IIN":"891004"},
"891311":{"Location":"United States","Company":"Farmers Cellular Telephone Inc.","IIN_WithSpaces":"89 1 311","IIN":"891311"},
"891503":{"Location":"United States","Company":"Fone America Incoporated","IIN_WithSpaces":"89 1 503","IIN":"891503"},
"891026":{"Location":"United States","Company":"GCI Communication Corp.","IIN_WithSpaces":"89 1 026","IIN":"891026"},
"891032":{"Location":"United States","Company":"Geneseo Communications Inc.","IIN_WithSpaces":"89 1 032","IIN":"891032"},
"891680":{"Location":"United States","Company":"Greenfly LLC","IIN_WithSpaces":"89 1 680","IIN":"891680"},
"891001":{"Location":"United States","Company":"Hat Island Telephone Company","IIN_WithSpaces":"89 1 001","IIN":"891001"},
"891003":{"Location":"United States","Company":"Highland Cellular Inc.","IIN_WithSpaces":"89 1 003","IIN":"891003"},
"891034":{"Location":"United States","Company":"IDT Telecom Inc","IIN_WithSpaces":"89 1 034","IIN":"891034"},
"898816":{"Location":"United States","Company":"Iridium LLC","IIN_WithSpaces":"89 881 6","IIN":"898816"},
"891488":{"Location":"United States","Company":"ITT-US Transmission Systems Inc.","IIN_WithSpaces":"89 1 488","IIN":"891488"},
"891888":{"Location":"United States","Company":"ITT-US Transmission Systems Inc.","IIN_WithSpaces":"89 1 888","IIN":"891888"},
"891432":{"Location":"United States","Company":"LiTel Telecommunications Corporation","IIN_WithSpaces":"89 1 432","IIN":"891432"},
"891036":{"Location":"United States","Company":"Long Distance Savers","IIN_WithSpaces":"89 1 036","IIN":"891036"},
"891318":{"Location":"United States","Company":"Long Distance Savers","IIN_WithSpaces":"89 1 318","IIN":"891318"},
"894124":{"Location":"United States","Company":"Lycatel GmbH","IIN_WithSpaces":"89 41 24","IIN":"894124"},
"891029":{"Location":"United States","Company":"Lycatel LLC","IIN_WithSpaces":"89 1 029","IIN":"891029"},
"891222":{"Location":"United States","Company":"MCI WorldCom","IIN_WithSpaces":"89 1 222","IIN":"891222"},
"891950":{"Location":"United States","Company":"MCI WorldCom","IIN_WithSpaces":"89 1 950","IIN":"891950"},
"891663":{"Location":"United States","Company":"McLoud Telephone Company Inc.","IIN_WithSpaces":"89 1 663","IIN":"891663"},
"891666":{"Location":"United States","Company":"McLoud Telephone Company Inc.","IIN_WithSpaces":"89 1 666","IIN":"891666"},
"891710":{"Location":"United States","Company":"Missouri Telephone Company","IIN_WithSpaces":"89 1 710","IIN":"891710"},
"891033":{"Location":"United States","Company":"Mortorola Solutions Inc","IIN_WithSpaces":"89 1 033","IIN":"891033"},
"891009":{"Location":"United States","Company":"NEP Cellcorp, Inc.","IIN_WithSpaces":"89 1 009","IIN":"891009"},
"891638":{"Location":"United States","Company":"New England Telephone & Telegraph Company","IIN_WithSpaces":"89 1 638","IIN":"891638"},
"891229":{"Location":"United States","Company":"New Jersey Bell Telephone Company","IIN_WithSpaces":"89 1 229","IIN":"891229"},
"891652":{"Location":"United States","Company":"New Jersey Bell Telephone Company","IIN_WithSpaces":"89 1 652","IIN":"891652"},
"891698":{"Location":"United States","Company":"New York Telephone Company","IIN_WithSpaces":"89 1 698","IIN":"891698"},
"891040":{"Location":"United States","Company":"North Dakota Network Company","IIN_WithSpaces":"89 1 040","IIN":"891040"},
"891450":{"Location":"United States","Company":"North East Colorado Cellular Inc.","IIN_WithSpaces":"89 1 450","IIN":"891450"},
"891692":{"Location":"United States","Company":"NorthWestern Bell Telephone Company","IIN_WithSpaces":"89 1 692","IIN":"891692"},
"891822":{"Location":"United States","Company":"NorthWestern Bell Telephone Company","IIN_WithSpaces":"89 1 822","IIN":"891822"},
"891470":{"Location":"United States","Company":"Ntelos, Inc.","IIN_WithSpaces":"89 1 470","IIN":"891470"},
"891696":{"Location":"United States","Company":"Nynex Corporation","IIN_WithSpaces":"89 1 696","IIN":"891696"},
"891625":{"Location":"United States","Company":"Operator Assistance Network","IIN_WithSpaces":"89 1 625","IIN":"891625"},
"891626":{"Location":"United States","Company":"Operator Assistance Network","IIN_WithSpaces":"89 1 626","IIN":"891626"},
"891781":{"Location":"United States","Company":"Pacific Bell","IIN_WithSpaces":"89 1 781","IIN":"891781"},
"891784":{"Location":"United States","Company":"Pacific Bell","IIN_WithSpaces":"89 1 784","IIN":"891784"},
"891872":{"Location":"United States","Company":"Pacific Northwest Bell Telephone Company","IIN_WithSpaces":"89 1 872","IIN":"891872"},
"891937":{"Location":"United States","Company":"Panhandle Telephone Cooperative Inc.","IIN_WithSpaces":"89 1 937","IIN":"891937"},
"891038":{"Location":"United States","Company":"Paygo Mobile Llc","IIN_WithSpaces":"89 1 038","IIN":"891038"},
"891474":{"Location":"United States","Company":"Pine Tree Tel & Tel Company","IIN_WithSpaces":"89 1 474","IIN":"891474"},
"891211":{"Location":"United States","Company":"RCI Corporation","IIN_WithSpaces":"89 1 211","IIN":"891211"},
"891724":{"Location":"United States","Company":"RCI Corporation","IIN_WithSpaces":"89 1 724","IIN":"891724"},
"891782":{"Location":"United States","Company":"Rochester Telephone Corporation","IIN_WithSpaces":"89 1 782","IIN":"891782"},
"891891":{"Location":"United States","Company":"Rochester Telephone Corporation","IIN_WithSpaces":"89 1 891","IIN":"891891"},
"891505":{"Location":"United States","Company":"San Marcos Long Distance","IIN_WithSpaces":"89 1 505","IIN":"891505"},
"891005":{"Location":"United States","Company":"San Marcos Telephone Company Inc.","IIN_WithSpaces":"89 1 005","IIN":"891005"},
"891090":{"Location":"United States","Company":"Siouxland PCS, Inc.","IIN_WithSpaces":"89 1 090","IIN":"891090"},
"891234":{"Location":"United States","Company":"Southern New England Telephone","IIN_WithSpaces":"89 1 234","IIN":"891234"},
"891763":{"Location":"United States","Company":"Southern New England Telephone","IIN_WithSpaces":"89 1 763","IIN":"891763"},
"891792":{"Location":"United States","Company":"SouthWestern Bell Telephone Company","IIN_WithSpaces":"89 1 792","IIN":"891792"},
"891798":{"Location":"United States","Company":"SouthWestern Bell Telephone Company","IIN_WithSpaces":"89 1 798","IIN":"891798"},
"891333":{"Location":"United States","Company":"Sprint  Corporation","IIN_WithSpaces":"89 1 333","IIN":"891333"},
"891877":{"Location":"United States","Company":"Sprint  Corporation","IIN_WithSpaces":"89 1 877","IIN":"891877"},
"891786":{"Location":"United States","Company":"Standish Telephone Company","IIN_WithSpaces":"89 1 786","IIN":"891786"},
"891669":{"Location":"United States","Company":"Steelville Telephone Exchange Inc.","IIN_WithSpaces":"89 1 669","IIN":"891669"},
"891030":{"Location":"United States","Company":"Telecom North America Mobile Inc","IIN_WithSpaces":"89 1 030","IIN":"891030"},
"891366":{"Location":"United States","Company":"Telecom USA","IIN_WithSpaces":"89 1 366","IIN":"891366"},
"891852":{"Location":"United States","Company":"Telecom USA","IIN_WithSpaces":"89 1 852","IIN":"891852"},
"891824":{"Location":"United States","Company":"Teleport Communications","IIN_WithSpaces":"89 1 824","IIN":"891824"},
"891884":{"Location":"United States","Company":"Teleport Communications","IIN_WithSpaces":"89 1 884","IIN":"891884"},
"891400":{"Location":"United States","Company":"Telus Communications Inc.","IIN_WithSpaces":"89 1 400","IIN":"891400"},
"891002":{"Location":"United States","Company":"Tenzing Communications, Inc.","IIN_WithSpaces":"89 1 002","IIN":"891002"},
"891027":{"Location":"United States","Company":"TerreStar Networks Inc.","IIN_WithSpaces":"89 1 027","IIN":"891027"},
"891160":{"Location":"United States","Company":"T-Mobile USA","IIN_WithSpaces":"89 1 160","IIN":"891160"},
"891210":{"Location":"United States","Company":"T-Mobile USA","IIN_WithSpaces":"89 1 210","IIN":"891210"},
"891230":{"Location":"United States","Company":"T-Mobile USA","IIN_WithSpaces":"89 1 230","IIN":"891230"},
"891240":{"Location":"United States","Company":"T-Mobile USA","IIN_WithSpaces":"89 1 240","IIN":"891240"},
"891260":{"Location":"United States","Company":"T-Mobile USA","IIN_WithSpaces":"89 1 260","IIN":"891260"},
"891270":{"Location":"United States","Company":"T-Mobile USA","IIN_WithSpaces":"89 1 270","IIN":"891270"},
"891310":{"Location":"United States","Company":"T-Mobile USA","IIN_WithSpaces":"89 1 310","IIN":"891310"},
"891580":{"Location":"United States","Company":"T-Mobile USA","IIN_WithSpaces":"89 1 580","IIN":"891580"},
"891867":{"Location":"United States","Company":"Transaction Network Services Inc.","IIN_WithSpaces":"89 1 867","IIN":"891867"},
"891878":{"Location":"United States","Company":"TRT International Inc.","IIN_WithSpaces":"89 1 878","IIN":"891878"},
"891321":{"Location":"United States","Company":"US Intelco Networks Inc.","IIN_WithSpaces":"89 1 321","IIN":"891321"},
"891433":{"Location":"United States","Company":"Verizon Communications Corporation","IIN_WithSpaces":"89 1 433","IIN":"891433"},
"891444":{"Location":"United States","Company":"Verizon Communications Corporation","IIN_WithSpaces":"89 1 444","IIN":"891444"},
"891483":{"Location":"United States","Company":"Verizon Communications Corporation","IIN_WithSpaces":"89 1 483","IIN":"891483"},
"891486":{"Location":"United States","Company":"Verizon Communications Corporation","IIN_WithSpaces":"89 1 486","IIN":"891486"},
"891487":{"Location":"United States","Company":"Verizon Communications Corporation","IIN_WithSpaces":"89 1 487","IIN":"891487"},
"891489":{"Location":"United States","Company":"Verizon Communications Corporation","IIN_WithSpaces":"89 1 489","IIN":"891489"},
"891808":{"Location":"United States","Company":"Verizon Communications Corporation","IIN_WithSpaces":"89 1 808","IIN":"891808"},
"891480":{"Location":"United States","Company":"Verizon Wireless","IIN_WithSpaces":"89 1 480","IIN":"891480"},
"891031":{"Location":"United States","Company":"Vivaro Corporation","IIN_WithSpaces":"89 1 031","IIN":"891031"},
"891464":{"Location":"United States","Company":"Vyvx Telecom Inc.","IIN_WithSpaces":"89 1 464","IIN":"891464"},
"891340":{"Location":"United States","Company":"Westlink Communications LLC","IIN_WithSpaces":"89 1 340","IIN":"891340"},
"891000":{"Location":"United States","Company":"Whibey Telephone Company","IIN_WithSpaces":"89 1 000","IIN":"891000"},
"891460":{"Location":"United States","Company":"Wireless Communications Ventures dba NewCore Wireless","IIN_WithSpaces":"89 1 460","IIN":"891460"},
"891530":{"Location":"United States","Company":"Wireless Communications Ventures dba NewCore Wireless","IIN_WithSpaces":"89 1 530","IIN":"891530"},
"891777":{"Location":"United States","Company":"XEL Communications Inc.","IIN_WithSpaces":"89 1 777","IIN":"891777"},
"891800":{"Location":"United States","Company":"XEL Communications Inc.","IIN_WithSpaces":"89 1 800","IIN":"891800"},
"891948":{"Location":"United States","Company":"XIT Rural Telephone Cooperative Inc.","IIN_WithSpaces":"89 1 948","IIN":"891948"},
"891988":{"Location":"United States","Company":"XIT Telecommunications & Technology Inc.","IIN_WithSpaces":"89 1 988","IIN":"891988"},
"891284":{"Location":"United States Virgin Islands","Company":"AT&T of the Virgin Islands","IIN_WithSpaces":"89 1 284","IIN":"891284"},
"8959800":{"Location":"Uruguay","Company":"Administración Nacional de Telecomunicaciones (ANTEL)","IIN_WithSpaces":"89 598 00","IIN":"8959800"},
"8959801":{"Location":"Uruguay","Company":"ANCEL","IIN_WithSpaces":"89 598 01","IIN":"8959801"},
"8999801":{"Location":"Uzbekistan","Company":"Buztel","IIN_WithSpaces":"89 998 01","IIN":"8999801"},
"8999804":{"Location":"Uzbekistan","Company":"Daewoo Central Paging Company","IIN_WithSpaces":"89 998 04","IIN":"8999804"},
"8967805":{"Location":"Vanuatu","Company":"Digicel Vanuatu","IIN_WithSpaces":"89 678 05","IIN":"8967805"},
"8967801":{"Location":"Vanuatu","Company":"Telecom Vanuatu Ltd","IIN_WithSpaces":"89 678 01","IIN":"8967801"},
"895802":{"Location":"Venezuela (Bolivarian Republic of)","Company":"Coporación Digitel C.A.","IIN_WithSpaces":"89 58 02","IIN":"895802"},
"895804":{"Location":"Venezuela (Bolivarian Republic of)","Company":"Telcel Celular, C.A. (TELCEL)","IIN_WithSpaces":"89 58 04","IIN":"895804"},
"895806":{"Location":"Venezuela (Bolivarian Republic of)","Company":"Telecommunications Movilnet C.A.","IIN_WithSpaces":"89 58 06","IIN":"895806"},
"898401":{"Location":"Viet Nam","Company":"Vietnam Mobile Telecom Service Company (VMS)","IIN_WithSpaces":"89 84 01","IIN":"898401"},
"898402":{"Location":"Viet Nam","Company":"Vietnam Telecom Service Company (GPC)","IIN_WithSpaces":"89 84 02","IIN":"898402"},
"8926003":{"Location":"Zambia","Company":"Zambia Telecommunications Company Ltd (ZAMTEL)","IIN_WithSpaces":"89 260 03","IIN":"8926003"}
};


function ICCID_UnitTests_All()
{
	var fail_count = 0;
	

	if (false) // Create test cases
	{
		fail_count+= ICCID_UnitTest_("89610101916128000030","Good(20 digit)");
		fail_count+= ICCID_UnitTest_("8961010191612800003","Good(19 digit)");
		
		fail_count+= ICCID_UnitTest_("89610101919346000085","Good");
		fail_count+= ICCID_UnitTest_("89610101916096000029","Good2");
		fail_count+= ICCID_UnitTest_("89610101916096000021","20th digit ignored");
		fail_count+= ICCID_UnitTest_("89610201916096000021","Bad Checksum");
		
		fail_count+= ICCID_UnitTest_("896101019193460000851","Extra Digit");
		fail_count+= ICCID_UnitTest_("8961010191934600x085","Bad Char");
		fail_count+= ICCID_UnitTest_("896101019193460-00085","Hyphen");
		fail_count+= ICCID_UnitTest_("896101019193460:00085","Colon");
		fail_count+= ICCID_UnitTest_("896101019193460—00085","Emdash");  // Emdash
		fail_count+= ICCID_UnitTest_("896101019193460 00085","Space");
		fail_count+= ICCID_UnitTest_("896101019193460\t00085","Tab");
		fail_count+= ICCID_UnitTest_("896101019193460 00085","Nonbreaking Space");  // Nonbreaking space
		fail_count+= ICCID_UnitTest_("896101019193460‑00085","Non breaking Hyphen");  // Nonbreaking hyphen
		fail_count+= ICCID_UnitTest_("89 610 10 19193460 00085","Multiple Spaces");
		fail_count+= ICCID_UnitTest_(null,"Null");
		fail_count+= ICCID_UnitTest_(89610101919346000085,"Attempt at Good Number - But javascript will round ");
		fail_count+= ICCID_UnitTest_(134,"Bad Number");
	}
	else
	{
		
		fail_count+= ICCID_UnitTest_("89610101916128000030","Good(20 digit)",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"89610101916128000030","trimmed_to_19_digits":"8961010191612800003"},true); // Good(20 digit)
		fail_count+= ICCID_UnitTest_("8961010191612800003","Good(19 digit)",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"8961010191612800003","trimmed_to_19_digits":"8961010191612800003"},true); // Good(19 digit)
		fail_count+= ICCID_UnitTest_("89610101919346000085","Good",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"89610101919346000085","trimmed_to_19_digits":"8961010191934600008"},true); // Good
		fail_count+= ICCID_UnitTest_("89610101916096000029","Good2",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"89610101916096000029","trimmed_to_19_digits":"8961010191609600002"},true); // Good2
		fail_count+= ICCID_UnitTest_("89610101916096000021","20th digit ignored",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"89610101916096000021","trimmed_to_19_digits":"8961010191609600002"},true); // 20th digit ignored
		fail_count+= ICCID_UnitTest_("89610201916096000021","Bad Checksum",{"Location":"Australia","Company":"Singtel Optus Ltd.","IIN_WithSpaces":"89 61 02","IIN":"896102","valid":true,"cleaned_iccid":"89610201916096000021","warning":"The check digits are not valid for an ICCID code","trimmed_to_19_digits":"8961020191609600002"},true); // Bad Checksum
		fail_count+= ICCID_UnitTest_("89610201916096000021","Bad Checksum",{"valid":false,"cleaned_iccid":"89610201916096000021","reason":"The check digits are not valid for an ICCID code","trimmed_to_19_digits":"8961020191609600002"},false); // Bad Checksum
		fail_count+= ICCID_UnitTest_("896101019193460000851","Extra Digit",{"valid":false,"cleaned_iccid":"896101019193460000851","reason":"An ICCID number has 19 or 20 digits"},true); // Extra Digit
		fail_count+= ICCID_UnitTest_("8961010191934600x085","Bad Char",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"8961010191934600085","warning":"The check digits are not valid for an ICCID code","trimmed_to_19_digits":"8961010191934600085"},true); // Bad Char
		fail_count+= ICCID_UnitTest_("8961010191934600x085","Bad Char",{"valid":false,"cleaned_iccid":"8961010191934600085","reason":"The check digits are not valid for an ICCID code","trimmed_to_19_digits":"8961010191934600085"},false); // Bad Char
		fail_count+= ICCID_UnitTest_("896101019193460-00085","Hyphen",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"89610101919346000085","trimmed_to_19_digits":"8961010191934600008"},true); // Hyphen
		fail_count+= ICCID_UnitTest_("896101019193460:00085","Colon",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"89610101919346000085","trimmed_to_19_digits":"8961010191934600008"},true); // Colon
		fail_count+= ICCID_UnitTest_("896101019193460â€”00085","Emdash",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"89610101919346000085","trimmed_to_19_digits":"8961010191934600008"},true); // Emdash
		fail_count+= ICCID_UnitTest_("896101019193460 00085","Space",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"89610101919346000085","trimmed_to_19_digits":"8961010191934600008"},true); // Space
		fail_count+= ICCID_UnitTest_("896101019193460\t00085","Tab",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"89610101919346000085","trimmed_to_19_digits":"8961010191934600008"},true); // Tab
		fail_count+= ICCID_UnitTest_("896101019193460 00085","Nonbreaking Space",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"89610101919346000085","trimmed_to_19_digits":"8961010191934600008"},true); // Nonbreaking Space
		fail_count+= ICCID_UnitTest_("896101019193460â€‘00085","Non breaking Hyphen",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"89610101919346000085","trimmed_to_19_digits":"8961010191934600008"},true); // Non breaking Hyphen
		fail_count+= ICCID_UnitTest_("89 610 10 19193460 00085","Multiple Spaces",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"89610101919346000085","trimmed_to_19_digits":"8961010191934600008"},true); // Multiple Spaces
		fail_count+= ICCID_UnitTest_(null,"Null",{"valid":false,"cleaned_iccid":"","reason":"An ICCID number has 19 or 20 digits"},true); // Null
		fail_count+= ICCID_UnitTest_(89610101919346000000,"Attempt at Good Number - But javascript will round ",{"Location":"Australia","Company":"Telstra Corporation Ltd.","IIN_WithSpaces":"89 61 01","IIN":"896101","valid":true,"cleaned_iccid":"89610101919346000000","warning":"The check digits are not valid for an ICCID code","trimmed_to_19_digits":"8961010191934600000"},true); // Attempt at Good Number - But javascript will round 
		fail_count+= ICCID_UnitTest_(89610101919346000000,"Attempt at Good Number - But javascript will round ",{"valid":false,"cleaned_iccid":"89610101919346000000","reason":"The check digits are not valid for an ICCID code","trimmed_to_19_digits":"8961010191934600000"},false); // Attempt at Good Number - But javascript will round 
		fail_count+= ICCID_UnitTest_(134,"Bad Number",{"valid":false,"cleaned_iccid":"134","reason":"An ICCID number has 19 or 20 digits"},true); // Bad Number
	}
	console.log("Failed "+fail_count+" tests");
}

function ICCID_UnitTest_(value_txt,test_note, expected_result=null,bad_checksum_is_warning_only=true)
{
    var obj = ICCID_Lookup(value_txt,bad_checksum_is_warning_only);
	
	if (expected_result == null)
	{
		var prefix = "fail_count+= ICCID_UnitTest_("+JSON.stringify(value_txt)+","+JSON.stringify(test_note)+",";
		var suffix = "); // "+test_note;
		
		console.log(prefix +JSON.stringify(obj)+","+JSON.stringify(bad_checksum_is_warning_only)+suffix);
		if (obj.hasOwnProperty('warning') && obj.valid)
			console.log(prefix +JSON.stringify(ICCID_Lookup(value_txt,false))+",false"+suffix);
		return 1;
	}
	else
	{
		var msg;

		if (!obj.valid)
			msg = 'Invalid:'+obj.reason;
		else 
		{
			msg = 'Found:'+obj.Company;
			if (obj.hasOwnProperty('warning'))
				msg += '  -- With warning:'+obj.warning;
		} 
			
		
		var prefix = "ICCID_UnitTest_("+JSON.stringify(value_txt)+","+JSON.stringify(test_note)+(bad_checksum_is_warning_only?"":",false")+"):";
			
		if (JSON.stringify(obj)==JSON.stringify(expected_result))
		{
			console.log("|PASS| "+prefix+" "+msg);
			return 0;
		}
		else
		{
			console.log("|FAIL| "+prefix+" ="+JSON.stringify(obj));
			return 1;
		}
	}
}

	
// This is a 20 digit code with two luhn check digits
function  ICCID_Lookup(value_txt,bad_checksum_is_warning_only=true)
{
	if (value_txt == null) value_txt ="";
	
	value_txt = value_txt+""; // Append .. force it to become a text value
	value_txt = value_txt.replace(/\D/g, "");
	
	var warning = null;
	let value_to_checksum = value_txt;
	if (value_txt.length ==20)
	{
		value_to_checksum = value_txt.substring(0,19); // The 20th digit isn't part of the ICCID.
	}
	else if (value_txt.length !=19) 
	{
		return {valid:false, cleaned_iccid:value_txt, reason:"An ICCID number has 19 or 20 digits"};
	}
	
	if (!validate_luhn_checkdigits(value_to_checksum))
	{
		warning = "The check digits are not valid for an ICCID code";
		if (!bad_checksum_is_warning_only)
			return {valid:false, cleaned_iccid:value_txt, reason:warning,trimmed_to_19_digits:value_to_checksum};
	}	
	for (var key in IIN_Lookup)
	{
		if (value_txt.startsWith(key) && IIN_Lookup.hasOwnProperty(key))
		{
			var return_obj = JSON.parse(JSON.stringify(IIN_Lookup[key])); // Sadly this is still a pretty good way of cloning an object
			
			return_obj.valid = true;
			return_obj.cleaned_iccid=value_txt;
			if (warning != null)
				return_obj.warning = warning;
			
			return_obj.trimmed_to_19_digits=value_to_checksum
			return return_obj;
		}
	}
	
	if (warning != null)
		return {valid:false, reason:warning,trimmed_to_19_digits:value_to_checksum};
	
	if (!value_txt.startsWith("89"))
		return {valid:false,cleaned_iccid:value_txt,reason:"The check digits pass and it is the right length, but doesn't match any known assigner",trimmed_to_19_digits:value_to_checksum};
		
	// Unknown - but everything matches.  We don't want to fail just because a new company comes along
	return {valid:true, cleaned_iccid:value_txt,Location:"Unknown","Company":"Unknown","IIN_WithSpaces":"89","IIN":"89",trimmed_to_19_digits:value_to_checksum};
}

// takes the form field value and returns true on valid number
function validate_luhn_checkdigits(value, num_digits=-1)
{
 	if (/[^0-9\s]+/.test(value)) return false;
	value = value.replace(/\D/g, "");

	if ((num_digits > 0) && (value.length != num_digits)) return false;
	
	//console.log("Verify check digits on `"+value+"`");
	
	// The Luhn Algorithm. It's so pretty.
	var nCheck = 0, nDigit = 0, bEven = false;

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n);
		var nDigit = parseInt(cDigit, 10);
		
		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}

		nCheck += nDigit;
		//console.log("nDigit: "+parseInt(cDigit, 10)+"  bEven:"+bEven+"  nCheck:"+nCheck);
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}



