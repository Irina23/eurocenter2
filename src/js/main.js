
if ($.browser.mobile) $('body').addClass('mobile');
if ($.browser.safari) $('body').addClass('safari');
if ($.browser.iphone || $.browser.ipad || $.browser.ipod ) $('body').addClass('ios');

$(document).ready( function () {
	$("form").validate();
	//slider home
	$('.slider_home .owl-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		nav:true,
		navText: "",
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});



	$(".select_toggle").on('click', function () {
		$(this).parent().parent().toggleClass('open');
	});
});

