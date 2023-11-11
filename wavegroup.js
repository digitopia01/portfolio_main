import { Wave } from "./wave.js";

export class WaveGroup {
  constructor() {
    const themes = document.querySelectorAll(".theme");
    const root = document.documentElement;
    const rootStyle = getComputedStyle(root);

    this.totalWaves = 4;
    this.totalPoints = 5;

    this.color = [
      // Basic Theme
      "rgba(59,179,113,0.7)",
      "rgba(29,144,255,0.7)",
      "rgba(255,99,72,0.7)",
      "rgba(255,255,255,0.5)",
    ];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      let wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  updateThemeColor(themeIndex, rootStyle) {
    this.color = [
      rootStyle.getPropertyValue(`--theme${themeIndex + 1}-1`),
      rootStyle.getPropertyValue(`--theme${themeIndex + 1}-2`),
      rootStyle.getPropertyValue(`--theme${themeIndex + 1}-3`),
      "rgba(250, 250, 250, 0.75)",
      "rgba(250, 250, 250, 0.75)",
    ];
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
