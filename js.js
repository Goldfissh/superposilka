$(document).ready(function(){
  $('.slider').slick({
       autoplay : true,
    autoplaySpeed : 1000000,
    prevArrow : '<button type=button" class="left-arrow"><img src="images/l-arrow.png"></button>',
    nextArrow : '<button type=button" class="right-arrow"><img src="images/r-arrow.png"></button>',
    dots : false,
  });
});
// $('.drop-btn').click(function(){
// 	$('.menu').toggleClass('active')
// })