/* Sagala Rupa */

jQuery.noConflict();
jQuery(document).ready(function(){ 

/* toggle */
  jQuery(".toggle-content").hide(); 
  jQuery("#toggle-container>h4").click(function(){ jQuery(this).toggleClass("active").next().slideToggle("slow"); });

/* sidebars */
jQuery('.widget-content li a').hover(function() {
  jQuery(this).animate({ paddingLeft: '17px' }, {duration:250});}, function() {
  jQuery(this).animate({ paddingLeft: '15px' }, {duration:250});}); });
  
 /* sharethis_toolbox, stickysocial, luhur-handap */
 jQuery('.sharethis_toolbox img, .stickysocial img, .luhur-handap img').fadeTo('slow', 0.75); 
 jQuery('.sharethis_toolbox img, .stickysocial img, .luhur-handap img').hover(function() { 
   jQuery(this).fadeTo('slow', 1); }, function() { jQuery(this).fadeTo('slow', 0.75); });});

