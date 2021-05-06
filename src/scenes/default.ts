import logoImg from "../assets/logo.png";

export class DefaultScene extends Phaser.Scene
{
    constructor ()
    {
        super('default');
    }

    preload ()
    {
        this.load.image('logo', logoImg);
    }

    create ()
    {
        const logo = this.add.image(400, 150, 'logo');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}