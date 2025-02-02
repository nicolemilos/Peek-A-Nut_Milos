import { Nut } from "../gameObjects/nuts.js";
import {FakeNut} from "../gameObjects/fakenuts.js";
import { global } from "./global.js";
import {Block} from "../gameObjects/block.js";
import {Squirrel} from "../gameObjects/squirrel.js";


const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('startScreen');
const heartImage = document.querySelector ('#heartImage');
const nutDisplay1 = document.querySelector ('#nutsText');
const timerDisplay = document.getElementById('timerText');   

let timer = 120;
let interval;
 

document.querySelector('#startButton').addEventListener('click', startGame);

export function updateNutDisplay() { // This updates the Display and tells the Player how far they are
    nutDisplay1.textContent = `${global.nutsScore}/15`;
}

export function updateHeartDisplay(){ // same as the above - just updates pictures instead of the number
    let heartImageSrc = `./images/hearts${global.hearts}.png`;
    heartImage.src = heartImageSrc;
    
}


updateNutDisplay();
updateHeartDisplay();


function startGame(){
    //Hide the things that were first seen
    startButton.style.display="none";

    startScreen.style.display="none";

    nutDisplay1.style.display="block";

    heartImage.style.display="block";

    global.startedGame = true; //set it to true so the nuts can be clicked

    timerDisplay.style.display ="block";

    timerDisplay.textContent = `${formatTime(timer)}`; //Starts the timer with the interval below
    interval = setInterval(decreaseTimer, 1000);



}

startButton.addEventListener("click", startGame);

function gameLoop(totalRunningTime) { 
    global.deltaTime = totalRunningTime - global.prevTotalRunningTime; // Time in milliseconds between frames
    global.deltaTime /= 1000; // Convert milliseconds to seconds for consistency in calculations
    global.prevTotalRunningTime = totalRunningTime; // Save the current state of "totalRunningTime", so at the next call of gameLoop (== next frame) to calculate deltaTime again for that next frame.
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height); // Completely clear the canvas for the next graphical output 

   for (var i = 0; i < global.allGameObjects.length; i++) { //loop in the (game)loop -> the gameloop is continous anyways.. and on every cylce we do now loop through all objects to execute several operations (functions) on each of them: update, draw, collision detection, ...
        if (global.allGameObjects[i].active == true) {
            global.allGameObjects[i].update();
            global.allGameObjects[i].draw();
        }
    }


    requestAnimationFrame(gameLoop); // This keeps the gameLoop running indefinitely
}

 function setupGame() { // Setting the nuts/fakenuts/blocker all to their place they belong

    global.nuts.push(new Nut(195, 465, 20, "auto", "../images/nut4.png"));
    global.fakenuts.push(new FakeNut(215, 443, 20, 20, "../images/fakenut3.png"));
    global.block.push(new Block(200,430,39,51.5, "../images/basket.png"));

    global.fakenuts.push(new FakeNut(635, 450, 20, 20, "../images/fakenut2.png"));

    global.block.push(new Block(510,390,139,74.5, "../images/bush2.png"));
    global.nuts.push(new Nut(530, 400, 30, "auto", "../images/nut3.png"));
    global.block.push(new Block(430,390,140,74, "../images/bush1.png"));

    global.fakenuts.push(new FakeNut(450, 495, 20, 20, "../images/fakenut1.png"));

    global.nuts.push(new Nut(547, 530, 25, "auto", "../images/nut2.png"));
    global.block.push(new Block(300,400,351,155, "../images/bench.png"));
    global.nuts.push(new Nut(710, 128, 20, "auto", "../images/nut2.png"));
    global.nuts.push(new Nut(713, 420, 20, "auto", "../images/nut4.png"));
    global.block.push(new Block(715,130,46.5,319.5, "../images/lantern1.png"));

    global.nuts.push(new Nut(1050, 380, 30, "auto", "../images/nut2.png"));
    global.nuts.push(new Nut(1255, 360, 20, "auto", "../images/nut4.png"));
    global.fakenuts.push(new FakeNut(935, 452, 20, 20, "../images/fakenut1.png"));
    global.nuts.push(new Nut(1210, 186, 25, "auto", "../images/nut1.png"));
    global.block.push(new Block(925,200,352.5,288, "../images/playground.png"));

    global.block.push(new Block(930,65,72.5,502.5, "../images/lantern2.png"));
    global.block.push(new Block(865,455,74,109.5, "../images/trashcan.png"));
    global.block.push(new Block(720,465,139,74.5, "../images/bush2.png"));

    global.nuts.push(new Nut(905, 540, 30, "auto", "../images/nut1.png"));
    global.block.push(new Block(900,550,67.5,28.5, "../images/stone1.png"));

    global.nuts.push(new Nut(300, 535, 25, "auto", "../images/nut3.png"));
    global.block.push(new Block(250,530,64,38.5, "../images/stone2.png"));
    global.block.push(new Block(1150,430,140,74, "../images/bush1.png"));
    
    global.nuts.push(new Nut(387, 426, 15, "auto", "../images/nut1.png"));
    global.nuts.push(new Nut(573, 200, 25, "auto", "../images/nut4.png"));
    global.nuts.push(new Nut(100, 165, 30, "auto", "../images/nut2.png"));
    global.nuts.push(new Nut(975, 148, 20, "auto", "../images/nut3.png"));
    global.nuts.push(new Nut(840, 295, 20, "auto", "../images/nut2.png"));
    

    global.squirrel = new Squirrel(-40,230,250,350);
    global.squirrel.switchCurrentSprites(0, 5);
    setTimeout(() => global.squirrel.switchCurrentSprites(6,6), 2000);

}


export function endGame(outcome) {
    clearInterval(interval); // Stops the timer
    global.startedGame = false; // stops the clicking 
    global.canvas.style.pointerEvents = "none"; 

    if (outcome === "win") {
        console.log("You win!");

        // Display the win message
        const winMessage = document.querySelector("#winMessage");
        winMessage.style.display = "block";

        // Hide the retry button (no retry for winning)
        const retryButton = document.querySelector("#retryButton");
        retryButton.style.display = "none";

    } else if (outcome === "lose") {
        console.log("Game Over! Click Retry to restart.");

        // Display the lose message
        const loseMessage = document.querySelector("#loseMessage");
        loseMessage.style.display = "block";

        // Display the retry button (retry option for losing only)
        const retryButton = document.querySelector("#retryButton");
        retryButton.style.display = "block";
    }
}

export function resetGame() {
    global.allGameObjects = [];
    global.nuts = [];
    global.fakenuts = [];
    global.block = [];
    global.squirrel;
    global.hearts = 3;  // Reset hearts
    global.nutsScore = 0;    // Reset score

    // Update displays
    updateNutDisplay();
    updateHeartDisplay();

   
    const retryButton = document.querySelector('#retryButton');
    retryButton.style.display = 'none';
    
    const loseMessage = document.querySelector("#loseMessage");
    loseMessage.style.display = "none";

    // Re-enable canvas clicks & set the timer to 2 mins again
    global.canvas.style.pointerEvents = 'auto';
    global.startedGame = true;
    timer = 120;
    interval = setInterval(decreaseTimer, 1000);

    // Restart the game setup
    setupGame();  
}


// This sets the timer from 120 seconds to a format like minutes:seconds
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60); // Calculate the minutes
    const remainingSeconds = seconds % 60; // Calculate remaining seconds
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`; // Formatting it
}

//Already says it - this function decreases the timer
function decreaseTimer() {
    timer --;
    timerDisplay.textContent = `${formatTime(timer)}`; 
    console.log(timer);
    if(timer === 0){
        endGame("lose");
    }
}


setupGame();
requestAnimationFrame(gameLoop);


/* this is a fix that makes your game still runable after you left the tab/browser for some time: */
document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      global.deltaTime = performance.now();
    } 
});


