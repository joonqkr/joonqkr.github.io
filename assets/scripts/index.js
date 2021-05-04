document.onclick = flowerFade;
var svg = document.getElementById("svg");

function flowerFade(event) {

  svg.style.position = "absolute";
  svg.style.left = event.clientX - 70;
  svg.style.top = event.clientY - 70;
  svg.style.opacity = 1;

  svg.classList.toggle("fade");
}
