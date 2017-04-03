'use strict';

$(()=>{
	$('.select').selectbox();
	$('.main_slider').slick();
	$('.card_gal').slick();

	$('select').selectbox();
});


$(()=>{ //mob_menu
	$('.mob_menu__switch').on('click', ()=>{
		$('.mob_menu__wrap').addClass('active');
		$('.mob_menu__overlay').addClass('active');
		$('.main_wrap').addClass('active');
	});

	$('.mob_menu__overlay').on('click', ()=>{
		$('.mob_menu__wrap').removeClass('active');
		$('.mob_menu__overlay').removeClass('active');
		$('.main_wrap').removeClass('active');
	});

	$(window).scroll(()=>{
		$('.mob_menu__wrap').removeClass('active');
		$('.mob_menu__overlay').removeClass('active');
		$('.main_wrap').removeClass('active');
	})
});
