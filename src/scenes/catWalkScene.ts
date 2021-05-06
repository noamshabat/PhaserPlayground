import catwalk from '../assets/catwalk.png'
import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;
import {useCat} from "../gameObjects/cat";

export class CatWalkScene extends Phaser.Scene {
    constructor ()
    {
        super('catwalk');
    }

    preload ()
    {
        useCat(this)
    }

    create ()
    {
        // @ts-ignore - we registered it.
        this.add.cat(300, 200)
    }
}