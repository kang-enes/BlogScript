/* JS SC COMMUNITY 
/* Design : Kang eNeS 

/* Tabmenu4col */
function blendoff(idname){document.getElementById(idname).style.display='none';}
function blendon(idname){document.getElementById(idname).style.display='block';}
function swichtabs(wert){if(wert=='1'){
  document.getElementById('tablink1').className='tab1 tabactive';
  document.getElementById('tablink2').className='tab2';
  document.getElementById('tablink3').className='tab3';
  document.getElementById('tablink4').className='tab4';}else if(wert=='2'){document.getElementById('tablink1').className='tab1';
    document.getElementById('tablink2').className='tab2 tabactive';
    document.getElementById('tablink3').className='tab3';
    document.getElementById('tablink4').className='tab4';}else if(wert=='3'){document.getElementById('tablink1').className='tab1';
      document.getElementById('tablink2').className='tab2';
      document.getElementById('tablink3').className='tab3 tabactive';
      document.getElementById('tablink4').className='tab4';}else if(wert=='4'){document.getElementById('tablink1').className='tab1';
        document.getElementById('tablink2').className='tab2';document.getElementById('tablink3').className='tab3';
        document.getElementById('tablink4').className='tab4 tabactive';}}
/* Tabmenuview */
function tabview_aux(TabViewId,id){
  var TabView=document.getElementById(TabViewId);var Tabs=TabView.firstChild;while(Tabs.className!="Tabs")Tabs=Tabs.nextSibling;var Tab=Tabs.firstChild;var i=0;
  do{if(Tab.tagName=="A"){i++;Tab.href="javascript:tabview_switch('"+TabViewId+"', "+i+");";Tab.className=(i==id)?"Active":"";Tab.blur();}}
  while(Tab=Tab.nextSibling);var Pages=TabView.firstChild;while(Pages.className!='Pages')Pages=Pages.nextSibling;var Page=Pages.firstChild;var i=0;
  do{if(Page.className=='Page'){i++;if(Pages.offsetHeight)Page.style.height=(Pages.offsetHeight-2)+"px";Page.style.overflow="auto";Page.style.display=(i==id)?'block':'none';}}
  while(Page=Page.nextSibling);}
function tabview_switch(TabViewId,id){tabview_aux(TabViewId,id);}
function tabview_initialize(TabViewId){tabview_aux(TabViewId,1);}
/** Togglespoiler **/
function togglespoiler (postid){
  var whichpost = document.getElementById(postid);if (whichpost.className=="widgetshown"){whichpost.className="widgethidden";} else{whichpost.className="widgetshown";}}
/* ContainerSelect */
function containerSelect(id) { containerUnselect(); 
  if(document.selection) { var range = document.body.createTextRange(); range.moveToElementText(id); range.select();}
  else if(window.getSelection){ var range = document.createRange(); range.selectNode(id); window.getSelection().addRange(range);}}
function containerUnselect() {
  if (document.selection) { document.selection.empty(); }
  else if (window.getSelection) { window.getSelection().removeAllRanges(); }}
/** MOOTOOLS SC COMMUNITY **/
window.addEvent('domready', function() {
/* Image Slideshow */
  /* settings */
  var showDuration = 3000; var container = $('slideshow-container'); var images = container.getElements('img'); var currentIndex = 0; var interval;
  /* opacity and fade */
  images.each(function(img,i){ if(i > 0) { img.set('opacity',0); } });
  /* worker */
  var show = function() { images[currentIndex].fade('out'); images[currentIndex = currentIndex < images.length - 1 ? currentIndex+1 : 0].fade('in'); };
  /* start once the page is finished loading */
  window.addEvent('load',function(){ interval = show.periodical(showDuration); });
/* text-slide */
  var list = $('news-feed').getFirst('ul'); 
  var items = list.getElements('li'); var showDuration = 3000; 
  var scrollDuration = 500; var index = 0; 
  var height = items[0].getSize().y;
  var move = function() { list.set('tween',{ duration: scrollDuration, onComplete: function() { 
    if(index == items.length - 1) { index = 0 - 1; list.scrollTo(0,0); } } }).tween('top',0 - (++index * height)); };
  window.addEvent('load',function() { move.periodical(showDuration);});
/* v-toggle */
  var myVerticalSlide = new Fx.Slide('v_juljol').hide(); $('v_toggle').addEvent('click', function(event){ event.stop(); 
    myVerticalSlide.toggle(); }); $('v_nyumput').addEvent('click', function(event){ event.stop(); 
    myVerticalSlide.slideOut(); });});

/** JQUERY SC COMMUNITY **/
jQuery.noConflict();
jQuery(document).ready(function(){ 
/* toggle */
  jQuery(".eusi-sorolok").hide(); 
  jQuery("#sorolok>h4").click(function(){ jQuery(this).toggleClass("active").next().slideToggle("slow"); });
/*widget list */
  jQuery('.widget-content li a, .eusi-popular-posts li a').hover(function() { 
    jQuery(this).animate({ paddingLeft: '7px' }, {duration:300}); }, function() { 
      jQuery(this).animate({ paddingLeft: '0px' }, {duration:300}); });
/* sociable img */
  jQuery('.sociable img').fadeTo('slow', 0.4); jQuery('.sociable img').hover(function() { jQuery(this).fadeTo('slow', 1); }, function() { jQuery(this).fadeTo('slow', 0.4); });
/* sharethis_toolbox, stickysocial, luhur-handap */
  jQuery('.sharethis_toolbox img, .stickysocial img, .luhur-handap img').fadeTo('slow', 0.75); 
  jQuery('.sharethis_toolbox img, .stickysocial img, .luhur-handap img').hover(function() { 
    jQuery(this).fadeTo('slow', 1); }, function() { jQuery(this).fadeTo('slow', 0.75); });
});
/* Scrolltopdown */
jQuery(function(){ jQuery('a[href*=#]').click(function(){
  if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
  var $target=jQuery(this.hash);$target=$target.length&&$target||jQuery('[name='+this.hash.slice(1)+']');if($target.length){
    var targetOffset=$target.offset().top;jQuery('html,body').animate({scrollTop:targetOffset},1000);return false;}}});});




