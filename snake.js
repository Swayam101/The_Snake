import { getInputDirection } from "./input.js";
import { normalMode, modiMode,zenMode } from "./gamePresets.js";

export let score=0;

export const SNAKE_SPEED = 10;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;
export let currentGameMode = { ...normalMode };

const normal = document.querySelector(".normal-mode");
const modiJiMode = document.querySelector(".modiji-mode");
const zen=document.querySelector('.zen-mode');
const gamePresets={
  normal:normalMode,modi:modiMode,zen:zenMode
}

const gameModeHandler=(e) => {
  currentGameMode.bgMusic.pause()
  const mode=gamePresets[e.currentTarget.dataset.name]
  currentGameMode = { ...mode }; 
  currentGameMode.bgMusic.currentTime=0
  currentGameMode.bgMusic.play()
  document.body.style.backgroundImage=currentGameMode.back
}

modiJiMode.addEventListener("click", gameModeHandler);

normal.addEventListener("click", gameModeHandler);

zen.addEventListener("click",gameModeHandler);



export function update() {
  addSegments();

  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment, index) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    snakeElement.style.backgroundImage = currentGameMode.food;
    if (index == 0) {
      snakeElement.classList.remove("snake");
      snakeElement.classList.add("snake-head");
      snakeElement.style.backgroundImage = currentGameMode.head;
    }

    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  score++;
  const scoreElement=document.querySelector('.score-elem')
  scoreElement.innerHTML=score
  console.log(score);

  newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  });
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegments = 0;
}
