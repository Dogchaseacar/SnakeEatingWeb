const SNAKE_SPEED = 5;
const snakeBody = [
    { x: 11, y: 11 },
    { x: 11, y: 10 },
    { x: 11, y: 9 }
];

const updateSnake = () => {
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]} ;
    }
    const snakeDirection = getInputDirection();
    snakeBody[0].x += snakeDirection.x;
    snakeBody[0].y += snakeDirection.y;
}

const drawSnake = (gameBoard) => {
    for (let i = 0; i < snakeBody.length; i++) {
        const segment = snakeBody[i];
        const snakeElemt = document.createElement("div")
        snakeElemt.style.gridRowStart = segment.y;
        snakeElemt.style.gridColumnStart = segment.x;
        snakeElemt.classList.add("snake");
        gameBoard.appendChild(snakeElemt);
    }
}