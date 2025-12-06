import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Localization } from "./localization";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { ThemeFacade } from "./themeFacade";

export class Text{
    private key: string = "Should Not Be Read";
    private mesh: THREE.Mesh;
    private static loader = new FontLoader;
    private static font: Font;
    private static Font_Size: number = 2;
    private static Font_Depth: number = .5;
    private static Mesh_Rot: number = -Math.PI / 2
    
    constructor(key: string){
        this.key = key;
        Text.initFont();
        const geometry: TextGeometry= new TextGeometry(Localization.getText(key), {
            font: Text.font,
            size: Text.Font_Size,
            depth: Text.Font_Depth
        })
        this.mesh = new THREE.Mesh(geometry, ThemeFacade.getAsset<THREE.Material>("text_Material"));
        this.mesh.rotation.x = Text.Mesh_Rot;

        this.mesh.position.set( 0, 1 , -6);//Temp Magic Numbers 
    }

    static async initFont(){
        switch (Localization.getLanguage()){
            case "en":
                Text.font = await Text.loader.loadAsync( 'node_modules/three/examples/fonts/helvetiker_regular.typeface.json' );
                break;
            case "jp":
                Text.font = await Text.loader.loadAsync( 'mplus-msdf.json' );
                break;
            case "ar":
                Text.font = await Text.loader.loadAsync( 'Roboto_Regular.json' );
                break;
        }
    }

    get() {
        return this;
    }

    get_Mesh(){
        return this.mesh;
    }

    set_Key(key: string){
        this.key = key;
    }
}