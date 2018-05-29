var img2=$('.img').find('ul');
var next2=$('.zj_ri');
var prev2=$('.zj_lf');
var index2=0;
var banner2=$('.img');
var shuliang2=img2.find('li').length;
var js=$('.Introduction').find('div');
var zd1='none';
function move2(a) {
	img2.find('li').eq(a).fadeIn(1000).siblings().css('display','none');
	js.eq(a).fadeIn(1000).siblings().css('display','none');
}
next2.click(function() {
	if (index2<shuliang2-1) {
		index2++;
	}else{
		index2=0;
	}
	move2(index2);
});
prev2.click(function() {
	
	if (index2<=0) {
		index2=2;
	}else{
		index2--;
	}
	move2(index2);
});