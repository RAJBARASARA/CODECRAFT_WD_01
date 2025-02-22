//Select The Element

var toggle_btn;
var big_wrapper;
var hamburger_menu;

const main = document.querySelector("main");

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}
declare();

let dark = false;

function toggleAnimation() {
  // alert("Hello");
  // clone the wrapper
  dark = !dark;
  // console.log(dark);
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    // console.log("Done animating")
    big_wrapper.remove("copy");
    clone.classList.remove("copy");
    //Reset variable
    declare();
    events();
  });
}
function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}
events();
