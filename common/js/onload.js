window.onload=function(){try{fncLoadResource();var a=OHP.URL.getSearchParams();if(fncIsNonwordSearch(a))OHP.URL.open("../index.html");else{document.getElementById("id_search_button").onclick=function(){var c=document.getElementById("id_search").value;if(c==fncGetResourceByResourceId("enter_search_keyword")||c=="")return false;strSearchHelpTocId="../search/search";fncOpenSearchPage(1,false);return false};if(document.getElementById("id_search_button_sub")!=null)document.getElementById("id_search_button_sub").onclick=
function(){var c=document.getElementById("id_search_sub").value;if(c==fncGetResourceByResourceId("enter_search_keyword")||c=="")return false;strSearchHelpTocId="../search/search";fncOpenSearchPage(1,true);return false};var b=a.get("search"),d=fncIsSearchPage();if(b!==null||b===null&&d){if(b===null&&d)b="";b=decodeURIComponent(b);document.getElementById("id_search").value=b;document.getElementById("id_search").style.color="#000000";if(document.getElementById("id_search_button_sub")!=null){document.getElementById("id_search_sub").value=
b;document.getElementById("id_search_sub").style.color="#000000"}if(d){fncDoSearchWithPageQuery(null,a);if(window.history&&window.history.pushState)window.onpopstate=function(c){fncDoSearchWithPageQuery(c.state,OHP.URL.getSearchParams())}}}fncSearchBox();fncVideoClicked();window.setTimeout(fncScrollActiveNavigation,50)}}catch(e){}};
function fncScrollActiveNavigation(){if(window.matchMedia("(min-width: 1280px)").matches)for(var a=document.getElementById("menu").getElementsByTagName("a"),b=0;b<a.length;b++){var d=false,e=a[b].getAttribute("class");if(e!=null){e=e.split(" ");for(var c=0;c<e.length;c++)if(e[c]=="active"){a[b].scrollIntoView(false);d=true;break}if(d)break}}}function fncDoSearchWithPageQuery(a,b){if(a===null)a=b.get("page");a=parseInt(a,10);if(isNaN(a)||a<1)a=1;fncDoSearch(a,false)}
function fncOpenSearchPage(a,b){try{var d="",e=document.location.href,c=e.indexOf("/contents/"),f=e.indexOf("/cover/"),g=e.indexOf("/search/");d="";d=b==false?document.getElementById("id_search").value:document.getElementById("id_search_sub").value;OHP.URL.open(c!=-1||f!=-1||g!=-1?"../search/search.html":"./search/search.html",{search:d})}catch(h){}}function fncIsSearchPage(){return document.location.pathname.indexOf("search.html")!==-1}
function fncIsNonwordSearch(a){try{return!a.has("search")&&fncIsSearchPage()?true:false}catch(b){}}var isIE=true;function fncVideoClicked(){var a=window.navigator.userAgent.toLowerCase();if(a.indexOf("msie")==-1&&a.indexOf("trident")==-1)isIE=false;$("video").click(function(){event.preventDefault();isIE||(this.paused?this.play():this.pause())})};