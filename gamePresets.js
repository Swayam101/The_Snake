const normalAudio=new Audio('./normal.mp3')
const modiAudio=new Audio('./modiJiBG.mp3')

export const normalMode={
    name:'normal',
   head:'url("./snakeHead.jpg")',
    food:'url("./mouseHead.png")',
    back:'black',
    bgMusic:normalAudio,
    gameOver:'Ek Bar Or Try Kar'
    
}

export const modiMode={
    name:'modi',
    head:'url("./modiji.png")',
    food:'url("./rupee.png")',
    back:'url("./parliament.jpg")',
    bgMusic:modiAudio,
    gameOver:'Nahi milenge bro 15 lakh'
}

export const zenMode={
    name:'zen',
    head:'url("./zenHead.webp")',
    food:'url("./zenFood.png")',
    back:'url("./")'
}

