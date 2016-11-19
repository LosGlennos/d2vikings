import Player from '../prefabs/player';

class Game extends Phaser.State {

    constructor() {
        super();
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.player = new Player(this.game, 0, 0);
        this.game.add.existing(this.player);

    }

    update() {

    }

    endGame() {
        this.game.state.start('gameover');
    }
}

export default Game;
