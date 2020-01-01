/*$('.mobile-menu_btn').on('click', function(){
$('.mobile-menu_btn').toggleClass("active-menu-btn");
$('.active-mobile-menu').toggle();
$('.header-phone__item').toggle();
});*/
$('.header-menu_btn').on('click', function(){
  $('.header-phone').toggleClass("active-menu");
  $('.header-menu_btn').toggleClass("cl-btn");
  $('.header-menu').toggle();
  });
