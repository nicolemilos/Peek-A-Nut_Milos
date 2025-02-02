import { BaseGameObject } from "./baseGameObject.js";
import {global} from "../modules/global.js";
class FakeNut extends BaseGameObject{
    name="FakeNut";
    
    constructor(x,y,width,height, imageSrc){ // I added imageSrc so i can use different pictures for the same FakeNut, etc
        super(x,y,width, height)
        this.image = new Image(); 
        this.image.src = imageSrc; 
        console.log("Nut created art:", x,y);
    }

}

export{FakeNut};