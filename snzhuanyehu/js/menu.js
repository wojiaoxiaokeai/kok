var menu=$('.menu');
var menuXl=$('#no');
menu.click(function() {
	if (menuXl.hasClass('bloc')) {
		menuXl.removeClass('bloc');
	}else{
		menuXl.addClass('bloc');
	}
});
menuXl.click(function() {
	menuXl.removeClass('bloc');
});