let car;
let obstacles;
let gameover;
let points;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;


function draw() {
  //
  // toutes les 16ms
  //

  //
  // Iteration 1: road drawing
  //

  // TODO

  ctx.clearRect(0, 0, W, H)
    ///Largest square (green)
  ctx.fillStyle = `green`;
  ctx.fillRect(0, 0, W, H);

  ///Main road square (grey)
  ctx.fillStyle = `grey`;
  ctx.fillRect(50, 0, W-100, H);

  ///Left Border (white)
  ctx.fillStyle = `white`;
  ctx.fillRect(75, 0, W-975, H);

  ///Right Border (white)
  ctx.fillStyle = `white`;
  ctx.fillRect(900, 0, W-975, H);

  ///Discontinued Border (white)
  ctx.beginPath();
  ctx.strokeStyle = `white`;
  ctx.lineWidth = 10;
  ctx.setLineDash([50, 30]);
  ctx.moveTo(500, 0);
  ctx.lineTo(500, H);
  ctx.stroke();

  //
  // Iteration 2: car drawing
  //

  // TODO
  car.draw();

  //
  // Iteration #4: obstacles
  //

  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;

  // TODO
  switch (e.keyCode) {
    case 37: car.moveLeft();  console.log('left',  car); break;
    case 39: car.moveRight(); console.log('right', car); break;
  }
}

let raf;
let frames = 0;
function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }

  // TODO
  car = new Car();


  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();
