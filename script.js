let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

function createBackGround() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
  for (slide = 0; slide < snake.length; slide++) {
    context.fillStyle = "green";
    context.fillRect(snake[slide].x, snake[slide].y, box, box);
  }
}

createBackGround();
createSnake();
