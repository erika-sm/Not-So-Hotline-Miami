
class Engine {
  constructor(theRoot) {

    this.root = theRoot;

    this.player = new Player(this.root);
    this.enemies = [];

    this.sound = new Sound(this.root);
    this.menuM = new MenuMu(this.root);

    addBackground(this.root);
    start(this.root);
    score(this.root);
  }

  gameLoop = () => {
    this.menuM.pause();
    this.sound.show();
    this.sound.play();

    if (this.lastFrame === undefined) {
      this.lastFrame = new Date().getTime();
    }

    let timeDiff = new Date().getTime() - this.lastFrame;

    this.lastFrame = new Date().getTime();

    this.enemies.forEach((enemy) => {
      enemy.update(timeDiff);
    });

    this.enemies = this.enemies.filter((enemy) => {
      return !enemy.destroyed;
    });

    while (this.enemies.length < MAX_ENEMIES) {
      const spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }

    if (this.isPlayerDead()) {
      retry(this.root);
      this.sound.hide();
      this.menuM.currentTime = 0.0;
      this.menuM.play();
      this.sound.pause();
      dead(this.root);
      gameOver = true;
      return;
    }
    
    setTimeout(this.gameLoop, 20);
  };

  isPlayerDead = () => {
    for (let i = 0; i <= 2; i++) {
      if (
        this.enemies[i].x === this.player.x &&
        this.enemies[i].y >= this.player.y - PLAYER_HEIGHT + 60 &&
        this.enemies[i].y <= 436
      )
        return true;
    }
  };

  shooting = () => {
    SHOT_POSITION = PLAYER_POSITION;
    this.bullets = new Bullet(this.root);
    this.bullets.shoot();
  };
}
