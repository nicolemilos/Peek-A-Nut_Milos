import { BaseGameObject } from "./baseGameObject.js";
import {global} from "../modules/global.js";

class Block extends BaseGameObject{
    name="Block";
    
    constructor(x,y,width,height, imageSrc){
       super(x,y,width, height)
       this.image = new Image(); 
       this.image.src = imageSrc; 
    
    }


}

export {Block};