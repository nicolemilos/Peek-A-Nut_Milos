import { global } from "./global.js";
import { updateNutDisplay, updateHeartDisplay, endGame, resetGame } from "./main.js";

function click(event){
    if(!global.startedGame) return; // This makes it clickable as soon as startedGame is initialized

    const mouseX = event.offsetX;
    const mouseY = event.offsetY;
    
    for (let i = 0; i < global.nuts.length; i++) { // detecting if the mouse is basically on the nut 
        const nut = global.nuts[i];
        if (nut.active && // The nut is only clickable if its active - very important else it will count even when it dissapeared
            // This tells the computer if the mouse of the player is on the nuts x/y/width/height so basically touching it
            mouseX > nut.x &&
            mouseX < nut.x + nut.width &&
            mouseY > nut.y &&
            mouseY < nut.y + nut.height
        ) {
            global.nuts[i].active = false; // making the nuts dissapear
            global.nutsScore += 1;  // counting one nut 
            updateNutDisplay();
            global.squirrel.switchCurrentSprites(9,13); // so that the squirrel reacts happy to the nut 
            setTimeout(() => global.squirrel.switchCurrentSprites(8,8), 1000); // this is basically stopping the animation after 1sek -> so sets it for the spritesheets back to Sprite 8

            if(global.nutsScore == 15){
                endGame('win');
                
                
            }

        }
            
        }
        for (let i = 0; i < global.fakenuts.length; i++) { // Almost the same for fake nuts
            const fakeNut = global.fakenuts[i];
            if (fakeNut.active &&
                mouseX > fakeNut.x &&
                mouseX < fakeNut.x + fakeNut.width &&
                mouseY > fakeNut.y &&
                mouseY < fakeNut.y + fakeNut.height
            ) {
                global.fakenuts[i].active = false;
                global.hearts -= 1;
                updateHeartDisplay(); 
                
                // Reaction of the squirrel to the click
                global.squirrel.switchCurrentSprites(15,15);
                setTimeout(() => global.squirrel.switchCurrentSprites(14,14), 1000);}}

                if(global.hearts<=0){
                    endGame('lose');
                    
                }
        // Cap the hearts at 0 so it doesnt go below it
       if(global.hearts < 0){
        global.hearts == 0;
       }  
       // Cap the Score at 15 so it doesnt go above it
       if (global.nutsScore > 15){
        global.nutsScore == 15;
       }
    
        
    };
    document.querySelector('#retryButton').addEventListener('click', resetGame);
        


global.canvas.addEventListener("mousedown", click);

