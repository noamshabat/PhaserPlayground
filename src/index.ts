import Phaser from 'phaser';
import { DefaultScene } from './scenes/default'
import { CatWalkScene } from './scenes/catWalkScene'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: CatWalkScene,
    backgroundColor: '#cccccc',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};

const game = new Phaser.Game(config);
