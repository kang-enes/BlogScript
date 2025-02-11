/*--- Script untuk NeSaCk oleh Kang eNeS (https://ruangsc.blogspot.com) ---*/

/*--- 
Script: jQuery.js
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

/*--- toggle spoiler ---*/ 
    jQuery(".eusi-sorolok").hide(); 
    jQuery("#sorolok>h4").click(function(){ 
        jQuery(this).toggleClass("active").next().slideToggle("slow"); 
    });

/*--- widget content list ---*/  
    jQuery(document).ready(function(){ 
        jQuery('.widget-content li a').hover(function() {
            jQuery(this).animate({ paddingLeft: '5px' }, {duration:250});
            }, function() {
            jQuery(this).animate({ paddingLeft: '0px' }, {duration:250});           
       });
    });

/*--- 
Script: Non-jQuery.js
Deskripsi: Untuk Togglespoiler
---*/ 

/*--- Togglespoiler ---*/ 
function togglespoiler (postid){
    var whichpost = document.getElementById(postid);
    if (whichpost.className=='widgetshown'){
    whichpost.className='widgethidden';}
    else{
    whichpost.className='widgetshown';}}
