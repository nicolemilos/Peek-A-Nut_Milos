import { BaseGameObject } from "./baseGameObject.js";
import {global} from "../modules/global.js";

class Nut extends BaseGameObject{
    name="Nut";
    
    constructor(x,y,width,height, imageSrc){ // Same here I added imageSrc so i can use different types of nuts for the same class nuts
       super(x,y,width, height)
       this.image = new Image(); 
       this.image.src = imageSrc; 
        console.log("Nut created art:", x,y);

        this.image.onload = () => { // this is for me so i can just put in the width when creating all the nuts in main & also bc I don't want it even more pixely
            if (height === "auto") {
                this.height = (this.image.height / this.image.width) * this.width;
            }
        }
    }


}

export {Nut};