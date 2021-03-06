class Preloader extends Phaser.State {

  constructor() {
    super();
    this.asset = null;
    this.ready = false;
  }

  preload() {
    //setup loading bar
    this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
    this.load.setPreloadSprite(this.asset);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.loadResources();
  }

  update() {
      if (this.ready) {
        this.game.state.start('menu');
      }
  }

  loadResources() {
      this.game.load.spritesheet('blue_viking', 'assets/Viking_Blue_Moving.png', 72, 72, 32);
      this.game.load.spritesheet('bullets', 'assets/bullet.png', 16, 16, 4);
  }

  onLoadComplete() {
    this.ready = true;
  }
}

export default Preloader;
