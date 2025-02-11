/*--- Script untuk NeSaCk oleh Kang eNeS (https://ruangsc.blogspot.com) ---*/

/*--- 
Script: slider-start-stop.js
Deskripsi: Untuk Gambar Slider
---*/

// SET THIS VARIABLE FOR DELAY, 1000 = 1 SECOND
jQuery.noConflict();
var delayLength = 4000;
	
function doMove(panelWidth, tooFar) {
	var leftValue = jQuery("#mover").css("left");
	
// Fix for IE
	if (leftValue == "auto") { leftValue = 0; };

	var movement = parseFloat(leftValue, 10) - panelWidth;
	
	if (movement == tooFar) {
		jQuery(".slide img").animate({
			"top": -200,
                        "img": {delay: 10}
		}, function() {
			jQuery("#mover").animate({
				"left": 0
			}, function() {
				jQuery(".slide img").animate({
					"top": 50,
					"img": {delay: 10}
				});
			});
		});
	}
	else {
		jQuery(".slide img").animate({
			"top": -200,
			"img": {delay: 10}
		}, function() {
			jQuery("#mover").animate({
				"left": movement
			}, function() {
				jQuery(".slide img").animate({
					"top": 50,
					"img": {delay: 10}
				});
			});
		});
	}
}

jQuery(function(){
	
    var jQueryslide1 = jQuery(".slide");

	var panelWidth = jQueryslide1.css("width");
	var panelPaddingLeft = jQueryslide1.css("paddingLeft");
	var panelPaddingRight = jQueryslide1.css("paddingRight");

	panelWidth = parseFloat(panelWidth, 10);
	panelPaddingLeft = parseFloat(panelPaddingLeft, 10);
	panelPaddingRight = parseFloat(panelPaddingRight, 10);

	panelWidth = panelWidth + panelPaddingLeft + panelPaddingRight;
	
	var numPanels = jQuery(".slide").length;
	var tooFar = -(panelWidth * numPanels);
	var totalMoverwidth = numPanels * panelWidth;
	jQuery("#mover").css("width", totalMoverwidth);

	jQuery("#slider").append('<a href="#" id="slider-stopper">Stop</a>');

	sliderIntervalID = setInterval(function(){
		doMove(panelWidth, tooFar);
	}, delayLength);
	
	jQuery("#slider-stopper").click(function(){
		if (jQuery(this).text() == "Stop") {
			clearInterval(sliderIntervalID);
		 	jQuery(this).text("Start");
		}
		else {
			sliderIntervalID = setInterval(function(){
				doMove(panelWidth, tooFar);
			}, delayLength);
		 	jQuery(this).text("Stop");
		}
		 
	});

});

/*--- 
Script JQuery Lainnya
Deskripsi: Toogle, stickysocial, Scrolltopdown, dll.
---*/ 

/*--- toggle ---*/
jQuery(document).ready(function(){ 
	jQuery(".eusi-sorolok").hide(); 
	jQuery("#sorolok>h4").click(function(){ jQuery(this).toggleClass("active").next().slideToggle("slow"); });
  
  /*--- widget content list ---*/
	jQuery('.widget-content li a').hover(function() { 
	  jQuery(this).animate({ paddingLeft: '5px' }, {duration:250}); }, function() { 
		jQuery(this).animate({ paddingLeft: '0px' }, {duration:250}); });
  
  /*--- stickysocial, luhur-handap ---*/
	jQuery('.stickysocial img, .luhur-handap img').fadeTo('slow', 0.75); 
	jQuery('.stickysocial img, .luhur-handap img').hover(function() { 
	  jQuery(this).fadeTo('slow', 1); }, function() { jQuery(this).fadeTo('slow', 0.75); });
  });
  

/*--- 
Script: slideshow-more
Deskripsi: Untuk Gambar Slideshow
---*/

window.addEvent('domready',function() {
	/* settings */
	var showDuration = 3000;
	var container = $('slideshow-container');
	var images = container.getElements('img');
	var currentIndex = 0;
	var interval;
	var toc = [];
	var tocWidth = 20;
	var tocActive = 'toc-active';
	
	/* new: starts the show */
	var start = function() { interval = show.periodical(showDuration); };
	var stop = function() { $clear(interval); };
	/* worker */
	var show = function(to) {
	  images[currentIndex].fade('out');
	  toc[currentIndex].removeClass(tocActive);
	  images[currentIndex = ($defined(to) ? to : (currentIndex < images.length - 1 ? currentIndex+1 : 0))].fade('in');
	  toc[currentIndex].addClass(tocActive);
	};
	
	/* new: control: table of contents */
	images.each(function(img,i){
	  toc.push(new Element('a',{
		text: i+1,
		href: '#',
		'class': 'toc' + (i == 0 ? ' ' + tocActive : ''),
		events: {
		  click: function(e) {
			if(e) e.stop();
			stop();
			show(i);
		  }
		},
		styles: {
		  left: ((i + 1) * (tocWidth + 10))
		}
	  }).inject(container));
	  if(i > 0) { img.set('opacity',0); }
	});
	
	/* new: control: next and previous */
	var next = new Element('a',{
	  href: '#',
	  id: 'next',
	  text: '>>',
	  events: {
		click: function(e) {
		  if(e) e.stop();
		  stop(); show();
		}
	  }
	}).inject(container);
	var previous = new Element('a',{
	  href: '#',
	  id: 'previous',
	  text: '<<',
	  events: {
		click: function(e) {
		  if(e) e.stop();
		  stop(); show(currentIndex != 0 ? currentIndex -1 : images.length-1);
		}
	  }
	}).inject(container);
	
	/* new: control: start/stop on mouseover/mouseout */
	container.addEvents({
	  mouseenter: function() { stop(); },
	  mouseleave: function() { start(); }
	});
	
	/* start once the page is finished loading */
	window.addEvent('load',function(){
	  start();
	});
  });

/*--- 
Script Mootools
Deskripsi: V-Toogle dan Togglespoiler
---*/ 
	
/*--- v-toggle ---*/ 
var myVerticalSlide = new Fx.Slide('v_juljol').hide(); $('v_toggle').addEvent('click', function(event){ event.stop(); 
	myVerticalSlide.toggle(); }); $('v_nyumput').addEvent('click', function(event){ event.stop();
	myVerticalSlide.slideOut(); }); });
	
/*--- Togglespoiler ---*/
function togglespoiler (postid){
  var whichpost = document.getElementById(postid);if (whichpost.className=="widgetshown"){whichpost.className="widgethidden";} else{whichpost.className="widgetshown";}}
