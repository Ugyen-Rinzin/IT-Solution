// AOS animation
AOS.init();

// Start Background video code

// Disable video controls
document.getElementById("bgVideo").setAttribute("controls", false);

// Prevent video pause on click
document.getElementById("bgVideo").addEventListener("click", function (e) {
  e.preventDefault();
  if (video.paused) {
    video.play();
  } else {
    video.play();
  }
});

const video = document.getElementById("bgVideo");

// Remove the 'controls' attribute to hide default video controls
video.removeAttribute("controls");

// End of Background video code
 

// slider scroll

const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let sLeft;
slider.scrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  sLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});
slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const dragged = x - startX;
  slider.scrollLeft = sLeft - dragged;
}); 



