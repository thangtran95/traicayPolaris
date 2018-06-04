jQuery(function($) {
  // function fixDiv() {
  //   var $cache = $('#getFixed');
  //   if ($(window).scrollTop() > 100)
  //     $cache.css({
  //       'position': 'fixed',
  //       'top': '0px',
  //       'z-index' : '9999',
  //       'left': '0',
  //       'right': '0',
  //       'border-radius': '0'


  //     });
  //   else
  //     $cache.css({
  //       'position': 'relative',
  //       'top': 'auto',
  //       'z-index' : '99999',
  //       'border-top-left-radius': '10px',
  //       'border-top-right-radius': '10px',


  //     });
  // }
  // $(window).scroll(fixDiv);
  // fixDiv();
});

$(document).ready(function(){
	$('.title-1').click(function(){
		$(this).siblings('ul').slideToggle(300);
		$(this).find('.fa-angle-right').toggleClass('rote90');
	})
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
});



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

$(document).on('click', '.click-drp-cart', function (e) {
	$('.dropdown-cart').toggleClass('dropdown-cart-show');

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