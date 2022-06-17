let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

let direction = "right";

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

function startGame() {
  createBackGround();
  createSnake();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;

  snake.pop();

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newHead);
}

let game = setInterval(startGame, 100);
