// jQuery(function($) {
//   function fixDiv() {
//     var $cache = $('#getFixed');
//     if ($(window).scrollTop() > 100)
//       $cache.css({
//         'position': 'fixed',
//         'top': '0px',
//         'z-index' : '9999999999'

//       });
//     else
//       $cache.css({
//         'position': 'relative',
//         'top': 'auto',
//         'z-index' : '9999999999'
//       });
//   }
//   $(window).scroll(fixDiv);
//   fixDiv();
// });

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