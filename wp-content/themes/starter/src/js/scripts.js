/* 	============================================
	Colour Box Init
	============================================ */
	jQuery(function($){
		// colorbox
		$('a.colorbox').colorbox({
			'maxWidth'    : '98%',
			'width'       : function() { return ($(window).width() < '767') ? '85%' : false; },
			'inline'      : function() { return $(this).hasClass('inline'); }, // You can make specific popups open in inline mode by applying a class to the link.
			'href'        : function() { return ($(this).attr('data-href')) ? $(this).data('href') : $(this).attr('href'); }, // You can set an alternate href by using the 'data-href' attribute.
			'innerWidth'  : function() { return ($(this).hasClass('video')) ? '800px' : false; },
			'innerHeight' : function() { return ($(this).hasClass('video')) ? '600px' : false; },
			'returnFocus' : false // Fixes a conflict with flexslider
		});
	});


/*  ============================================
	Smoothly Scroll to a point.
	============================================ */
	jQuery(function($) {
		$('.scroll_to').click(function () {
			$('html,body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
			return false;
		});
	});


/* 	============================================
	bPopup Init - http://dinbror.dk/bpopup/ for more Information
	============================================ */

	jQuery(document).on('click', '.bPopup', '', function($) {
		$('[data-js=js_bPopup]').bPopup({
			transition: 'slideDown',
			closeClass:'close_js'
		});
		return false;
	});


/* 	============================================
 Qtip
 ============================================ */
	jQuery(function($){
		if($(window).width() > '767') {
			$('.qtip_tooltip').qtip({ // Grab some elements to apply the tooltip to
			    content: {
			        attr: 'data-tooltip'
			    },
		      	style: {
	        		classes: 'default_qtip qtip-shadow',
	        		tip: {
	        			width: 11,
			            height: 7,
			            offset: 1
	        		},
	        	},
	        	 position: {
	        		my: 'left center',
	        		at: 'right center'
	    		},
			});
		}
	});


/* 	============================================
	Banner Init - Slick Slider
	============================================ */
	jQuery(window).load(function() {
		jQuery('.slickslider_banner').slick({
			infinite: true,
			dots: true,
			slidesToShow: 1,
			speed: 400,
			autoplay: true,
		  autoplaySpeed: 5000,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: "<span class='slicknav prev_arrow'></span>",
			nextArrow: "<span class='slicknav next_arrow'></span>",
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
	Product image slider
	============================================ */


	jQuery(window).load(function() {
		jQuery('.slickslider_gallery').slick({
			infinite: true,
			slidesToShow: 1,
			asNavFor: '.slickslider_gallery_thumbs',
			speed: 400,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: "<span class='slicknav prev_arrow'></span>",
			nextArrow: "<span class='slicknav next_arrow'></span>",
			touchMove: false,
			adaptiveHeight: true,
			swipe: false,
			lazyLoad: 'progressive',
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

		jQuery('.slickslider_gallery_thumbs').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slickslider_gallery',
			focusOnSelect: true,
			infinite: true,
			speed: 400,
			arrows: false,
			prevArrow: "<span class='slicknav prev_arrow'></span>",
			nextArrow: "<span class='slicknav next_arrow'></span>",
			touchMove: false,
			swipe: false,
			centerMode: true,
			lazyLoad: 'progressive',
			responsive: [
				{
				  breakpoint: 1023,
				  settings: {
				  	swipe: true,
				    touchMove: true,
				    slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 767,
				  settings: {
				  	swipe: true,
				    touchMove: true,
				    slidesToShow: 2,
				  }
				}
			]
		});
	});


/* 	============================================
	Superfish Drop Down Menu Init
	============================================ */
  var sfOptions = {
    popUpSelector: 'ul, .sf-mega',
    speed: 'normal',
    speedOut: 'normal',
    cssArrows: false,
    animation: {opacity:'show'}
  }
  var mainNav = jQuery('#primary-menu').superfish(sfOptions);


/* 	============================================
	Off-Canvas menu
	============================================ */
  jQuery('#offcanv_menu').offCanvasMenu();



/* 	============================================
	Collapsible Content Sections
	============================================ */
	jQuery(function($) {
		// Hide closed content on page load.
		$('.collapse_header.closed + .collapse_content').hide();

		// Show / Hide the content when the header is clicked.
		$('.collapse_header').click(function(){

			// Ignore if still locked!
			if ($(this).hasClass('locked')) return false;

			var header = $(this);
			var content = $(this).next('.collapse_content');

			if(header.hasClass('closed')){
				// If it's closed, open it again.
				header.removeClass('closed');
				content.slideDown();
			} else {
				// Else, close it.
				content.stop().slideUp();
				header.addClass('closed');
			}
			return false;
		});
	});

/* 	============================================
	Fancy inputs
	============================================ */

	/*
	jQuery(function($) {
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
