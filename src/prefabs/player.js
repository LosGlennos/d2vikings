class Player extends Phaser.Sprite {
    constructor(game, x, y, frame) {
        super(game, x, y, 'blue_viking', frame);

        this.animations.add('up', [0, 1, 2, 3], 10, true);
        this.animations.add('down', [4, 5, 6, 7], 10, true);
        this.animations.add('left', [8, 9, 10, 11], 10, true);
        this.animations.add('right', [12, 13, 14, 15], 10, true);
        this.animations.add('leftdown', [16, 17, 18, 19], 10, true);
        this.animations.add('rightdown', [20, 21, 22, 23], 10, true);
        this.animations.add('leftup', [24, 25, 26, 27], 10, true);
        this.animations.add('rightup', [28, 29, 30, 31], 10, true);
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
        } else {
            this.body.velocity.x = velocityX;
            this.body.velocity.y = velocityY;

            let animation = ''

            if (velocityY > 0 && velocityX > 0) {
                animation = 'rightdown'
            } else if (velocityY > 0 && velocityX < 0) {
                animation = 'leftdown'
            } else if (velocityY < 0 && velocityX > 0) {
                animation = 'rightup'
            } else if (velocityY < 0 && velocityX < 0) {
                animation = 'leftup'
            } else if (velocityY > 0 && velocityX === 0) {
                animation = 'down'
            } else if (velocityY < 0 && velocityX === 0) {
                animation = 'up'
            } else if (velocityY === 0 && velocityX < 0) {
                animation = 'left'
            } else if (velocityY === 0 && velocityX > 0) {
                animation = 'right'
            }

            this.animations.play(animation)
        }
    }
}

export default Player;