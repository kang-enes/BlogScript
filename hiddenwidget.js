// ----------------------------------------
// HIDDEN WIDGET
// ----------------------------------------
//
// Date:    07-01-2010
// Author:  Kang eNeS
// URL:     ruangsc.blogspot.com
// ----------------------------------------

var gb_obj = document.getElementById("hidden_gb");
var gb_finish = false;

function gb_setInitBehaviour(){
    gb_obj.isHidden = true;
    gb_setOpacity(gb_obj, "0.01");
}
function gb_setOpacity(obj, opacity){
    opacity = opacity.substr(0, 4);
    obj.style.opacity = opacity;
    obj.style.filter = "alpha(opacity="+(Math.floor(parseFloat(opacity)*100)).toString()+")";
    //writex(opacity);
}
function gb_showGB(){
    gb_obj.style.display = "block";
    gb_changeOpacityTo(1, "");
    gb_obj.isHidden = false;
}
function gb_hideGB(){
    gb_changeOpacityTo(0.01, "gb_obj.style.display = \"none\"");
    gb_obj.isHidden = true;
}
function gb_changeOpacityTo(fin, funcStr){
    var init = parseFloat(gb_obj.style.opacity.substr(0, 4));
    var d = init <= 0.2 ? 0.04 : init <= 0.6 ? 0.08 : 0.20;
    var m = fin>init ? 1 : -1;
    var opacity = init + d * m;
    if((fin-opacity)*(fin-init)<0){opacity = fin;}
    gb_setOpacity(gb_obj, opacity.toString());
    if(opacity != fin){setTimeout("gb_changeOpacityTo("+fin.toString()+", '"+funcStr+"')", 50);}
    else{eval(funcStr);}
}
function gb_showHideGB(){
    if(gb_obj.isHidden){gb_showGB();}
    else{gb_hideGB();}
}
function writex(str){
    document.getElementById("wx").innerHTML += str + " ";
}
gb_setInitBehaviour();
document.write('<div style="float:left;"><a href="javascript:void(0)" onclick="gb_showHideGB()"><img style="float:left; border:0px;" src="http://i563.photobucket.com/albums/ss76/peace_enes/SC/close.gif" title="Close/Tutup" /></a></div>');
document.write('<div style="font-family:Arial; font-size:8pt; float:left; padding-left:5px;  margin-top:15px;"><a href="http://ruangsc.blogspot.com/2010/03/membuat-hidden-widget-buku-tamu-widget.html" target="_blank" title="Cara membuat Hidden Widget">Widget by SC Community</a></div>');
