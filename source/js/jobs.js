$(document).ready(function(){

  $('.form-btn').attr('disabled',true);
    $('.input').keyup(function(){
        if($(this).val().length !=0)
            $('.form-btn').attr('disabled', false);
        else
            $('.form-btn').attr('disabled',true);
    });


$('#j1').hide();
$('#jb1').on('click', function(){
  if($('#jb1').text() == "подробнее")
{
$('#j1').slideDown();
$("#job1").toggleClass("white-border");
$('#jb1').toggleClass("hide-btn");
$('#jb1').html("скрыть");
}
else
{
  $('#j1').slideUp();
  $("#job1").toggleClass("white-border");
  $('#jb1').html("подробнее");
  $('#jb1').toggleClass("hide-btn");
}
});

//
$('#j2').hide();
$('#jb2').on('click', function(){
  if($('#jb2').text() == "подробнее")
{
$('#j2').slideDown();
$("#job2").toggleClass("white-border");
$('#jb2').toggleClass("hide-btn");
$('#jb2').html("скрыть");
}
else
{
  $('#j2').slideUp();
  $("#job2").toggleClass("white-border");
  $('#jb2').html("подробнее");
  $('#jb2').toggleClass("hide-btn");
}
});

//
$('#j3').hide();
$('#jb3').on('click', function(){
  if($('#jb3').text() == "подробнее")
{
$('#j3').slideDown();
$("#job3").toggleClass("white-border");
$('#jb3').toggleClass("hide-btn");
$('#jb3').html("скрыть");
}
else
{
  $('#j3').slideUp();
  $("#job3").toggleClass("white-border");
  $('#jb3').html("подробнее");
  $('#jb3').toggleClass("hide-btn");
}
});

//
$('#j4').hide();
$('#jb4').on('click', function(){
  if($('#jb4').text() == "подробнее")
{
$('#j4').slideDown();
$("#job4").toggleClass("white-border");
$('#jb4').toggleClass("hide-btn");
$('#jb4').html("скрыть");
}
else
{
  $('#j4').slideUp();
  $("#job4").toggleClass("white-border");
  $('#jb4').html("подробнее");
  $('#jb4').toggleClass("hide-btn");
}
});


$(".job-text__link").on('click', function(){
$('.overlay').show();
});

$('.overlay-form__btn').on('click', function(e){
  e.preventDefault();
  $('.overlay').hide();
});

$('#sr1l').on('click', function(e){
  e.preventDefault();
  var idd = $("#sr1l").attr("idd");
var job = document.getElementById(idd);
$('.job-name').html($(job).text());
});

$('#sr2l').on('click', function(e){
  e.preventDefault();
  var idd = $("#sr2l").attr("idd");
var job = document.getElementById(idd);
$('.job-name').html($(job).text());
});

$('#sr3l').on('click', function(e){
  e.preventDefault();
  var idd = $("#sr3l").attr("idd");
var job = document.getElementById(idd);
$('.job-name').html($(job).text());
});

$('#sr4l').on('click', function(e){
  e.preventDefault();
  var idd = $("#sr4l").attr("idd");
var job = document.getElementById(idd);
$('.job-name').html($(job).text());
});

});
