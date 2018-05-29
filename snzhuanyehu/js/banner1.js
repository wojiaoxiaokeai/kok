var img1=$('.banner3').find('ul');
var next1=$('.right');
var prev1=$('.left');
var index1=0;
var ban=$('.banner3');
var shuliang1=img1.find('li').length;
var z='none';
function move1(b) {
	img1.find('li').eq(b).fadeIn(1000).siblings().css('display','none');
}
next1.click(function() {
	if (index1<shuliang1-1) {
		index1++;
	}else{
		index1=0;
	}
	move1(index1);
});
prev1.click(function() {
	if (index1<0) {
		index1=3;
	}else{
		index1--;
	}
	move1(index1);
});
ban.mouseout(function() {
	z=setInterval('next1.click()',3000);
});
ban.mouseover(function() {
	clearInterval(z);
});
ban.mouseout();

