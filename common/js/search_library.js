function fncSearchKeyDown(a,e,c){try{if(a==13)c!=undefined?document.getElementById("id_search_button_sub").click():document.getElementById("id_search_button").click()}catch(b){}}function fncGetResourceByResourceId(a){try{for(var e=eval(resource),c=e.length,b=0;b<c;b++)if(e[b].id==a)return e[b].value;return""}catch(g){}}
function fncLoadResource(){try{for(var a=eval(resource),e=a.length,c=0;c<e;c++){if(document.getElementById("id_res_"+a[c].id))document.getElementById("id_res_"+a[c].id).innerHTML=a[c].value;if(document.title=="")if(a[c].id=="title")document.title=a[c].value}}catch(b){}}
function fncSearchBox(){try{var a=fncGetResourceByResourceId("enter_search_keyword");if(document.getElementById("id_search"))if("placeholder"in document.getElementById("id_search"))document.getElementById("id_search").placeholder=a;else{if(document.getElementById("id_search").value=="")document.getElementById("id_search").value=fncGetResourceByResourceId("enter_search_keyword");if(document.getElementById("id_search").value==fncGetResourceByResourceId("enter_search_keyword"))document.getElementById("id_search").style.color=
"#808080";document.getElementById("id_search").onfocus=function(){if(this.value==fncGetResourceByResourceId("enter_search_keyword")){this.value="";document.getElementById("id_search").style.color="#000000"}};document.getElementById("id_search").onblur=function(){if(this.value==""){this.value=fncGetResourceByResourceId("enter_search_keyword");document.getElementById("id_search").style.color="#808080"}}}}catch(e){}try{if(document.getElementById("id_search_sub"))if("placeholder"in document.getElementById("id_search_sub"))document.getElementById("id_search_sub").placeholder=
a;else{if(document.getElementById("id_search_sub").value=="")document.getElementById("id_search_sub").value=fncGetResourceByResourceId("enter_search_keyword");if(document.getElementById("id_search_sub").value==fncGetResourceByResourceId("enter_search_keyword"))document.getElementById("id_search_sub").style.color="#808080";document.getElementById("id_search_sub").onfocus=function(){if(this.value==fncGetResourceByResourceId("enter_search_keyword")){this.value="";document.getElementById("id_search_sub").style.color=
"#000000"}};document.getElementById("id_search_sub").onblur=function(){if(this.value==""){this.value=fncGetResourceByResourceId("enter_search_keyword");document.getElementById("id_search_sub").style.color="#808080"}}}}catch(c){}}function fncPushHistoryEntry(a,e,c){if(["http:","https:"].indexOf(window.location.protocol)!==-1)if(window.history.pushState){a.preventDefault();window.history.pushState(c,document.title,e.href);fncDoSearch(c,true)}}
function fncGetPagerStartTag(a,e,c){c=fncGetEncodeText(c);var b="";if(a){a=fncGetEncodeText(OHP.URL.getPathWithParams(window.location.href,{page:e}));e=fncGetEncodeText("fncPushHistoryEntry(event, this, "+e+")");b=' href="'+a+'" onclick="'+e+'"'}return'<a class="'+c+'"'+b+">"}var search;
function fncDoSearch(a,e){try{var c=document.getElementById("id_search").value;var b=c=c.trim();if(c==""||c==fncGetResourceByResourceId("enter_search_keyword")){document.getElementById("id_search_results").innerHTML=fncGetNoneFoundMessage("");var g=fncGetSearchFoundMessage(b),f=fncGetResourceByResourceId("search_none_found_message_title");document.title=fncGetDecodeText(document.title+" "+g+" "+f)}else{var d=/([$()\-^\\\|\[\]{},:+*.?])/g;if(d.exec(c)!=null)c=c.replace(d,"\\$1");var h=false,k=[],j=
c.length;for(d=0;d<j;d++){var i=c.substring(d,d+1);if(i=='"'||i=="\u201d"||i=="\u201c"){i="";h=!h}else if(h&&(i==" "||i=="\u3000"||i=="\t"))i="___SPACE___";k.push(i)}c=k.join("");h=false;k=[];j=b.length;for(d=0;d<j;d++){i=b.substring(d,d+1);if(i=='"'||i=="\u201d"||i=="\u201c"){i="";h=!h}else if(h&&(i==" "||i=="\u3000"||i=="\t"))i="___SPACE___";k.push(i)}b=k.join("");i=/[\s\u3000]+/;var n=c.split(i),q=b.split(i);if(n.join("")==""){document.getElementById("id_search").value=fncGetResourceByResourceId("enter_search_keyword");
document.getElementById("id_search").style.color="#808080";document.getElementById("id_search_results").innerHTML=fncGetNoneFoundMessage("");return false}j=n.length;for(d=0;d<j;d++)n[d]=n[d].replace(/___SPACE___/g," ");j=q.length;for(d=0;d<j;d++)q[d]=q[d].replace(/___SPACE___/g," ");b=q.join(" ");var o=fncGetConstantByName("search_show_around");o||(o=50);var H=o,I=o,p=fncGetConstantByName("search_show_result_count");p||(p=10);var v=fncGetConstantByName("search_page_max_range");v||(v=5);var y=parseInt(v/
2),F=parseInt(v/2);o=0;i=[];h=[];k=[];var l=[];k.push('<div class="search_result_conditions" id="id_search_result_item"></div>');for(var r=n.length,s=0;s<r;s++){var u=n[s];if(document.getElementById("id_search_options_multibyte"))if(document.getElementById("id_search_options_multibyte").checked){u=fncConvertSearchText(u,true);n[s]=u}var C="ig";if(document.getElementById("id_search_options_case")){if(document.getElementById("id_search_options_case").checked)C="g"}else if(fncGetCookie("SEARCH-OPTIONS-CASE")==
"TRUE")C=""}j=search.length;for(d=j-1;d>=0;d--){var z=fncGetDecodeText(search[d].body),O=search[d].toc_id,w=fncGetEncodeText(search[d].title);w=w.replace(/\u00b6+/g,"");w=fncGetDecodeText(w);if(z){r=n.length;j=[];for(s=0;s<r;s++){u=n[s];var D=true,J=false;u=fncConvertAlphameric(u);var A=RegExp("("+u+")",C),K=A.exec(w),L=A.exec(z);if(L==null&&K==null){D=false;break}else if(K!=null){var B=w.search(A);if(B!=-1)if(fncIsEntity(w,u,q[s],A)==true){D=false;break}else J=true}else if(L!=null){B=z.search(A);
if(B!=-1){if(fncIsEntity(z,u,q[s],A)==true){D=false;break}for(var E=z.substring(B-H,B+I);;)if(E.substring(0,1).match(/[\u0E31]|[\u0E47-\u0E4E]|[\u0E34-\u0E3A]/)!=null)E=E.substring(1);else break;j.push(E)}}}if(D){var M=false;if(j.length==0){j.push(z.substring(0,H+I));M=true}var m={};m.title=w;m.toc_id=O;m.nPage=a;m.onlyHitTitle=M;m.summaryTexts=j.join("...");J?i.push(m):h.push(m);o++}}}q=true;for(r=a*p-p;r<=a*p-1;r++){if(r<=i.length-1)m=i[r];else if(r<=o-1)m=h[r-i.length];else break;var P=fncMarkingSummary(m.summaryTexts,
n,C);l.join("")==""&&l.push('<ul class="list impact">');l.push("<li>");if(q){l.push("<a id='first' href=\"javascript:fncOpenTopic('"+m.toc_id+"', "+m.nPage+');void(0);">');q=false}else l.push("<a href=\"javascript:fncOpenTopic('"+m.toc_id+"', "+m.nPage+');void(0);">');l.push("<span>");l.push(m.title);l.push("</span>");l.push("<p>");m.onlyHitTitle||l.push("...");l.push(P);l.push("...");l.push("</p>");l.push("</a>");l.push("</li>")}if(l.join("")!=""){l.push("</ul>");k.push('<input id="id_search_texts" style="display:None;" value="'+
c+'" />');document.getElementById("id_search_results").innerHTML=k.join("")+l.join("");document.getElementById("id_search_results").style.backgroundColor="#FFFFFF";document.getElementById("first").focus();e&&window.scroll(0,0);OHP.Command.dispatch(OHP.Command.CONTENT_CHANGED);c=[];c.push('<div class="turn-page">');c.push('<span class="inner">');n=a>1;var x;x=document.documentElement.getAttribute("dir")=="rtl"?"../common/img/arrow_turnpage_right":"../common/img/arrow_turnpage_left";x+=n?".png":"_disabled.png";
var Q=fncGetPagerStartTag(n,a-1,"left");c.push(Q+'<img src="'+x+'" alt="'+fncGetResourceByResourceId("search_prev")+'" /></a> ');var t=parseInt(o/p);o%p!=0&&t++;x=1;p=t;if(a-y>1)x=a-y;if(document.getElementById("id_search_result_item")){y=[];if(o==0)y.push(fncGetNoneFoundMessage(b));else{var N;N=a*parseInt(fncGetConstantByName("search_show_result_count"))>o?o:a*parseInt(fncGetConstantByName("search_show_result_count"));g=fncGetSearchFoundMessage(b);f=fncGetSearchCountMessage(a,N,o);y.push("<h2>"+
g+"</h2>");y.push("<p>"+f+"</p>");document.title=fncGetDecodeText(document.title+" "+g+" "+f)}document.getElementById("id_search_result_item").innerHTML=y.join("")}if(v>=t){p=t;x=1}else if(a+F<=v)p=v;else if(a+F>=t){p=t;x=p-v+1}else p=a+F;for(d=x;d<=p;d++){b=a===d;var R=fncGetPagerStartTag(!b,d,b?"active":"");c.push(R+d+"</a>")}t=a+1<=t;var G;G=document.documentElement.getAttribute("dir")=="rtl"?"../common/img/arrow_turnpage_left":"../common/img/arrow_turnpage_right";G+=t?".png":"_disabled.png";var S=
fncGetPagerStartTag(t,a+1,"right");c.push(" "+S+'<img src="'+G+'" alt="'+fncGetResourceByResourceId("search_next")+'" /></a>');c.push("</span>");c.push("</div>");document.getElementById("id_search_status").innerHTML=c.join("")}else{document.getElementById("id_search_results").innerHTML=fncGetNoneFoundMessage(b);g=fncGetSearchFoundMessage(b);f=fncGetResourceByResourceId("search_none_found_message_title");document.title=fncGetDecodeText(document.title+" "+g+" "+f)}}}catch(T){}}
function fncGetNoneFoundMessage(a){var e=[];e.push("<h2>"+fncGetSearchFoundMessage(a)+"</h2>");e.push('<div class="guidance">');e.push("<p>"+fncGetResourceByResourceId("search_none_found_message_title")+"</p>");e.push("<h3>"+fncGetResourceByResourceId("search_none_found_message_body")+"</h3>");e.push("<ul>");for(a=1;fncGetResourceByResourceId("search_none_found_message_"+a)!="";){e.push("<li>"+fncGetResourceByResourceId("search_none_found_message_"+a)+"</li>");a++}e.push("</ul>");e.push("</div>");
document.getElementById("id_inner").style.display="none";return e.join("")}function fncSearchResultScroll(a){document.getElementById("id_search_results").scrollTop=a}function fncOpenTopic(a){try{var e=document.getElementById("id_search").value,c=a+".html";OHP.URL.open(c,{search:e})}catch(b){OHP.URL.open(c)}}function fncGetConstantByName(a){try{return eval(constant)[0][a]}catch(e){}}function fncGetCookiePrefixName(){try{return"EMANUAL-"+fncGetResourceByResourceId("pub_number")+"-"}catch(a){}}
function fncSetCookie(a,e){try{document.cookie=fncGetCookiePrefixName()+a+"="+encodeURIComponent(e)+";path=/;"}catch(c){}}function fncGetCookie(a){try{for(var e=document.cookie.split("; "),c=e.length,b=0;b<c;b++){var g=e[b].split("=");if(fncGetCookiePrefixName()+a==g[0])if(g[1])return decodeURIComponent(g[1])}return""}catch(f){}}
function fncIsEntity(a,e,c,b){for(var g=true,f=a.search(b);f!=-1;){g="";var d=a.substring(0,f),h=d.lastIndexOf("&");if(c.indexOf("&")!=0)if(e!="&")if(h!=-1)g=d.substring(h);d="";h=a.substring(f+c.length);var k=h.indexOf(";");if(c.lastIndexOf(";")!=c.length-1)if(c!=";")if(k!=-1)d=h.substring(0,k+1);g=g+c.toLowerCase()+d;if(g=="&amp;"&&c!="&"||g=="&lt;"&&c!=">"||g=="&gt;"&&c!="<"||g=="&quot;"&&c!='"')g=true;else{g=false;break}a=a.substring(f+b.source.length-2);f=a.search(b)}return g}
function fncMarkingSummary(a,e,c){for(var b=0,g=0;g<e.length;g++){switch(b){case 0:strMarkerColor=String.fromCharCode(8320);break;case 1:strMarkerColor=String.fromCharCode(8321);break;case 2:strMarkerColor=String.fromCharCode(8322);break;case 3:strMarkerColor=String.fromCharCode(8323);break;case 4:strMarkerColor=String.fromCharCode(8324);break;case 5:strMarkerColor=String.fromCharCode(8325);break;case 6:strMarkerColor=String.fromCharCode(8326);break;case 7:strMarkerColor=String.fromCharCode(8327);
break;case 8:strMarkerColor=String.fromCharCode(8328);break;case 9:strMarkerColor=String.fromCharCode(8329)}var f=e[g];f=fncConvertAlphameric(f);var d="("+f+")";f=f.replace(/&amp;/g,String.fromCharCode(726));f=f.replace(/&quot;/g,String.fromCharCode(698));f=f.replace(/&lt;/g,String.fromCharCode(753));f=f.replace(/&gt;/g,String.fromCharCode(754));f=RegExp(d,c);a=a.replace(/&amp;/g,String.fromCharCode(726));a=a.replace(/&quot;/g,String.fromCharCode(698));a=a.replace(/&lt;/g,String.fromCharCode(753));
a=a.replace(/&gt;/g,String.fromCharCode(754));a=a.replace(f,function(h){return String.fromCharCode(8261)+strMarkerColor+h+String.fromCharCode(8262)});a=a.replace(/\u02D6/g,"&amp;");a=a.replace(/\u02BA/g,"&quot;");a=a.replace(/\u02F1/g,"&lt;");a=a.replace(/\u02F2/g,"&gt;");b++;if(b>=10)b=0}e=RegExp("\u2046","g");a=a.replace(RegExp("\u2045([\u2080-\u2089])","g"),"<b>");a=a.replace(e,"</b>");a=a.replace(/\u2080/g,"0");a=a.replace(/\u2081/g,"1");a=a.replace(/\u2082/g,"2");a=a.replace(/\u2083/g,"3");a=
a.replace(/\u2084/g,"4");a=a.replace(/\u2085/g,"5");a=a.replace(/\u2086/g,"6");a=a.replace(/\u2087/g,"7");a=a.replace(/\u2088/g,"8");a=a.replace(/\u2089/g,"9");return a=a.replace(/\u00b6+/g,"")}
function fncConvertSearchText(a,e){try{var c="",b=fncGetRegExpArray();a=a.replace(/&lt;/g,"<");a=a.replace(/&gt;/g,">");a=a.replace(/&amp;/g,"&");for(var g=a.length,f=0;f<g;f++){var d=a.substring(f,f+1),h="";if(d.match(/[\u005C]/)){var k=a.substring(f+1,f+2);if(d.match(/([$()\-^\\\|\[\]{},:+*.?])/)){h=fncGetRegExpString(d+k,b);f++}}else if(d.match(/[\uFF66-\uFF9F]/)){k=a.substring(f+1,f+2);if(k.match(/[\uFF9E-\uFF9F]/)){var j=d+k;h=fncGetRegExpString(j,b);if(h!=j)f+=k.length}}else if(d.match(/[A-Za-z0-9]/)){var i=
d.charCodeAt(0)+65248,n=String.fromCharCode(i);h="("+d+"|"+n+")"}else if(d.match(/[\uFF21-\uFF3A\uFF41-\uFF5A\uFF10-\uFF19]/)){var q=d.charCodeAt(0)-65248;j=String.fromCharCode(q);h="("+j+"|"+d+")"}if(h=="")h=fncGetRegExpString(d,b);c+=h}if(e){c=c.replace(/&/g,"&amp;");c=c.replace(/</g,"&lt;");c=c.replace(/>/g,"&gt;")}return c}catch(o){}}
function fncGetRegExpString(a,e){for(var c=a,b=fncGetRegExpSeparator(),g=e.length,f=0;f<g;f++){for(var d=e[f],h=d.split(b),k=h.length,j=0;j<k;j++)if(h[j]==a){c=d.replace(b,"|");c="("+c+")";break}if(c!=a)break}return c}
function fncGetRegExpArray(){var a=fncGetRegExpSeparator();return["\uff71"+a+"\u30a2","\uff72"+a+"\u30a4","\uff73"+a+"\u30a6","\uff74"+a+"\u30a8","\uff75"+a+"\u30aa","\uff76"+a+"\u30ab","\uff77"+a+"\u30ad","\uff78"+a+"\u30af","\uff79"+a+"\u30b1","\uff7a"+a+"\u30b3","\uff7b"+a+"\u30b5","\uff7c"+a+"\u30b7","\uff7d"+a+"\u30b9","\uff7e"+a+"\u30bb","\uff7f"+a+"\u30bd","\uff80"+a+"\u30bf","\uff81"+a+"\u30c1","\uff82"+a+"\u30c4","\uff83"+a+"\u30c6","\uff84"+a+"\u30c8","\uff85"+a+"\u30ca","\uff86"+a+"\u30cb",
"\uff87"+a+"\u30cc","\uff88"+a+"\u30cd","\uff89"+a+"\u30ce","\uff8a"+a+"\u30cf","\uff8b"+a+"\u30d2","\uff8c"+a+"\u30d5","\uff8d"+a+"\u30d8","\uff8e"+a+"\u30db","\uff8f"+a+"\u30de","\uff90"+a+"\u30df","\uff91"+a+"\u30e0","\uff92"+a+"\u30e1","\uff93"+a+"\u30e2","\uff94"+a+"\u30e4","\uff95"+a+"\u30e6","\uff96"+a+"\u30e8","\uff97"+a+"\u30e9","\uff98"+a+"\u30ea","\uff99"+a+"\u30eb","\uff9a"+a+"\u30ec","\uff9b"+a+"\u30ed","\uff9c"+a+"\u30ef","\uff66"+a+"\u30f2","\uff9d"+a+"\u30f3","\uff67"+a+"\u30a1","\uff68"+
a+"\u30a3","\uff69"+a+"\u30a5","\uff6a"+a+"\u30a7","\uff6b"+a+"\u30a9","\uff6f"+a+"\u30c3","\uff6c"+a+"\u30e3","\uff6d"+a+"\u30e5","\uff6e"+a+"\u30e7","\uff73\uff9e"+a+"\u30f4","\uff76\uff9e"+a+"\u30ac","\uff77\uff9e"+a+"\u30ae","\uff78\uff9e"+a+"\u30b0","\uff79\uff9e"+a+"\u30b2","\uff7a\uff9e"+a+"\u30b4","\uff7b\uff9e"+a+"\u30b6","\uff7c\uff9e"+a+"\u30b8","\uff7d\uff9e"+a+"\u30ba","\uff7e\uff9e"+a+"\u30bc","\uff7f\uff9e"+a+"\u30be","\uff80\uff9e"+a+"\u30c0","\uff81\uff9e"+a+"\u30c2","\uff82\uff9e"+
a+"\u30c5","\uff83\uff9e"+a+"\u30c7","\uff84\uff9e"+a+"\u30c9","\uff8a\uff9e"+a+"\u30d0","\uff8b\uff9e"+a+"\u30d3","\uff8c\uff9e"+a+"\u30d6","\uff8d\uff9e"+a+"\u30d9","\uff8e\uff9e"+a+"\u30dc","\uff8a\uff9f"+a+"\u30d1","\uff8b\uff9f"+a+"\u30d4","\uff8c\uff9f"+a+"\u30d7","\uff8d\uff9f"+a+"\u30da","\uff8e\uff9f"+a+"\u30dd","!"+a+"\uff01",'"'+a+"\u201d","#"+a+"\uff03","\\$"+a+"\uff04","%"+a+"\uff05","&"+a+"\uff06","'"+a+"\u2019","\\("+a+"\uff08","\\)"+a+"\uff09","\\*"+a+"\uff0a","\\+"+a+"\uff0b","\\,"+
a+"\uff0c","\\-"+a+"\uff0d","\\."+a+"\uff0e","/"+a+"\uff0f","\\:"+a+"\uff1a",";"+a+"\uff1b","<"+a+"\uff1c","="+a+"\uff1d",">"+a+"\uff1e","\\?"+a+"\uff1f","@"+a+"\uff20","\\["+a+"\uff3b","\\\\"+a+"\uffe5","\\]"+a+"\uff3d","\\^"+a+"\uff3e","_"+a+"\uff3f","`"+a+"\u2018","\\{"+a+"\uff5b","\\|"+a+"\uff5c","\\}"+a+"\uff5d","~"+a+"\uff5e","\uff61"+a+"\u3002","\uff62"+a+"\u300c","\uff63"+a+"\u300d","\uff64"+a+"\u3001","\uff65"+a+"\u30fb"]}function fncGetRegExpSeparator(){return"###Separator###"}
function fncGetSearchFoundMessage(a){return fncGetResourceByResourceId("search_found_message_1_prefix")+fncGetResourceByResourceId("search_word_open")+fncGetEncodeText(a)+fncGetResourceByResourceId("search_word_close")+fncGetResourceByResourceId("search_found_message_1_suffix")}
function fncGetSearchCountMessage(a,e,c){var b=fncGetResourceByResourceId("search_found_count_message_format");b=b.replace("s1",fncGetResourceByResourceId("search_found_count_message_open"));b=b.replace("s2",fncGetResourceByResourceId("search_found_count_message_prefix"));b=b.replace("s3",(a-1)*parseInt(fncGetConstantByName("search_show_result_count"))+1);b=b.replace("s4",fncGetResourceByResourceId("search_found_sub_message_to"));b=b.replace("s5",e);b=b.replace("s6",fncGetResourceByResourceId("search_found_sub_message_1"));
b=b.replace("s7",c);b=b.replace("s8",fncGetResourceByResourceId("search_found_count_message_suffix"));return b=b.replace("s9",fncGetResourceByResourceId("search_found_count_message_close"))}
function fncGetSearchCountMessageBottom(a,e,c){var b=fncGetResourceByResourceId("search_found_count_message_format");b=b.replace("s1","");b=b.replace("s2",fncGetResourceByResourceId("search_found_count_message_prefix"));b=b.replace("s3",(a-1)*parseInt(fncGetConstantByName("search_show_result_count"))+1);b=b.replace("s4",fncGetResourceByResourceId("search_found_sub_message_to"));b=b.replace("s5",e);b=b.replace("s6",fncGetResourceByResourceId("search_found_sub_message_1"));b=b.replace("s7",c);b=b.replace("s8",
fncGetResourceByResourceId("search_found_count_message_suffix"));return b=b.replace("s9","")}function fncGetEncodeText(a){if(a!=null){a=a.replace(/&/g,"&amp;");a=a.replace(/</g,"&lt;");a=a.replace(/>/g,"&gt;");a=a.replace(/\"/g,"&quot;")}return a}function fncGetDecodeText(a){if(a!=null){a=a.replace(/&amp;/g,"&");a=a.replace(/&lt;/g,"<");a=a.replace(/&gt;/g,">");a=a.replace(/&quot;/g,'"')}return a}
function fncConvertAlphameric(a){a=a.replace(/[\uFF21-\uFF3A\uFF41-\uFF5A\uFF10-\uFF19]/g,function(e){return String.fromCharCode(e.charCodeAt(0)-65248)});return a=a.replace(/[a-zA-Z0-9]/g,function(e){return"["+String.fromCharCode(e.charCodeAt(0))+"|"+String.fromCharCode(e.charCodeAt(0)+65248)+"]"})}String.prototype.trim=function(){return this.replace(/(^\s+|\s+$)/g,"")};