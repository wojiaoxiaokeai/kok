// JavaScript Document
function $(id){
	return document.getElementById(id);
}
var topn_z_x=$('topn_z_x');
var application=$('application');
application.onclick=function(){
	if(topn_z_x.currentStyle) {
     	var dpy = topn_z_x.currentStyle['display'];  //IE下获取
	} else if(window.getComputedStyle) {
    	var dpy = window.getComputedStyle(topn_z_x , null)['display']; //chrome下
	}
	//document.write(dpy);
	if(dpy=='block'){
		topn_z_x.style.display='none';
	}else{
		topn_z_x.style.display='block';
	}
	window.event? window.event.cancelBubble = true : application.stopPropagation(); //chrome阻止冒泡
	var evt = application ? application:window.event; //IE下阻止事件冒泡
	//阻止冒泡，就是不让该元素点击时父级的元素生效，只让该元素事件生效。阻止事件向父级延伸。
}
document.onclick=function(){
	topn_z_x.style.display='none';
}


//轮播图部分


var dqjl=0; //当前所在距离
var dmax=0;
var dqwz=0;
function lun(g){
	var a=$('lunbo');
	dqwz=Math.abs(dmax/304); //当前位置
	dqjl=dqwz*(-304); //当前距离
	dmax=g*(-304); //要跳转的距离
	if(g > dqwz){
	    timer=setInterval(function(){
	        if(dqjl > dmax){
	        	dqjl=dqjl-4;
	        	a.style.left=dqjl+"px";
	        }else{
	        	clearInterval(timer);
	        	dqjl=dmax; //让当前距离获得当前的距离
	        	if(dqjl== -1520){
	        		lunbowen.innerHTML=lunbotext[0];
	        	 	dmax=0;
	        	 	dqjl=0;
	        	 	dqwz=0;
	        	 	automatic=0;
	        	 	lunboans[0].className='lunboan2';
	        	 	a.style.left=0+"px";
	        	}

	        }
	    },10);
	}else{
		timer=setInterval(function(){
		    if(dqjl < dmax){
		    	dqjl=dqjl+4;
		    	a.style.left=dqjl+"px";
		    }else{
		    	clearInterval(timer);
		    	dqjl=dmax; //让当前距离获得当前的距离
		    }
		},10);
	}
}

	//轮播图按钮切换样式
var lunboans=$('lunboan').getElementsByTagName('li');
function ans(k){
    for(var i=0;i<lunboans.length;i++){
        lunboans[i].className='lunboan1';
    }
    lunboans[k].className='lunboan2';
}

	//轮播图文本变字
var lunbowen=$('lunbowen');
var lunbotext=new Array("芝麻为什么不能联查种植？","做一个会喝茶的中国人","回农村创业下面6个点子","全国最美丽休闲乡村","非法猎捕现象反弹","芝麻为什么不能联查种植？");


	//轮播图按钮切换程序
for(var i=0;i<lunboans.length;i++){
    lunboans[i].index=i;
    lunboans[i].onclick=function(){
     	var k=this.index; //按钮当前值传给k
     	lun(k);
     	ans(k);
     	automatic=k;
     	lunbowen.innerHTML=lunbotext[k];
    }
}

	//轮播图自动切换程序
var automatic=0; //计数从0开始
var timer2=null;
var lunFather=$('lunFather');
lunFather.onmouseout=function(){
    timer2=setInterval(function(){
    	automatic++;
    	lun(automatic);
    	ans(automatic);
    	lunbowen.innerHTML=lunbotext[automatic];
  	},3000);
}
lunFather.onmouseover=function(){
    clearInterval(timer2);
}
lunFather.onmouseout();