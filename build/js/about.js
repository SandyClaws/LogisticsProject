var slideIndex = 1, slideIndexAv=1;
function plusSlides(n) {
showSlides(slideIndex += n);
}

function plusSlidesAv(n) {
showSlidesAdv(slideIndexAv += n);
}


function currentSlide(n) {
showSlides(slideIndex = n);
}
function currentSlideAv(n) {
showSlidesAdv(slideIndexAv = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("results-block__item");
var dots = document.getElementsByClassName("results-block__dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

function showSlidesAdv(n) {
var i;
var slides = document.getElementsByClassName("advantages-block__item");
var dots = document.getElementsByClassName("advantages-block__dot");
if (n > slides.length) {slideIndexAv = 1}
if (n < 1) {slideIndexAv = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndexAv-1].style.display = "block";
dots[slideIndexAv-1].className += " active";
}

function windowSize(){
  if ($(window).width() <= '768'){
    $('.results-block__dots').show();
    $('.advantages-block__dots').show();
showSlides(slideIndex);
showSlidesAdv(slideIndexAv);
  } else {
$('.results-block__item').attr("style", "");
$('.advantages-block__item').attr("style", "");
$('.results-block__dots').hide();
$('.advantages-block__dots').hide();
  }
}

$(window).on('load resize', windowSize);
