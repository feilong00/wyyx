var tabItem=document.getElementsByClassName("tabItem");
var mainCon=document.getElementsByClassName("mainCon");
var side=document.getElementsByClassName("side");

for(var i=0;i<tabItem.length;i++){
    (function(i){
        tabItem[i].onclick=function () {
            for(var j=0;j<tabItem.length;j++){
                tabItem[j].className='tabItem';
                mainCon[j].className='mainCon';
                side[j].className='side';
            }
            this.className='tabItem active';
            mainCon[i].className='mainCon block';
            side[i].className='side block';
        }
        var flag=1;
        side[i].onclick=function () {
            for(var j=0;j<tabItem.length;j++){
                side[j].style.right='-320px';
            }
            if(flag==1){
                this.style.right='0px';
                flag=2;
            }else{
                this.style.right='-320px';
                flag=1;
            }
            console.log(flag);
        }
    })(i);
}

var slickBox=document.getElementsByClassName("slickBox")[0];
var slickTrack=document.getElementsByClassName("slickTrack")[0];
var prevArrow=document.getElementsByClassName("prevArrow")[0];
var nextArrow=document.getElementsByClassName("nextArrow")[0];

slickBox.onmouseover=function () {
    prevArrow.style.display='block';
    nextArrow.style.display='block';
}
slickBox.onmouseleave=function () {
    prevArrow.style.display='none';
    nextArrow.style.display='none';
}
var height=-362;
var addHeight=181;
var minHeight=-181;
prevArrow.onclick=function () {
    if(slickTrack.style.transform=='translateY(181px)'){
        slickTrack.style.transform='translateY(-905px)';
    }else{
        height+=addHeight;
        slickTrack.style.transform='translateY('+(height)+'px)';
    }
}
nextArrow.onclick=function () {
    if(slickTrack.style.transform=='translateY(-905px)'){
        slickTrack.style.transform='translateY(181px)';
    }else{
        height+=minHeight;
        slickTrack.style.transform='translateY('+(height)+'px)';
    }
}