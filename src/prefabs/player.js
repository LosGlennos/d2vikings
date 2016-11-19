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
        this.playerPointer = this.game.input.activePointer;
        this.game.physics.arcade.enable(this);

        this.wasd = {
            up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
            down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
            left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
            right: this.game.input.keyboard.addKey(Phaser.Keyboard.D),
        };
    }

    update() {
        this.setPlayerAnimation();
        this.setPlayerVelocity();
    }

    setPlayerAnimation() {
        let pointer = this.game.input.activePointer;
        let angle = Math.atan2(pointer.y - this.y, pointer.x - this.x);
        let animation = ''

        if (angle < 0.39 && angle >= -0.39) {
            animation = 'right';
        } else if (angle >= 0.39 && angle < 1.18) {
            animation = 'rightdown';
        } else if (angle >= 1.18 && angle < 1.87) {
            animation = 'down';
        } else if (angle >= 1.87 && angle < 2.66) {
            animation = 'leftdown';
        } else if (angle >= 2.66 || angle < -2.66) {
            animation = 'left'
        } else if (angle >= -2.66 && angle < -1.87) {
            animation = 'leftup';
        } else if (angle >= -1.87 && angle < -1.18) {
            animation = 'up';
        } else if (angle >= -1.18 && angle < -0.39) {
            animation = 'rightup';
        }

        this.animations.play(animation)
    }

    setPlayerVelocity() {
        let velocityX = 0;
        let velocityY = 0;

        this.body.velocity.x = velocityX;
        this.body.velocity.y = velocityY;

        if (this.wasd.right.isDown) {
            velocityX += 150;
        }

        if (this.wasd.left.isDown) {
            velocityX -= 150;
        }

        if (this.wasd.down.isDown) {
            velocityY += 150;
        }

        if (this.wasd.up.isDown) {
            velocityY -= 150;
        }

        this.body.velocity.x = velocityX;
        this.body.velocity.y = velocityY;

        if (velocityX === 0 && velocityY === 0) {
            this.animations.stop();
        }
    }
}


export default Player;
