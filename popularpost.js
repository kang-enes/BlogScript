// ----------------------------------------
// MOST POPULAR POSTS
// ----------------------------------------
// Design : Abu Farhan
// URL    : www.abu-farhan.com
// Date   : 01-02-2010
// Re-edit: Kang eNeS
// URL    : ruangsc.blogspot.com
// ----------------------------------------

//<![CDATA[
var postTitlear=new Array();
var postUrlar=new Array();
var postCommentar=new Array();
var totalpost;document.write("<ul>");
function showrecentposts(j){var a=j.feed.entry.length;totalpost=a;
    for(var f=0;f<a;f++){
var h=j.feed.entry[f];
var c=h.title.$t;var b;
var g;if(f==j.feed.entry.length){break}
    for(var d=0;d<h.link.length;d++){
    if(h.link[d].rel=="alternate"){g=h.link[d].href;break}}
    for(var d=0;d<h.link.length;d++){
    if(h.link[d].rel=="replies"&&h.link[d].type=="text/html"){b=h.link[d].title.split(" ")[0];break}}c=(titlebold)?"<b>"+c+"</b>":c; 
    postTitlear.push(c);
    postUrlar.push(g);
    postCommentar.push(b)}sortPosts();
    for(var f=0;f<maxshowresult;f++){var e='<li><a href="'+postUrlar[f]+'" class="recent-link">'+postTitlear[f]+"</a> ("+postCommentar[f]+"  "+explanation+")"; 
        document.write(e)}}
function sortPosts(){function c(d,f){var e=postTitlear[d];
    postTitlear[d]=postTitlear[f];
    postTitlear[f]=e;
var e=postUrlar[d];
    postUrlar[d]=postUrlar[f];
    postUrlar[f]=e;
var e=postCommentar[d];
    postCommentar[d]=postCommentar[f];
    postCommentar[f]=e}
    for(var b=0;b<postTitlear.length-1;b++){
    for(var a=b+1;a<postTitlear.length;a++){
    if(parseInt(postCommentar[b])<parseInt(postCommentar[a])){c(b,a)}}}}
document.write('<script src="http://'+home_page+"/feeds/posts/default?max-results="+numposts+'&orderby=published&alt=json-in-script&callback=showrecentposts"><\/script>');
document.write('</li>')
document.write('</ul>')
document.write('<div style="font-family:Arial; font-size:85%; margin-top:5px;"><a href="http://ruangsc.blogspot.com/2010/02/menambahkan-most-popular-post-artikel.html" target="_blank" title="Cara membuat Most Populars Post Widget">Widget by SC Community</a></div>');
//]]>