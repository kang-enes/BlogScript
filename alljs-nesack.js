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
Script Mootools
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
		
/*--- v-toggle ---*/ 
var myVerticalSlide = new Fx.Slide('v_juljol').hide(); $('v_toggle').addEvent('click', function(event){ event.stop(); 
	myVerticalSlide.toggle(); }); $('v_nyumput').addEvent('click', function(event){ event.stop();
	myVerticalSlide.slideOut(); }); });
	
/*--- Togglespoiler ---*/
function togglespoiler (postid){
  var whichpost = document.getElementById(postid);if (whichpost.className=="widgetshown"){whichpost.className="widgethidden";} else{whichpost.className="widgetshown";}}
