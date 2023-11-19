const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const waves = [
  {
    amplitude: 50,
    frequency: 0.01,
    phaseX: 0,
    phaseY: 0,
    color: "rgba(255, 55, 75, 0.7)",
  },
  {
    amplitude: 30,
    frequency: 0.015,
    phaseX: Math.PI / 4,
    phaseY: Math.PI / 4,
    color: "rgba(30, 100, 255, 0.7)",
  },
  {
    amplitude: 20,
    frequency: 0.02,
    phaseX: Math.PI / 2,
    phaseY: Math.PI / 2,
    color: "rgba(255, 200, 50, 0.7)",
  },
];

function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  waves.forEach((wave) => {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 3);

    for (let i = 0; i < canvas.width; i++) {
      const x = wave.amplitude * Math.sin(wave.frequency * i + wave.phaseX) + i;
      const y =
        wave.amplitude * Math.sin(wave.frequency * i + wave.phaseY) +
        canvas.height / 2.8;
      ctx.quadraticCurveTo(x - 1, y, x, y);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fillStyle = wave.color;
    ctx.fill();

    // 웨이브 이동
    wave.phaseX += 0.01;
    wave.phaseY += 0.02;
  });

  requestAnimationFrame(drawWave);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

drawWave();
