const normalAudio = new Audio("./normalMusic.mp3");
const modiAudio = new Audio("./modiJiBG.mp3");
const zenAudio = new Audio("./zenMusic.mp3");

export const normalMode = {
  name: "normal",
  head: 'url("./snakeHead.jpg")',
  food: 'url("./mouseHead.png")',
  back: 'url("./normalBG.avif")',
  bgMusic: normalAudio,
  gameOver: "Ek Bar Or Try Kar",
};

export const modiMode = {
  name: "modi",
  head: 'url("./modiji.png")',
  food: 'url("./rupee.png")',
  back: 'url("./parliament.jpg")',
  bgMusic: modiAudio,
  gameOver: "Nahi milenge bro 15 lakh",
};

export const zenMode = {
  name: "zen",
  head: 'url("./zenHead.png")',
  food: 'url("./zenFood.png")',
  back: 'url("./zenBG.jpeg")',
  bgMusic: zenAudio,
  gameOver: "It Just A Game Brother , Try Again",
};

export const cardGenerator = (name, highScore,currentScore) => {
  const randomNumber = Math.random() * (100 - 1) + 1;
  return `
      <img src="https://robohash.org/${randomNumber}">
      <p class="card__name">${name}</p>
      <div class="grid-container">
        <div style="color:blue;" class="grid-child-posts">
          <div>High-Score : </div><div ">${highScore}</div>
          <div>Current-Score : </div><div class="score-elem">${currentScore}</div>
        </div>  
    "`;
};
