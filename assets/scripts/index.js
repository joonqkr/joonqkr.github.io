/* shows the element with the id label */
function show(label) {
  let element = document.getElementById(label);
  element.style.visibility = "visible";
}

/* hides the element with the id label */
function hide(label) {
  let element = document.getElementById(label);
  element.style.visibility = "hidden";
}

/* closes all the "windows" that are open */
function close_all() {
  hide("browser-top");
  hide("frame")

  let allWindows = document.getElementsByClassName("window");
  for (i = 0; i < allWindows.length; i++) {
    allWindows[i].style.visibility = "hidden";
  }
}

/* open window of section with id next */
function change_section(next) {
  close_all();

  /* keep the frame and browserTop visible at all times */
  show("browser-top");
  show("frame")

  /* make the specified section visible */
  show(next)

  /* change the title on the browser */
  let browserTitle = document.getElementById("browser-title");
  let newTitle = next.toUpperCase();
  browserTitle.innerHTML = newTitle;
}

/* red exit button on all windows */
let exitButton = document.getElementById("exit");

/* all the buttons at the bottom */
let aboutButton = document.getElementById("about-button");
let expButton = document.getElementById("exp-button");
let skiButton = document.getElementById("skills-button");
let eduButton = document.getElementById("edu-button");
let interButton = document.getElementById("inter-button");
let projButton = document.getElementById("proj-button");

/* functions for clicking each button */
function about() { change_section("about"); }
function exp() { change_section("experience"); }
function ski() { change_section("skills"); }
function edu() { change_section("education"); }
function int() { change_section("interests"); }
function proj() { change_section("projects"); }

/* what happens when each button is clicked */
exitButton.onclick = close_all;
aboutButton.onclick = about;
expButton.onclick = exp;
skiButton.onclick = ski;
eduButton.onclick = edu;
interButton.onclick = int;
projButton.onclick = proj;
