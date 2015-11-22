//©Xara Ltd
if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML;var ml=tt.match(/["']([^'"]*)main_hnavbar.js["']/i);if(ml && ml.length > 1) loc=ml[1];}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".main_hnavbar_menu {z-index:999;border-color:#000000;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#154777;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".main_hnavbar_plain, a.main_hnavbar_plain:link, a.main_hnavbar_plain:visited{text-align:left;background-color:#154777;color:#ffffff;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:9pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("a.main_hnavbar_plain:hover, a.main_hnavbar_plain:active{background-color:#2a8eee;color:#000000;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:9pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0x2a8eee;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("",0,0,2,0,0)
mainMenuItem("main_hnavbar_b1",".gif",20,129,loc+"../"+"index.html","","Our home page",2,2,"main_hnavbar_plain");
mainMenuItem("main_hnavbar_b2",".gif",20,129,loc+"../"+"office.html","","Information about our office",2,2,"main_hnavbar_plain");
mainMenuItem("main_hnavbar_b3",".gif",20,129,loc+"../"+"link.html","","Links to other helpful internet websites",2,2,"main_hnavbar_plain");
mainMenuItem("main_hnavbar_b4",".gif",20,129,loc+"../"+"forms.html","","Print our patient forms prior to you visit",2,2,"main_hnavbar_plain");
endMainMenu("",0,0);

startSubmenu("main_hnavbar_b4","main_hnavbar_menu",236);
submenuItem("Patient Information Form",loc+"../"+"forms/patient info sheet.pdf","_blank","main_hnavbar_plain");
submenuItem("Patient History Form",loc+"../"+"forms/patient history form.pdf","_blank","main_hnavbar_plain");
submenuItem("---","javascript:;","","main_hnavbar_plain");
submenuItem("Colonoscopy Prep Form for Muhlenberg",loc+"../"+"forms/Colonoscopy Muhlenberg.pdf","_blank","main_hnavbar_plain");
submenuItem("Colonoscopy Prep Form for Surgicare",loc+"../"+"forms/Colonoscopy Surgicare.pdf","_blank","main_hnavbar_plain");
submenuItem("---","javascript:;","","main_hnavbar_plain");
submenuItem("Help with our forms",loc+"../"+"forms.html","","main_hnavbar_plain");
endSubmenu("main_hnavbar_b4");

loc="";
