// app.js
import { WaveGroup } from "./wavegroup.js";

class App {
  constructor() {
    this.visual = document.querySelector(".visual");

    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.visual.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    this.themes = document.querySelectorAll(".theme");
    this.setupThemeClick();

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  setupThemeClick() {
    this.themes.forEach((item) => {
      item.addEventListener("click", this.handleThemeClick.bind(this));
    });
  }

  handleThemeClick(event) {
    const rootStyle = getComputedStyle(document.documentElement);
    const themeIndex = Array.from(this.themes).indexOf(event.currentTarget);

    if (themeIndex >= 0) {
      this.waveGroup.updateThemeColor(themeIndex, rootStyle);
    }
    console.log("Clicked theme index:", themeIndex);
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

window.onload = () => {
  new App();
};
