import * as Three from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Localization } from "./localization";

export class Text{
    private key: string = "Should Not Be Read";
    
    constructor(key: string){
        this.key = key;
        //const geometry: TextGeometry
    }

    get() {
        return this;
    }


}