var i = 0;
var slides = document.getElementById('slides').getElementsByTagName('img');

setInterval(function(){slider()} , 5000);
var fade = setInterval(function(){fading()} , 100);

function slider() {
i++;
if (i == slides.length) {
  i = 0;
}
if (i == 0) {
  slides[slides.length - 1].style.display = 'none';
} else {
  slides[i - 1].style.display = 'none';
}
slides[i].style.display = 'inline';
slides[i].style.opacity = 1;
clearInterval(fade);
fade = setInterval(function(){fading()} , 100);
}

function fading() {
  var opacity = slides[i].style.opacity >=0 ? slides[i].style.opacity : 1;
  slides[i].style.opacity = opacity - 0.02;
}