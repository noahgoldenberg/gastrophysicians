//©Xara Ltd
if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML;var ml=tt.match(/["']([^'"]*)main_vnavbar.js["']/i);if(ml && ml.length > 1) loc=ml[1];}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".main_vnavbar_menu {z-index:999;border-color:#000000;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#3656cf;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".main_vnavbar_plain, a.main_vnavbar_plain:link, a.main_vnavbar_plain:visited{text-align:left;background-color:#3656cf;color:#ffffff;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:4px 0px 4px 0px;cursor:hand;display:block;font-size:9pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("a.main_vnavbar_plain:hover, a.main_vnavbar_plain:active{background-color:#9aaae7;color:#000000;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:4px 0px 4px 0px;cursor:hand;display:block;font-size:9pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0x9aaae7;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("",0,0,1,4,0)
mainMenuItem("main_vnavbar_b1",".gif",20,138,loc+"../"+"index.html","","Home",2,2,"main_vnavbar_plain");
mainMenuItem("main_vnavbar_b2",".gif",20,138,"javascript:;","","Our Physicians",1,2,"main_vnavbar_plain");
mainMenuItem("main_vnavbar_b3",".gif",20,138,loc+"../"+"office.html","","Office Information",2,2,"main_vnavbar_plain");
mainMenuItem("main_vnavbar_b4",".gif",20,138,loc+"../"+"link.html","","Helpful Links",2,2,"main_vnavbar_plain");
mainMenuItem("main_vnavbar_b5",".gif",20,138,loc+"../"+"forms.html","","Patient Forms",1,2,"main_vnavbar_plain");
endMainMenu("",0,0);

startSubmenu("main_vnavbar_b5","main_vnavbar_menu",204);
submenuItem("Patient Information Form",loc+"../"+"forms/Patient Info Sheet.pdf","_blank","main_vnavbar_plain");
submenuItem("Medical Information Form",loc+"../"+"forms/Patient History Form.pdf","_blank","main_vnavbar_plain");
submenuItem("---","javascript:;","","main_vnavbar_plain");
submenuItem("Colonoscopy Prep for Muhlenberg",loc+"../"+"forms/Colonoscopy Muhlenberg.pdf","_blank","main_vnavbar_plain");
submenuItem("Colonoscopy Prep for Surgicare",loc+"../"+"forms/Colonoscopy Surgicare.pdf","_blank","main_vnavbar_plain");
submenuItem("---","javascript:;","","main_vnavbar_plain");
submenuItem("Capsule Enteroscopy Instructions ",loc+"../"+"forms/Capsule-endoscopy.pdf","_blank","main_vnavbar_plain");
submenuItem("---","javascript:;","","main_vnavbar_plain");
submenuItem("Half Lytely Instructions ",loc+"../"+"forms/HalfLytely.pdf","_blank","main_vnavbar_plain");
submenuItem("---","javascript:;","","main_vnavbar_plain");
submenuItem("Help with our forms",loc+"../"+"forms.html","","main_vnavbar_plain");
endSubmenu("main_vnavbar_b5");

startSubmenu("main_vnavbar_b2","main_vnavbar_menu",149);
submenuItem("Allan B. Cohen, MD",loc+"../"+"cohen.html","","main_vnavbar_plain");
submenuItem("David A. Goldenberg, MD",loc+"../"+"goldenberg.html","","main_vnavbar_plain");
// 011906 submenuItem("Brian Katz, MD",loc+"../"+"katz.html","","main_vnavbar_plain");
endSubmenu("main_vnavbar_b2");

loc="";
