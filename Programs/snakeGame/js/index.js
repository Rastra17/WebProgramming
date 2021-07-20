//Declaring the constants for the game
let inputDir={x:0,y:0};
const foodSound=new Audio('SnakeEat.wav');
const gameOverSound=new Audio('GameOver.wav');
const moveSound=new Audio('ChangeDirection.mp3');
const musicSound=new Audio('GameBg.mp3');
let speed=15;
let score=0;
let lastPaintTime=0;
let snakeArr=
[
    {x:13,y:15}
];
food={x:6,y:7};

//Game loop for the game
function main(ctime)
{
    window.requestAnimationFrame(main);
    //console.log(ctime)
    if((ctime-lastPaintTime)/1000<1/speed)
    {
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}

//Function if snake collided
function isCollide(snake)
{
    //If the snake bites itself
    for (let index=1;index<snakeArr.length; index++) 
    {
        if(snake[index].x===snake[0].x && snake[index].y===snake[0].y)
        {
            return true;
        }
    }

    //If the snake bites the wall
    if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0)
        {
            return true;
        }
}

//Function for the game
function gameEngine()
{
    //Updating the snake
    if(isCollide(snakeArr))
    {
        gameOverSound.play();
        musicSound.pause();
        inputDir={x:0,y:0};
        alert("Game Over! Press any key to play again")
        snakeArr=[{x:13,y:15}];
        musicSound.play();
        score=0;
    }
    
    //If the snake has eaten the food, snake will grow and relocate the food
    if(snakeArr[0].y===food.y && snakeArr[0].x===food.x)
    {
        foodSound.play();
        score+=1;
        if(score>highScoreVal)
        {
            highScoreVal=score;
            localStorage.setItem('highscore',JSON.stringify(highScoreVal));
            highScoreBox.innerHTML="High Score: "+highScoreVal;
        }

        scoreBox.innerHTML="Score: "+score;
        snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y+inputDir.y});
        let a=2;
        let b=16;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
    }

    //Moving the snake
    for(let i = snakeArr.length-2;i>=0;i--) 
    {
        snakeArr[i+1]={...snakeArr[i]};
    }

    snakeArr[0].x+=inputDir.x;
    snakeArr[0].y+=inputDir.y;

    //Displaying the snake
    board.innerHTML="";
    snakeArr.forEach((e,index)=>
    {
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(index===0)
        {
            snakeElement.classList.add('head');
        }
        else
        {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    
    //Displaying the food element
    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

//Variable to store high score in Local Storage
musicSound.play();
let highScore=localStorage.getItem('highscore');
if(highScore===null)
{
    highScoreVal=0;
    localStorage.setItem('highscore',JSON.stringify(highScoreVal));
}
else
{
    highScoreVal=JSON.parse(highScore);
    highScoreBox.innerHTML="High Score: "+highScore;
}

//Calling the game loop
window.requestAnimationFrame(main);

//Listening to the keys pressed on keyboard
window.addEventListener('keydown',e=>
{
    inputDir={x:0,y:1};
    moveSound.play();
    switch(e.key)
    {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x=1;
            inputDir.y=0;
            break;
        
        default:
            break;
    }
})