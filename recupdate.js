document.addEventListener("DOMContentLoaded", 
function(event) {   
showSlides(slideIndex)
});

var slideIndex = 0;

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}



function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 0}    
  if (n < 0) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
}
console.log(slides, slideIndex)
slides[slideIndex].style.display = "block";  
dots[slideIndex].className += " active";
}


function checkKeyPress(key) {
console.log("hello")
if (key.keyCode == "39"){   
  plusSlides(1)
} else if (key.keyCode == "37") {
  plusSlides(-1)
}
}
window.addEventListener("keypress",checkKeyPress)