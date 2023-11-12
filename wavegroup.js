// wavegroup.js
import { Wave } from "./wave.js";

export class WaveGroup {
  constructor() {
    this.totalWaves = 4;
    this.totalPoints = 5;

    this.color = [
      // Basic Theme
      "rgba(52,115,255,0.7)",
      "rgba(255,206,50,0.7)",
      "rgba(254,58,74,0.7)",
      "rgba(255,255,255,0.7)",
    ];

    this.waves = Array.from(
      { length: this.totalWaves },
      (_, i) => new Wave(i, this.totalPoints, this.color[i])
    );
  }

  updateThemeColor(themeIndex, rootStyle) {
    this.color = [
      `--theme${themeIndex + 1}-1`,
      `--theme${themeIndex + 1}-2`,
      `--theme${themeIndex + 1}-3`,
      "rgba(250, 250, 250, 0.75)",
    ];
  }

  resize(stageWidth, stageHeight) {
    this.waves.forEach((wave) => wave.resize(stageWidth, stageHeight));
  }

  draw(ctx) {
    this.waves.forEach((wave) => wave.draw(ctx));
  }
}
