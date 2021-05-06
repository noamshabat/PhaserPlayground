import Phaser from "phaser";
import catwalk from "../assets/catwalk.png";
import catrun from "../assets/catrun.png";
import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;

export class Cat extends Phaser.GameObjects.Container {
    sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
    cursors: CursorKeys

    constructor(scene: Phaser.Scene, x: number, y: number, walk: string, run: string) {
        super(scene, x, y)
        this.sprite = scene.physics.add.sprite(300, 200, walk)
        this.sprite.setCollideWorldBounds(true)

        let catwalk = scene.anims.create({
            key: 'catwalk_walk',
            frames: scene.anims.generateFrameNumbers('catwalk', {}),
            frameRate: 24,
        })

        const walkLeft = () => {
            this.sprite.flipX = true
            this.sprite.play({ key: 'catwalk_walk', repeat: Phaser.FOREVER })
            this.sprite.setVelocityX(-150);
        }
        const walkRight = () => {
            this.sprite.flipX = false
            this.sprite.play({ key: 'catwalk_walk', repeat: Phaser.FOREVER })
            this.sprite.setVelocityX(150);
        }
        const stand = () => {
            this.sprite.stop()
            this.sprite.setVelocityX(0)
        }
        this.cursors = scene.input.keyboard.createCursorKeys();
        this.cursors.left.on('down', walkLeft)
        this.cursors.right.on('down', walkRight)
        this.cursors.right.on('up', stand)
        this.cursors.left.on('up', stand)
    }
}

export function useCat(scene: Phaser.Scene) {
    scene.load.spritesheet('catrun', catrun, {
        frameWidth: 269,
        frameHeight: 149,
        endFrame: 12,
        spacing: 1,
    })
    scene.load.spritesheet('catwalk', catwalk, {
        frameWidth: 144,
        frameHeight: 120,
    })
    Phaser.GameObjects.GameObjectFactory.register('cat',
        function (x: number, y: number) {
        const cat = new Cat(this.scene, x, y, 'catwalk', 'catrun')

        this.displayList.add(cat)

        this.scene.physics.world.enableBody(cat, Phaser.Physics.Arcade.DYNAMIC_BODY)

        return cat
    })
}
