class Player extends Phaser.Sprite {
    constructor(game, x, y, frame) {
        super(game, x, y, 'blue_viking', frame);

        this.animations.add('up', [0, 1, 2, 3], 10, true);
        this.animations.add('down', [4, 5, 6, 7], 10, true);
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.physics.arcade.enable(this);
    }

    update() {
        let velocityX = 0;
        let velocityY = 0;

        this.body.velocity.x = velocityX;
        this.body.velocity.y = velocityY;

        if (this.cursors.right.isDown) {
            velocityX += 150;
        }

        if (this.cursors.left.isDown) {
            velocityX -= 150;
        }

        if (this.cursors.down.isDown) {
            velocityY += 150;
        }

        if (this.cursors.up.isDown) {
            velocityY -= 150;
        }

        if (velocityX === 0 && velocityY === 0) {
            this.animations.stop();
            this.frame = 4;
        } else {
            this.body.velocity.x = velocityX;
            this.body.velocity.y = velocityY;

            let directionY = velocityY > 0 ? 'down' : 'up';

            this.animations.play(directionY);
        }
    }
}

export default Player;