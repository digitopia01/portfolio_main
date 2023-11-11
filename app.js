import { WaveGroup } from "./wavegroup.js";

class App {
  constructor() {
    this.visual = document.querySelector("#visual");

    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.visual.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.waveGroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

const themes = document.querySelectorAll(".theme");
const waveGroup = new WaveGroup();

function handleClick(event) {
  const root = document.documentElement;
  const rootStyle = getComputedStyle(document.documentElement);
  const themeIndex = Array.from(themes).indexOf(event.currentTarget);

  if (themeIndex >= 0) {
    waveGroup.updateThemeColor(themeIndex, rootStyle);
  }
  console.log("Clicked theme index:", themeIndex);
}

themes.forEach((item) => {
  item.addEventListener("click", handleClick);
});

window.onload = () => {
  new App();
};
