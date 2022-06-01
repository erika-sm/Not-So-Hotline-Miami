
class Enemy {
  constructor(theRoot, enemySpot) {

    this.root = theRoot;
    this.spot = enemySpot;

    this.x = enemySpot * ENEMY_WIDTH;
    ENEMY_POSITION_X = this.x;

    this.y = -ENEMY_HEIGHT;
    this.destroyed = false;

    let enemyNum = 1 + Math.floor(Math.random() * 4);
    let enemyName = "./images/enemy" + enemyNum + ".png";

    this.domElement = document.createElement("img");

    this.domElement.src = enemyName;
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.zIndex = 5;

    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 8 + 0.25;

  }

  update(timeDiff) {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = `${this.y}px`;
    ENEMY_POSITION_Y = this.y;

    if (
      this.y > GAME_HEIGHT ||
      (this.x === SHOT_POSITION && this.y >= BULLET_POSITION - 100)
    ) {
      this.root.removeChild(this.domElement);
      bonus += 50;
      this.destroyed = true;
    }
  }
}
