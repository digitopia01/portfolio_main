import { WaveGroup } from "./wavegroup.js";

const themes = document.querySelectorAll(".theme");

function moveup() {
  themes.forEach((item) => {
    item.onmouseover = function () {
      item.style.transform = `translateY(-30px)`;
    };
    item.onmouseleave = function () {
      item.style.transform = `translateY(0px)`;
    };
  });
}
moveup();

window.onload = () => {
  new App();
};

//navigator
const navigator = document.querySelector(".navigator");
window.addEventListener("scroll", () => {
  let scroll = scrollY;
  if (scroll > 250) {
    navigator.style.display = "flex";
  } else {
    navigator.style.display = "none";
  }
});

//con2 버튼
const con2 = document.querySelector(".con2");
const changeButtons = con2.querySelectorAll(".appear");
const con2SubHeadings = con2.querySelectorAll(".con2heading");

function fadeslideclick() {
  for (let item of con2SubHeadings) {
    item.classList.toggle("active");
  }
}

for (let item of changeButtons) {
  item.addEventListener("click", fadeslideclick);
}
