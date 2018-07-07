jQuery(function($) {
	function fixDiv() {
		if($(window).width() > 1025){
			var $cache = $('#getFixed');
			var $addget = $('#fixedmobile');
			if ($(window).scrollTop() > 100)
			{
				// $('#fixed-mobile').removeClass('fix-mobile-ipad');

				$cache.addClass('getFixed-1');

			}
			else{
				// $('#fixedmobile').addClass('fix-mobile-ipad');
				
				$cache.removeClass('getFixed-1');
			}
		}
	}


	$(window).scroll(fixDiv);
	fixDiv();
	$(window).resize( function(){
		fixDiv();
	});
});



$(document).ready(function(){
	$('.title-1').click(function(){
		$(this).siblings('ul').slideToggle(300);
		$(this).find('.fa-angle-right').toggleClass('rote90');
	})

	$('#click-profile').on('click', function(){
		$('.ed-drop-menu').toggleClass('open');
	});

	$('body, html').on('click', function(event){
		var target = $(event.target);
		if( !target.is('#click-profile, #click-profile *')){
			$('.ed-drop-menu').removeClass('open');
			open = false;
		}
	});
	$('body, html').on('click', function(event){
		var target = $(event.target);
		if( !target.is('.click-drp-cart #kick-cart, .click-drp-cart #kick-cart *,.click-drp-cart .dropdown-cart, .click-drp-cart .dropdown-cart *')){
			$('.dropdown-cart').removeClass('dropdown-cart-show');
			open = false;
		}
	});

});
//-----JS for Price Range slider-----

$(function() {
	$( "#slider-range" ).slider({
	  range: true,
	  min: 0,
	  max: 3000000,
	  values: [ 0, 2000000 ],
	  slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	  }
	});
	$( "#amount" ).val( "Từ: " + $( "#slider-range" ).slider( "values", 0 ) +
	  " - " + $( "#slider-range" ).slider( "values", 1 ) );

	$( "#slider-range-1" ).slider({
	  range: true,
	  min: 0,
	  max: 3000000,
	  values: [ 0, 2000000 ],
	  slide: function( event, ui ) {
		$( "#amount1" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	  }
	});
	$( "#amount1" ).val( "Từ: " + $( "#slider-range-1" ).slider( "values", 0 ) +
	  " - " + $( "#slider-range-1" ).slider( "values", 1 ) );
});


$(function(){
	$('#getFixed .has-submenu .icon-first-submenu').on('click' , function(event){
		event.preventDefault();
		var parent = $(this).parents('.has-submenu');
		$('#getFixed .has-submenu').not(parent).removeClass('open').find('.submenu-1').slideUp()
		$('#getFixed .has-submenu').not(parent).find('.has-second-submenu').removeClass('open');
		$('#getFixed .has-submenu').not(parent).find('.second-submenu').slideUp();
		parent.toggleClass('open').find('.submenu-1').slideToggle();
		$(this).toggleClass('rotate0')
	});
	$('#getFixed .has-second-submenu .icon-second-submenu').on('click' , function(event){
		event.preventDefault();
		var parent = $(this).parents('.has-second-submenu');
		$('#getFixed .has-second-submenu').not(parent).removeClass('open').find('.submenu-2').slideUp();
		parent.toggleClass('open').find('.submenu-2').slideToggle();
		$(this).toggleClass('rotate90');
	});
})


/*
* todo =>
* Refacctor with function
*   
*/
$(document).on('click', '.custom-input-number .cin-increment', function (e) {
    var $input = $(this).siblings('.cin-input'),
        val = parseInt($input.val()),
        max = parseInt($input.attr('max')),
        step = parseInt($input.attr('step'));

    var temp = val + step;
    $input.val(temp <= max ? temp : max);
    console.log(temp);
});
$(document).on('click', '.custom-input-number .cin-decrement', function (e) {
    var $input = $(this).siblings('.cin-input'),
        val = parseInt($input.val()),
        min = parseInt($input.attr('min')),
        step = parseInt($input.attr('step'));

    var temp = val - step;
    $input.val(temp >= min ? temp : min);

    console.log(temp);
});

// $(document).ready(function(){
// 	$('.click-drp-cart').click(function(){
// 		$('.dropdown-cart').toggleClass('.dropdown-cart-show');
// 	})
// });

$(document).on('click', '.click-drp-cart #kick-cart', function (e) {
	$('.dropdown-cart ').toggleClass('dropdown-cart-show');

});



$(function(){
	var show = false;
	$('#btn-navbar-toggle').on('click', function(){

	 	if( show ){
	 		$('#btn-navbar-toggle').removeClass('active');
	 		$('#getFixed').removeClass('active');
	 		$('body').removeClass('narbar-is-opened');
	 	}else{
	 		$('#btn-navbar-toggle').addClass('active');
	 		$('#getFixed').addClass('active');
	 		$('body').addClass('narbar-is-opened');
	 	}

	 	show = ! show;
	});
	$('body').on('click', function(event){
		var target = $( event.target );
		if( show && !target.is('#btn-navbar-toggle , #btn-navbar-toggle * , #getFixed , #getFixed *')){
			show =  false;
			$('#btn-navbar-toggle').removeClass('active');
	 		$('#getFixed').removeClass('active');
	 		$('body').removeClass('narbar-is-opened');
		}
	})
	$('#getFixed  .navbar-nav li .has-submenu .caret-down').on('click', function(event){
		$(this).toggleClass('caret-up');
		event.preventDefault();
		var btn =  $(this).parent();
		var li =  $(this).parents('li');
		var submenu = li.find('.ed-dropmn');
		submenu.slideToggle();
		if( submenu.hasClass('open-submenu')){
			submenu.slideUp(500, function(){
				submenu.removeClass('open-submenu');
			});
		}else{
			$('#getFixed  .navbar-nav li  .ed-dropmn').not(submenu).slideUp(500, function(){
				$(this).removeClass('open-submenu');
			});
			submenu.slideDown(500, function(){
				submenu.addClass('open-submenu');
			});
		}
	})
})

$(function(){
	$('#btn-search-mobile .fa-search').on('click', function(){
		$('.search-mobile').toggleClass('search-mobile-open');
	})
})



$(function(){
	$('.not-account').on('click', function(){
		$('.show-regis').slideUp();
	})
});
$(function(){
	$('.create-account').on('click', function(){
		$('.show-regis').slideDown();
	})
});


// ===== Scroll to Top ====
$(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {    // If page is scrolled more than 50px
            $('#top').fadeIn("fast");       // Fade in the arrow
        } else {
            $('#top').fadeOut("fast");      // Else fade out the arrow
        }
    });
    $('#top').click(function() {            // When arrow is clicked
    	$('body,html').animate({
            scrollTop : 0                   // Scroll to top of body
        }, 500);
    });
