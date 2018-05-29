var img=$('.banner1').find('ul');
var next=$('.next');
var prev=$('.prev');
var index=0;
var banner=$('.banner1');
var shuliang=img.find('li').length;
var zd='none';
function move(a) {
	img.find('li').eq(a).fadeIn(1000).siblings().css('display','none');
}
next.click(function() {
	if (index<shuliang-1) {
		index++;
	}else{
		index=0;
	}
	move(index);
});
prev.click(function() {
	if (index<0) {
		index=3;
	}else{
		index--;
	}
	move(index);
});
banner.mouseout(function() {
	zd=setInterval('next.click()',5000);
});
banner.mouseover(function() {
	clearInterval(zd);
});
banner.mouseout();
