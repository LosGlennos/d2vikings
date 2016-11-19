class Bullet extends Phaser.Sprite {
    constructor(game, x, y, frame) {
        super(game, x, y, 'bullet', frame);

        this.create(this.game);
    }

    create(game) {
        this.bullets = game.add.group();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

        this.bullets.createMultiple(50, 'bullets');
        this.bullets.setAll('checkWorldBounds', true);
        this.bullets.setAll('outOfBoundsKill', true);

        this.nextFire = 0;
    }

    fire(rotation, player, animation) {
        if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0) {
            this.nextFire = this.game.time.now + 100;

            var bullet = this.bullets.getFirstDead();
            bullet.rotation = rotation;
            bullet.reset(player.x + this.getOffset(animation).x, player.y + this.getOffset(animation).y);

            this.game.physics.arcade.moveToPointer(bullet, 300);
        }

    }

    getOffset(animation) {
        let returnValue = { x: 0, y: 0 }
        switch (animation) {
            case 'right':
                returnValue.x = 72;
                returnValue.y = 33;
                break;
            case 'left':
                returnValue.x = 0;
                returnValue.y = 44;
                break;
            case 'up':
                returnValue.x = 36;
                returnValue.y = 33;
                break;
            case 'down':
                returnValue.x = 36;
                returnValue.y = 33;
                break;
            case 'rightdown':
                returnValue.x = 50;
                returnValue.y = 44;
                break;
            case 'leftdown':
                returnValue.x = 30;
                returnValue.y = 50;
                break;
            case 'rightup':
                returnValue.x = 50;
                returnValue.y = 35;
                break;
            case 'leftup':
                returnValue.x = 10;
                returnValue.y = 44;
                break;
        }
        return returnValue;
    }
}

export default Bullet;
