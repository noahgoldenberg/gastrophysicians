function alert()
{alert ("ALERT ALERT")
}


function redir()
{
	location = 'http://www.gastrophysicians.com';
}

function scrollnews(cliptop) 
{



var blank = "http://www.your-web-site-address-here.com/blank.gif";

topedge = 190;  // location of news box from top of page
leftedge = 350;  // location of news box from left edge
boxheight = 50;  // height of news box
boxwidth = 20;  // width of news box
scrollheight = 240; // total height of all data to be scrolled

if (document.layers) {
newsDiv = document.news;
newsDiv.clip.top = cliptop;
newsDiv.clip.bottom = cliptop + boxheight;
newsDiv.clip.left = 0;
newsDiv.clip.right = boxwidth + leftedge;
newsDiv.left = leftedge;
newsDiv.top = topedge - cliptop;
}
else {
newsDiv = news.style;
newsDiv.clip = "rect(" + cliptop + "px " + (boxwidth + leftedge) + "px " + (cliptop + boxheight) + "px 0px)";
newsDiv.pixelLeft = leftedge;
newsDiv.pixelTop = topedge - cliptop;
}
cliptop = (cliptop + 1) % (scrollheight + boxheight);
newsDiv.visibility='visible';
setTimeout("scrollnews(" + cliptop + ")", 150);
}

function gggover()
	{document.ggg.src='images/ggggray.gif'}

function gggback()
	{document.ggg.src='images/gggred.gif'}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

