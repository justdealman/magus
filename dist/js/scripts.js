$(function() {
	var prevArrow = '<span class="arrow-prev">' +
			'<svg>' +
        		'<use xlink:href="./img/sprite.svg#arrow-prev"></use>' +
        	'</svg>' +
		'</span>';

	var nextArrow = '<span class="arrow-next">' +
			'<svg>' +
        		'<use xlink:href="./img/sprite.svg#arrow-next"></use>' +
        	'</svg>' +
		'</span>';

	$('.intro').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
        dots: true,
		cssEase: 'ease',
		speed: 750,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000
	});

	$('.js-catalog').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        dots: false,
		cssEase: 'ease',
		speed: 500,
		adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1359,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
	});

	$('.js-special').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        dots: true,
		cssEase: 'ease',
		speed: 500,
		adaptiveHeight: true,
        responsive: [
 			{
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
	});

	$('.js-reviews').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        dots: false,
		cssEase: 'ease',
		speed: 500,
		adaptiveHeight: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 639,
                slidesToShow: 2,
                slidesToScroll: 2,
    		}, {
				breakpoint: 991,
				settings: 'unslick'
    		}
    	]
	});

	svg4everybody();

	$('.js-about-more').on('click', function() {
		var content = $(this).parents('.about').find('.about-content');
		content.addClass('show-all');
		$(this).remove();
	});
	
	function closeAll() {
		if ( $('.header__login').hasClass('is-active') ) {
			closeUser();
		}
		if ( $('[data-target].is-opened').length ) {
			modalsClose();
		}
		if ( $('[data-order-id].is-opened').length ) {
			ordersClose();
		}
	}
		
	function modalOpen(t) {
		closeAll();
		var modal = $('[data-target="'+t+'"]');
		centerModal(modal);
		modal.addClass('is-opened');
		$('.fade-bg').addClass('is-opened');
	}
	
	function centerModal(t) {
		var h = $(window).scrollTop()+($(window).height()-t.outerHeight())/2;
		var diff = 30;
		if ( h < $(window).scrollTop()+(diff*2) ) {
			h = $(window).scrollTop()+diff;
		}
		t.css({
			'top': h+'px'
		});
	}
	
	function modalsClose() {
		$('[data-target], .fade-bg').removeClass('is-opened');
	}
	
	$('[data-open]').on('click', function(e) {
		e.preventDefault();
		var id = $(this).attr('data-open');
		modalOpen(id);
		$(this).addClass('is-active');
	});
	
	$('.fade-bg, .modal__close').on('click', function(e) {
		e.preventDefault();
		modalsClose();
	});

	function openNav() {
        $('.nav').addClass('is-opened');
        $('.nav__open').addClass('is-active');
	}

	function closeNav() {
        $('.nav').removeClass('is-opened');
        $('.nav__open').removeClass('is-active');
	}

	$('.nav__open').on('click', function() {
		if ( !$(this).hasClass('is-active') ) {
			openNav();
		} else {
			closeNav();
		}
	});

	$('.gender-s__item').on('click', function() {
	   $(this).addClass('is-active').siblings().removeClass('is-active');
    });

	$('.rating-e_set').on('mouseover', function(e) {
	    var current = $(e.target).index()+1;
        var stars = $(this).find('span');
        stars.removeClass('is-active');
	    for ( var i=0; i<current; i++ ) {
            stars.eq(i).addClass('is-active');
        }
    });

    $('.rating-e_set').on('click', function(e) {
        var value = $(e.target).index()+1;
        $(this).attr('data-rating', value);
    });

    $('.rating-e_set').on('mouseleave', function(e) {
        var value = $(this).attr('data-rating');
        var stars = $(this).find('span');
        stars.removeClass('is-active');
        for ( var i=0; i<value; i++ ) {
            stars.eq(i).addClass('is-active');
        }
    });

    $('.js-vacancy-more').on('click', function() {
    	var content = $(this).parents('.vacancy-b__col').find('.vacancy-b-details');
    	if ( !$(this).hasClass('is-active') ) {
            content.addClass('is-visible');
    		$(this).addClass('is-active').text('Свернуть');
		} else {
            content.removeClass('is-visible');
            $(this).addClass('is-active').text('Показать еще');
		}
	})
});