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