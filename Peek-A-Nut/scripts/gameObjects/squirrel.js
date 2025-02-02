import { BaseGameObject } from "./baseGameObject.js";
import {global} from "../modules/global.js";

class Squirrel extends BaseGameObject{
    name="Squirrel";
    
    constructor(x,y,width,height){
       super(x,y,width, height)
       this.loadImagesFromSpritesheet("../images/squirrelfertig.PNG", 4, 4 );

    }

}

export {Squirrel};