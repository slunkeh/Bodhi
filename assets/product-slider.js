$(function() {
	var slider = $(".product-slider"),
		slides = slider.find('li'),
		nav = slider.find('nav');

	slides.eq(0).addClass('product-current');

	nav.children('a').eq(0).addClass('product-current_dot');

	nav.on('click', 'a', function(event) {
		event.preventDefault();
		$(this).addClass('product-current_dot').siblings().removeClass('product-current_dot');
		slides.eq($(this).index()).addClass('product-current').removeClass('prev').siblings().removeClass('product-current');
		slides.eq($(this).index()).prevAll().addClass('prev');
		slides.eq($(this).index()).nextAll().removeClass('prev');
	});
});
