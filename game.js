import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
  currentGameMode,
  score,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";
import { cardGenerator } from "./gamePresets.js";





(() => {
  let name=window.localStorage.getItem("name")
  if(!name){
    name = prompt("Enter Your Name");
    if(!name) location.reload()
    window.localStorage.setItem("name",name)
  }
 
  let currentHighScore = 0;
  const score=window.localStorage.getItem('score')
  if(score) currentHighScore=score
  const card=document.createElement('div')
  card.classList.add('card')
  card.innerHTML=cardGenerator(name,currentHighScore,0);
  document.body.appendChild(card)
  
  
})();

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.querySelector(".game-board");

function main(currentTime) {
  if (gameOver) {
    const alertMessage = currentGameMode.gameOver;
    if (confirm(alertMessage)) {
      if(window.localStorage.getItem("score")<score) window.localStorage.setItem("score",score)
      location.reload();
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";

  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
