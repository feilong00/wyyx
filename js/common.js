//样式获取函数
function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}
//运动函数
function startMove(obj, json, fnEnd,time)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//假设：所有值都已经到了

		for(var attr in json)
		{
			var cur=0;

			if(attr=='opacity')
			{
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				cur=parseInt(getStyle(obj, attr));
			}

			var speed=(json[attr]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);

			if(cur!=json[attr])
				bStop=false;

			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
		}

		if(bStop)
		{
			clearInterval(obj.timer);

			if(fnEnd)fnEnd();
		}
	}, time);
}
//        鼠标滚动事件
var oHeader2=document.getElementById("header2");
var oSidebar=document.getElementById("side_bar");
var oSidebarTop=oSidebar.offsetTop;
if (document.documentElement.scrollTop>176) {
	oHeader2.style.top='0';
}
if (document.documentElement.scrollTop>oSidebarTop) {
	oSidebar.style.top='65px';
}
window.onscroll=function(){
	if(document.documentElement.scrollTop>176) {
		startMove(oHeader2,{top:0},function(){},10);
	}
	if(document.documentElement.scrollTop<176) {
		oHeader2.style.top='-50px';
	}
	if(document.documentElement.scrollTop>oSidebarTop) {
		oSidebar.style.position='fixed';
		oSidebar.style.top='65px';
	}
	if(document.documentElement.scrollTop<oSidebarTop) {
		oSidebar.style.position='absolute';
		oSidebar.style.top=oSidebarTop+'px';
	}
}
//        登录框事件
var oRlb=document.getElementById("rlb");
var oRlc=document.getElementById("rlc");
var oRlcClose=document.getElementById("rlc_close");
oRlb.onclick=function(){
	oRlc.style.display='block';
}
oRlcClose.onclick=function(){
	oRlc.style.display='none';
}