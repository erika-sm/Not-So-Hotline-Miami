class Bullet {
  constructor(theRoot) {
    this.root = theRoot;
    this.x = PLAYER_POSITION;
    this.y = 400;
    this.destroyed = false;

    this.domElement = document.createElement("img");

    this.domElement.src = "./images/bullet2.png";

    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.zIndex = 5;
    this.speed = 2;

    theRoot.appendChild(this.domElement);
  }

  shoot = () => {
    if (this.last === undefined) {
      this.last = new Date().getTime();
    }

    setInterval(() => {
      let time = new Date().getTime() - this.last;

      this.last = new Date().getTime();

      this.bulletMove(time);
    }, 20);
  };

  bulletMove(time) {
    this.y = this.y - time * this.speed;
    BULLET_POSITION = this.y;
    this.domElement.style.top = `${this.y}px`;
    if (this.y < 0) {
      this.domElement.remove();
      this.destroyed = true;
    }
  }
}
