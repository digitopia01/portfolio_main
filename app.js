class Point {
  constructor(index, x, y, waveIndex) {
    this.x = x;
    this.y = y;
    this.fixedY = canvas.height / 2; // y값을 canvas의 가운데로 고정
    this.speed = 0.01;
    // 초기 타이밍에 딜레이 추가
    this.cur = index * 5 + waveIndex * 200; // 각 파도별로 포인트들이 최소 차이 10px로 다른 타이밍에 움직이게 설정
    this.max = Math.random() * 100 + 30;

    // 고정된 컬러 사용
    const colors = [
      "rgba(255,0,0,0.7)",
      "rgba(255,255,0,0.7)",
      "rgba(0,0,255,0.7)",
    ];
    this.color = colors[waveIndex];
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}

const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const waves = [];

for (let j = 0; j < 3; j++) {
  const points = [];
  for (let i = 0; i < 9; i++) {
    points.push(new Point(i, (canvas.width / 5) * i, canvas.height / 2, j));
  }
  waves.push(points);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  waves.forEach((points) => {
    points.forEach((point) => {
      point.update();
    });

    ctx.beginPath();

    // Set the starting point at the left edge of the canvas
    ctx.moveTo(0, points[0].y);

    for (let i = 1; i < points.length - 2; i++) {
      const xc = (points[i].x + points[i + 1].x) / 2;
      const yc = (points[i].y + points[i + 1].y) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }

    ctx.quadraticCurveTo(
      points[points.length - 2].x,
      points[points.length - 2].y,
      points[points.length - 1].x,
      points[points.length - 1].y
    );

    // Set the ending point at the right edge of the canvas
    ctx.lineTo(canvas.width, points[points.length - 1].y);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fillStyle = points[0].color; // 파도의 첫 번째 포인트의 색상 사용
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  waves.forEach((points, j) => {
    points.forEach((point, index) => {
      point.x = (canvas.width / 5) * index;
      point.y = canvas.height / 2;
      point.fixedY = canvas.height / 2;
      point.max = Math.random() * 100 + 150;
      // 딜레이에 따라 초기 타이밍 조절
      point.cur = index * 5 + j * 10;
    });
  });
});

draw();
