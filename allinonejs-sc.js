/*--- Script untuk Blog SC Community (https://ruangsc.blogspot.com) ---*/ 

/*--- 
Script: Hash.Cookie.js
deskripsi: Untuk membuat, membaca, dan menghapus Cookie dalam format JSON.
 ---*/ 

Hash.Cookie=new Class({
  Extends:Cookie,options:{autoSave:true},
  initialize:function(B,A){
      this.parent(B,A);
      this.load();},
      save:function(){
          var A=JSON.encode(this.hash);

          if(!A||A.length>4096){
              return false;}if(A=="{}"){
              this.dispose();}
              else{this.write(A);}
              return true;},load:function(){this.hash=new Hash(JSON.decode(this.read(),true));

                  return this;}});
                  Hash.Cookie.implement((function(){var A={};
                  Hash.each(Hash.prototype,function(C,B){A[B]=function(){
                      var D=C.apply(this.hash,arguments);
                      if(this.options.autoSave){
                          this.save();}
                          return D;};});
                          return A;})());

/*--- 
Script: Fx.Slide.js
Deskripsi: Efek toggle untuk menggeser elemen ke dalam dan ke luar tampilan.
---*/ 

Fx.Slide=new Class({
  Extends:Fx,options:{
      mode:'vertical'},
      initialize:function(element,options){
          this.addEvent('complete',function(){
              this.open=(this.wrapper['offset'+this.layout.capitalize()]!=0);
              if(this.open&&Browser.Engine.webkit419)this.element.dispose().inject(this.wrapper)},true);
              this.element=this.subject=$(element);this.parent(options);
              var wrapper=this.element.retrieve('wrapper');
              this.wrapper=wrapper||new Element('div',{
                  styles:$extend(this.element.getStyles('margin','position'),{'overflow':'hidden'})}).wraps(this.element);
                  this.element.store('wrapper',this.wrapper).setStyle('margin',0);
                  this.now=[];this.open=true},vertical:function(){this.margin='margin-top';
                      this.layout='height';
                      this.offset=this.element.offsetHeight},horizontal:function(){
                          this.margin='margin-left';
                          this.layout='width';
                          this.offset=this.element.offsetWidth},set:function(now){
                              this.element.setStyle(this.margin,now[0]);
                              this.wrapper.setStyle(this.layout,now[1]);
                              return this},compute:function(from,to,delta){
                                  var now=[];
                                  var x=2;x.times(function(i){now[i]=Fx.compute(from[i],to[i],delta)});
                                  return now},start:function(how,mode){
                                      if(!this.check(arguments.callee,how,mode))return this;this[mode||this.options.mode]();
                                      var margin=this.element.getStyle(this.margin).toInt();
                                      var layout=this.wrapper.getStyle(this.layout).toInt();
                                      var caseIn=[[margin,layout],[0,this.offset]];var caseOut=[[margin,layout],[-this.offset,0]];
                                      var start;switch(how){case'in':start=caseIn;
                                          break;case'out':start=caseOut;
                                          break;case'toggle':start=(this.wrapper['offset'+this.layout.capitalize()]==0)?caseIn:caseOut}
                                          return this.parent(start[0],start[1])},slideIn:function(mode){
                                              return this.start('in',mode)},slideOut:function(mode){
                                                  return this.start('out',mode)},hide:function(mode){this[mode||this.options.mode]();
                                                      this.open=false;
                                                      return this.set([-this.offset,0])},show:function(mode){
                                                          this[mode||this.options.mode]();
                                                          this.open=true;
                                                          return this.set([0,this.offset])},toggle:function(mode){
                                                              return this.start('toggle',mode)}});Element.Properties.slide={set:function(options){
                                                                  var slide=this.retrieve('slide');
                                                                  if(slide)slide.cancel();
                                                                  return this.eliminate('slide').store('slide:options',$extend({link:'cancel'},options))},
                                                                  get:function(options){if(options||!this.retrieve('slide')){
                                                                      if(options||!this.retrieve('slide:options'))this.set('slide',options);
                                                                      this.store('slide',new Fx.Slide(this,this.retrieve('slide:options')))}
                                                                      return this.retrieve('slide')}};
                                                                      Element.implement({slide:function(how,mode){how=how||'toggle';
                                                                          var slide=this.get('slide'),toggle;
                                                                          switch(how){case'hide':slide.hide(mode);
                                                                              break;case'show':slide.show(mode);
                                                                              break;case'toggle':var flag=this.retrieve('slide:flag',slide.open);slide[(flag)?'slideOut':'slideIn'](mode);
                                                                              this.store('slide:flag',!flag);
                                                                              toggle=true;break;default:slide.start(how,mode)}
                                                                              if(!toggle)this.eliminate('slide:flag');
                                                                              return this}});

/*--- 
Script Script Mootools Lainnya
Deskripsi: Teks dan Gambar Slide, V-Toogle, Kecerahan, dll.
---*/ 

window.addEvent('domready', function() {
/*--- Image Slideshow ---*/ 

/*--- settings ---*/ 
    var showDuration = 3000; var container = $('slideshow-container'); var images = container.getElements('img'); var currentIndex = 0; var interval;

/*--- opacity and fade ---*/ 
    images.each(function(img,i){ if(i > 0) { img.set('opacity',0); } });

/*--- worker ---*/ 
    var show = function() { images[currentIndex].fade('out'); images[currentIndex = currentIndex < images.length - 1 ? currentIndex+1 : 0].fade('in'); };

/*--- start once the page is finished loading ---*/ 
    window.addEvent('load',function(){ interval = show.periodical(showDuration); });

/*--- text-slide ---*/ 
    var list = $('news-feed').getFirst('ul'); 
    var items = list.getElements('li'); var showDuration = 3000; 
    var scrollDuration = 500; var index = 0; 
    var height = items[0].getSize().y;
    var move = function() { list.set('tween',{ duration: scrollDuration, onComplete: function() { 
      if(index == items.length - 1) { index = 0 - 1; list.scrollTo(0,0); } } }).tween('top',0 - (++index * height)); };
    window.addEvent('load',function() { move.periodical(showDuration);});
    
/*--- VerticalSlide ---*/ 
    var myVerticalSlide = new Fx.Slide('juljol').hide(); $('nonghol').addEvent('click', function(event){ event.stop(); 
        myVerticalSlide.toggle(); }); $('nyumput').addEvent('click', function(event){ event.stop(); 
        myVerticalSlide.slideOut(); });
    });
    
/*--- 
Script: jQuery.js
Deskripsi: Untuk sagalarupa
---*/ 

jQuery.noConflict();
jQuery(document).ready(function(){ 

/*--- toggle ---*/ 
  jQuery(".eusi-sorolok").hide(); 
  jQuery("#sorolok>h4").click(function(){ jQuery(this).toggleClass("active").next().slideToggle("slow"); });

/*--- widget content list ---*/ 
  jQuery('.widget-content li a, .eusi-popular-posts li a').hover(function() { 
    jQuery(this).animate({ paddingLeft: '7px' }, {duration:300}); }, function() { 
      jQuery(this).animate({ paddingLeft: '0px' }, {duration:300}); });

/*--- sociable img ---*/ 
  jQuery('.sociable img').fadeTo('slow', 0.4); jQuery('.sociable img').hover(function() { jQuery(this).fadeTo('slow', 1); }, function() { jQuery(this).fadeTo('slow', 0.4); });

/*--- sharethis_toolbox, stickysocial, luhur-handap ---*/ 
  jQuery('.sharethis_toolbox img, .stickysocial img, .luhur-handap img').fadeTo('slow', 0.75); 
  jQuery('.sharethis_toolbox img, .stickysocial img, .luhur-handap img').hover(function() { 
    jQuery(this).fadeTo('slow', 1); }, function() { jQuery(this).fadeTo('slow', 0.75); });
});

/*--- Scrolltopdown ---*/ 
jQuery(function(){ jQuery('a[href*=#]').click(function(){
  if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
  var $target=jQuery(this.hash);$target=$target.length&&$target||jQuery('[name='+this.hash.slice(1)+']');if($target.length){
    var targetOffset=$target.offset().top;jQuery('html,body').animate({scrollTop:targetOffset},1000);return false;}}});});

/*--- 
Script: Tabcontent.js
Deskripsi: Untuk Tabcontent 4 kolom
---*/ 

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

/*--- 
Script: Tabview.js
Deskripsi: Untuk Tabview 4 kolom
---*/ 

function tabview_aux(TabViewId,id){
  var TabView=document.getElementById(TabViewId);var Tabs=TabView.firstChild;while(Tabs.className!="Tabs")Tabs=Tabs.nextSibling;var Tab=Tabs.firstChild;var i=0;
  do{if(Tab.tagName=="A"){i++;Tab.href="javascript:tabview_switch('"+TabViewId+"', "+i+");";Tab.className=(i==id)?"Active":"";Tab.blur();}}
  while(Tab=Tab.nextSibling);var Pages=TabView.firstChild;while(Pages.className!='Pages')Pages=Pages.nextSibling;var Page=Pages.firstChild;var i=0;
  do{if(Page.className=='Page'){i++;if(Pages.offsetHeight)Page.style.height=(Pages.offsetHeight-2)+"px";Page.style.overflow="auto";Page.style.display=(i==id)?'block':'none';}}
  while(Page=Page.nextSibling);}
function tabview_switch(TabViewId,id){tabview_aux(TabViewId,id);}
function tabview_initialize(TabViewId){tabview_aux(TabViewId,1);}

/*--- 
Script Lainnya
Deskripsi: Untuk ContainerSelect dan Togglespoiler
---*/ 

/*--- ContainerSelect ---*/ 
function containerSelect(id) { containerUnselect(); 
    if(document.selection) { var range = document.body.createTextRange(); range.moveToElementText(id); range.select();}
    else if(window.getSelection){ var range = document.createRange(); range.selectNode(id); window.getSelection().addRange(range);}}
  function containerUnselect() {
    if (document.selection) { document.selection.empty(); }
    else if (window.getSelection) { window.getSelection().removeAllRanges();}}

/*--- Togglespoiler ---*/ 
function togglespoiler (postid){
  var whichpost = document.getElementById(postid);if (whichpost.className=="widgetshown"){whichpost.className="widgethidden";} else{whichpost.className="widgetshown";}}
