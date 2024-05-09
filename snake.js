const SNAKE_SPEED = 5;
const snakeBody = [
    { x: 11, y: 11 },
    { x: 11, y: 10 },
    { x: 11, y: 9 }
];

const updateSnake = () => {
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = snakeBody[i] ;
    }
    snakeBody[0].x += 0;
    snakeBody[0].y += 1;
}

const drawSnake = (gameBoard) => {
    for (let i = 0; i < snakeBody.length; i++) {
        const segment = snakeBody[i];
        const snakeElemt = document.createElement("div")
        snakeElemt.style.gridRowStart = segment.x;
        snakeElemt.style.gridColumnStart = segment.y;
        snakeElemt.classList.add("snake");
        gameBoard.appendChild(snakeElemt);
    }
}