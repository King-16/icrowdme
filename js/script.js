$(window).scroll(function () {
	$('.mov').each(function () {
		var imagePos = $(this).offset().top;
		var top0Window = $(window).scrollTop();
		if(imagePos < top0Window+400){
			$(this).addClass('wobble')
		}
	});
});


$(window).scroll(function () {
	$('.riul').each(function () {
		var imagePos = $(this).offset().top;
		var top0Window = $(window).scrollTop();
		if(imagePos < top0Window+400){
			$(this).addClass('rotateInUpLeft')
		}
	});
});

$(window).scroll(function () {
	$('.lsi').each(function () {
		var imagePos = $(this).offset().top;
		var top0Window = $(window).scrollTop();
		if(imagePos < top0Window+400){
			$(this).addClass('lightSpeedIn')
		}
	});
});

$(window).scroll(function () {
	$('.zin').each(function () {
		var imagePos = $(this).offset().top;
		var top0Window = $(window).scrollTop();
		if(imagePos < top0Window+400){
			$(this).addClass('zoomIn')
		}
	});
});

$(window).scroll(function () {
	$('.bir').each(function () {
		var imagePos = $(this).offset().top;
		var top0Window = $(window).scrollTop();
		if(imagePos < top0Window+400){
			$(this).addClass('bounceInRight')
		}
	});
});

$(window).scroll(function () {
	$('.bil').each(function () {
		var imagePos = $(this).offset().top;
		var top0Window = $(window).scrollTop();
		if(imagePos < top0Window+400){
			$(this).addClass('bounceInLeft')
		}
	});
});

$(window).scroll(function () {
	$('.jitb').each(function () {
		var imagePos = $(this).offset().top;
		var top0Window = $(window).scrollTop();
		if(imagePos < top0Window+400){
			$(this).addClass('jackInTheBox')
		}
	});
});

$(window).scroll(function () {
	$('.rub').each(function () {
		var imagePos = $(this).offset().top;
		var top0Window = $(window).scrollTop();
		if(imagePos < top0Window+400){
			$(this).addClass('rubberBand')
		}
	});
});

$(window).scroll(function () {
	$('.sh').each(function () {
		var imagePos = $(this).offset().top;
		var top0Window = $(window).scrollTop();
		if(imagePos < top0Window+200){
			$(this).addClass('bounce')
		}
	});
});