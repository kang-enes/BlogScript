/* Script untuk Sastra Culun (http://sastraculun.blogspot.com) */

//===========================================
// STICKYSOCIAL DAN SCROLL TOP-DOWN
//===========================================


jQuery.noConflict();

//  Untuk Stickysocial

jQuery(document).ready(function(){
    jQuery(&quot;.toggle-content&quot;).hide();
    jQuery(&quot;#toggle-container&gt;h4&quot;).click(function(){
        jQuery(this).toggleClass(&quot;active&quot;).next().slideToggle(&quot;slow&quot;);
    });

/* sidebars */

jQuery(&#39;.widget-content li a&#39;).hover(function() {
    jQuery(this).animate({ paddingLeft: &#39;17px&#39; }, {duration:250});}, function() {
        jQuery(this).animate({ paddingLeft: &#39;15px&#39; }, {duration:250});
    });

/* stickysocial */

jQuery(&#39;.stickysocial img&#39;).fadeTo(&#39;slow&#39;, 0.88);
jQuery(&#39;.stickysocial img&#39;).hover(function() {
    jQuery(this).fadeTo(&#39;slow&#39;, 1);}, function() {
        jQuery(this).fadeTo(&#39;slow&#39;, 0.88);});
    });

//  Untuk Scroll Top-Down

jQuery(function(){
    jQuery('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')&& location.hostname == this.hostname) {
        var $target = jQuery(this.hash);
        $target = $target.length && $target || jQuery('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            jQuery('html,body').animate({scrollTop: targetOffset}, 1000);
            return false; } } }); 
        });

//===========================================
// SHOW RAINBOW EFFECT FOR LINK HOVER
//===========================================

var rate = 20;  // Increase amount(The degree of the transmutation)

if (document.getElementById)
window.onerror=new Function("return true")

var objActive;  // The object which event occured in
var act = 0;    // Flag during the action
var elmH = 0;   // Hue
var elmS = 128; // Saturation
var elmV = 255; // Value
var clrOrg;     // A color before the change
var TimerID;    // Timer ID


if (document.all) {
    document.onmouseover = doRainbowAnchor;
    document.onmouseout = stopRainbowAnchor;
}
else if (document.getElementById) {
    document.captureEvents(Event.MOUSEOVER | Event.MOUSEOUT);
    document.onmouseover = Mozilla_doRainbowAnchor;
    document.onmouseout = Mozilla_stopRainbowAnchor;
}


//  This function begins to change a color.

function doRainbow(obj)
{
    if (act == 0) {
        act = 1;
        if (obj)
            objActive = obj;
        else
            objActive = event.srcElement;
        clrOrg = objActive.style.color;
        TimerID = setInterval("ChangeColor()",100);
    }
}


//  This function stops to change a color.

function stopRainbow()
{
    if (act) {
        objActive.style.color = clrOrg;
        clearInterval(TimerID);
        act = 0;
    }
}


//  This function begins to change a color. (of a anchor, automatically)

function doRainbowAnchor()
{
    if (act == 0) {
        var obj = event.srcElement;
        while (obj.tagName != 'A' && obj.tagName != 'BODY') {
            obj = obj.parentElement;
            if (obj.tagName == 'A' || obj.tagName == 'BODY')
                break;
        }

        if (obj.tagName == 'A' && obj.href != '') {
            objActive = obj;
            act = 1;
            clrOrg = objActive.style.color;
            TimerID = setInterval("ChangeColor()",100);
        }
    }
}


//  This function stops to change a color. (of a anchor, automatically)

function stopRainbowAnchor()
{
    if (act) {
        if (objActive.tagName == 'A') {
            objActive.style.color = clrOrg;
            clearInterval(TimerID);
            act = 0;
        }
    }
}


//  This function begins to change a color. (of a anchor, automatically)

function Mozilla_doRainbowAnchor(e)
{
    if (act == 0) {
        obj = e.target;
        while (obj.nodeName != 'A' && obj.nodeName != 'BODY') {
            obj = obj.parentNode;
            if (obj.nodeName == 'A' || obj.nodeName == 'BODY')
                break;
        }

        if (obj.nodeName == 'A' && obj.href != '') {
            objActive = obj;
            act = 1;
            clrOrg = obj.style.color;
            TimerID = setInterval("ChangeColor()",100);
        }
    }
}


//  This function stops to change a color. (of a anchor, automatically)

function Mozilla_stopRainbowAnchor(e)
{
    if (act) {
        if (objActive.nodeName == 'A') {
            objActive.style.color = clrOrg;
            clearInterval(TimerID);
            act = 0;
        }
    }
}


//  This function changes a color actually.

function ChangeColor()
{
    objActive.style.color = makeColor();
}


//  This function makes rainbow colors.

function makeColor()
{
    // Don't you think Color Gamut to look like Rainbow?

    // HSVtoRGB
    if (elmS == 0) {
        elmR = elmV;    elmG = elmV;    elmB = elmV;
    }
    else {
        t1 = elmV;
        t2 = (255 - elmS) * elmV / 255;
        t3 = elmH % 60;
        t3 = (t1 - t2) * t3 / 60;

        if (elmH < 60) {
            elmR = t1;  elmB = t2;  elmG = t2 + t3;
        }
        else if (elmH < 120) {
            elmG = t1;  elmB = t2;  elmR = t1 - t3;
        }
        else if (elmH < 180) {
            elmG = t1;  elmR = t2;  elmB = t2 + t3;
        }
        else if (elmH < 240) {
            elmB = t1;  elmR = t2;  elmG = t1 - t3;
        }
        else if (elmH < 300) {
            elmB = t1;  elmG = t2;  elmR = t2 + t3;
        }
        else if (elmH < 360) {
            elmR = t1;  elmG = t2;  elmB = t1 - t3;
        }
        else {
            elmR = 0;   elmG = 0;   elmB = 0;
        }
    }

    elmR = Math.floor(elmR).toString(16);
    elmG = Math.floor(elmG).toString(16);
    elmB = Math.floor(elmB).toString(16);
    if (elmR.length == 1)    elmR = "0" + elmR;
    if (elmG.length == 1)    elmG = "0" + elmG;
    if (elmB.length == 1)    elmB = "0" + elmB;

    elmH = elmH + rate;
    if (elmH >= 360)
        elmH = 0;

    return '#' + elmR + elmG + elmB;
}
