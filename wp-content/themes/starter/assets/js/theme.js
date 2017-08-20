var $ = jQuery.noConflict();

/*  ============================================
  Superfish Drop Down Menu Init
  ============================================ */
  var mainNav = $('#primary-menu').superfish({
    popUpSelector: 'ul, .sf-mega',
    speed: 'normal',
    speedOut: 'normal',
    cssArrows: false,
    animation: {opacity:'show'}
  });


/* ============================================
  Off-Canvas menu
  ============================================ */
  $('#offcanv_menu').offCanvasMenu();

/* ============================================
  Colour Box Init
  ============================================ */
	/*$(function(){
		$('a.colorbox').colorbox({
			'maxWidth'    : '98%',
			'width'       : function() { return ($(window).width() < '767') ? '85%' : false; },
			'inline'      : function() { return $(this).hasClass('inline'); }, // You can make specific popups open in inline mode by applying a class to the link.
			'href'        : function() { return ($(this).attr('data-href')) ? $(this).data('href') : $(this).attr('href'); }, // You can set an alternate href by using the 'data-href' attribute.
			'innerWidth'  : function() { return ($(this).hasClass('video')) ? '800px' : false; },
			'innerHeight' : function() { return ($(this).hasClass('video')) ? '600px' : false; },
			'returnFocus' : false // Fixes a conflict with flexslider
		});
	});*/


/* ============================================
  Smoothly Scroll to a point.
  ============================================ */
	$(function() {
		$('.scroll_to').click(function () {
			$('html,body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
			return false;
		});
	});


/* ============================================
	Banner Init - Slick Slider
	============================================ */
	$(window).load(function() {
		$('[data-slider]').slick({
			infinite: true,
			dots: true,
			slidesToShow: 1,
			speed: 400,
			autoplay: true,
		  autoplaySpeed: 5000,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: "<span class='slicknav prev-arrow'></span>",
			nextArrow: "<span class='slicknav next-arrow'></span>",
			touchMove: false,
			swipe: false,
			responsive: [
				{
				  breakpoint: 767,
				  settings: {
				  	swipe: true,
				    touchMove: true,
				  }
				}
			]
		});
	});


/* 	============================================
	Fancy inputs
	============================================ */

	/*
	$(function() {
		var input_selector = '.form_input_wrap.fancy input[type=text], .form_input_wrap.fancy input[type=email], .form_input_wrap.fancy input[type=password], .form_input_wrap.fancy textarea';
		var textarea_height = '100px';
		var textarea_original = '50px';

		$(input_selector).not('[placeholder]').each(function () {
			var this_input = $(this);
			var this_label = this_input.prev('label');

			if (this_label.length > 0) {
				var this_label_text = this_label.text();
				this_input.attr('placeholder', this_label_text);
			}
		});

		$(document).on('focus', input_selector, function (e) {
			var this_input = $(this);

			this_input.closest('.form_input_wrap.fancy').addClass('focused');

			if (this_input.attr('placeholder') != '') {
				this_input.data('placeholder-text', this_input.attr('placeholder')).attr('placeholder', '');
			}

			if (this_input.is("textarea") && this_input.closest('.form_input_wrap.fancy').hasClass('prefilled-shrink')) {
				this_input.animate({height: '150px'}, 500);
			}
		});

		$(document).on('blur', input_selector, function (e) {
			var this_input = $(this);

			if (this_input.data('placeholder-text') != '' && this_input.val() == '') {
				this_input.closest('.form_input_wrap.fancy').removeClass('focused');
				this_input.attr('placeholder', this_input.data('placeholder-text')).data('placeholder-text', '');
			}

			if (this_input.is("textarea") && this_input.closest('.form_input_wrap.fancy').hasClass('prefilled-shrink')) {
				this_input.animate({height: '50px'}, 500);
			}
		});


		function init() {
			$(input_selector).each(function () {
				var this_input = $(this);
				if (this_input.val() != '')
					this_input.parent('.form_input_wrap.fancy').addClass('focused');
			});
		}

		init();
	});
	*/


/*  ============================================
  	Custom Select boxes
  	============================================ */

	/*
	$(document).ready(function () {

		// Find all the select boxes and wrap them up.
		$('select:not([multiple])').each(function () {
			var current_select = $(this);

			// Check if already wrapped.
			if (!current_select.closest(".custom_select").length) {
				$(this).wrap("<div class='custom_select'></div>");
			}
		});

		// Do the magic on all the wrapped selects.
		$('.custom_select select').each(function () {
			var title = "-- Select an Option --";

			if ($('option:selected', this).val() != '') {
				title = $('option:selected', this).text();
			} else {
				title = $('option:first-child', this).text();
			}

			$(this)
				.css({'z-index': 10, 'opacity': 0, '-khtml-appearance': 'none'})
				.after('<span>' + title + '</span>')
				.change(function () {
					val = $('option:selected', this).text();
					$(this).next().text(val);
				});
		});
	});
	*/
