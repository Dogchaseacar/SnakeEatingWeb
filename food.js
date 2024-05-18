let food = { x: 5, y: 18 };
const EXPANSION_RATE = 1;

const updateFood = () => {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPostion();
    }
}

const drawFood = (gameBoard) => {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

const getRandomFoodPostion = () => {
    let newFoodPostion = randomGridPosition();
    while (onSnake(newFoodPostion)) {
        newFoodPostion = randomGridPosition();
    }
    return newFoodPostion;
}