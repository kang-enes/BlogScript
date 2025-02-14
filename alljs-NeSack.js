/*--- Script JQuery untuk Blog NeSaCk oleh Kang eNeS (https://ruangsc.blogspot.com) ---*/

/*--- 
Script: Mootools
Deskripsi: Untuk Bingkai Foto
---*/ 

window.addEvent('domready',function() {
	/* settings */
	var showDuration = 4000;
	var container = $('bingkai');
	var images = container.getElements('img');
	var currentIndex = 0;
	var interval;
	/* opacity and fade */
	images.each(function(img,i){ 
	  if(i > 0) {
		img.set('opacity',0);
	  }
	});
	/* worker */
	var show = function() {
	  images[currentIndex].fade('out');
	  images[currentIndex = currentIndex < images.length - 1 ? currentIndex+1 : 0].fade('in');
	};
	/* start once the page is finished loading */
	window.addEvent('load',function(){
	  interval = show.periodical(showDuration);
	});
  });


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
Script: jQuery Lainnya
Deskripsi: Untuk sagalarupa
---*/ 

/*--- Scrolltopdown ---*/  
jQuery.noConflict();
jQuery(function(){ 

    jQuery('a[href*=#]').click(function() {   
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        && location.hostname == this.hostname) {        
            var $target = jQuery(this.hash);            
            $target = $target.length && $target || jQuery('[name=' + this.hash.slice(1) +']');            
            if ($target.length) {            
                var targetOffset = $target.offset().top;                
                jQuery('html,body').animate({scrollTop: targetOffset}, 1000);                    
                return false; } }        
    }); });

/*--- Toggle Spoiler ---*/ 
    jQuery(".eusi-sorolok").hide(); 
    jQuery("#sorolok>h4").click(function(){ 
        jQuery(this).toggleClass("active").next().slideToggle("slow"); 
    });

/*--- Widget Content List ---*/  
    jQuery(document).ready(function(){ 
        jQuery('.widget-content li a').hover(function() {
            jQuery(this).animate({ paddingLeft: '5px' }, {duration:250});
            }, function() {
            jQuery(this).animate({ paddingLeft: '0px' }, {duration:250});           
       });
    });

/*--- Togglespoiler ---*/ 
function togglespoiler (postid){
	var whichpost = document.getElementById(postid);
	if (whichpost.className=="widgetshown"){
		whichpost.className="widgethidden";} 
		else{
		whichpost.className="widgetshown";
		}}
  