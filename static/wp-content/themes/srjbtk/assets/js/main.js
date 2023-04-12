$('.bxslider').bxSlider({
  mode: 'fade',
  captions: false,
  auto: true, 
  controls: false,
  speed: 5000,	
  
  
});


$('.bxslider1').bxSlider({
  auto: true,
  autoControls: true
});


$('.bxslider2').bxSlider({
  infiniteLoop: false,
  hideControlOnEnd: true
});


$('.bxslider3').bxSlider({
  adaptiveHeight: true,
  mode: 'fade',
  captions: true,
  auto: true,
});


$(document).ready(function(){
  $('.bxslider4').bxSlider({
    slideWidth: 280,
    minSlides: 1,
    maxSlides: 4,
    slideMargin: 28,
	moveSlides:1, auto: true,
  });
});

$('.bxslider5').bxSlider({
  minSlides: 2,
  maxSlides: 2,
  slideWidth: 360,
  slideMargin: 10
});

$('.bxslider6').bxSlider({
  minSlides: 3,
  maxSlides: 4,
  slideWidth: 170,
  slideMargin: 10
});

$('.bxslider7').bxSlider({
  pagerCustom: '#bx-pager'
});

$('.bxslider8').bxSlider({
  mode: 'vertical',
  slideMargin: 5
});