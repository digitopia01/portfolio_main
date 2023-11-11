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
