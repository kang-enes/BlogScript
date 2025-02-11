/*--- Script Mootools untuk Blog NeSaCk oleh Kang eNeS (https://ruangsc.blogspot.com) ---*/

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
      
  /*--- v-toggle ---*/ 
      var myVerticalSlide = new Fx.Slide('v_juljol').hide(); $('v_toggle').addEvent('click', function(event){ event.stop(); 
          myVerticalSlide.toggle(); }); $('v_nyumput').addEvent('click', function(event){ event.stop(); 
          myVerticalSlide.slideOut(); });
      });
      