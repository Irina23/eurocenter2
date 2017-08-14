
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
	$(".lang").on('click', function () {
		$(this).toggleClass('open');
	});
	$(".long_link, header .menu-icon").on('click', function () {
		$(this).parent().toggleClass('open');
	});

	//modal form
	var overlay = $('#overlay');
	var open_modal = $('.open_modal');
	var close = $('.modal_close, #overlay');
	var modal = $('.modal_div');

	if($(modal).hasClass('show')){

			overlay.addClass('show').fadeIn(100,
				function(){
					$(modal)
						.css('display', 'block')
						.animate({opacity: 1, top: '50%'}, 100);
					$('body').addClass('no-scroll');
				});
	}

	open_modal.click( function(event){
		event.preventDefault();
		var div = $(this).attr('href');
		overlay.fadeIn(100,
			function(){
				$(div)
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 100);
				$('body').addClass('no-scroll');
			});
	});

	close.click( function(){
		modal
			.animate({opacity: 0, top: '45%'}, 100,
				function(){
					$(this).css('display', 'none');
					overlay.fadeOut(100);
					$(".message_modal").removeClass("show");
					$('body').removeClass('no-scroll');
				}
			);
	});


	$(this).keydown(function(eventObject){
		if (eventObject.which == 27)
			modal.animate({opacity: 0}, 200,
				function(){
					$(this).css('display', 'none');
					overlay.fadeOut(400);
					$(".message_modal").removeClass('show');
					$('body').removeClass('no-scroll');

				}
			);
	});

});

