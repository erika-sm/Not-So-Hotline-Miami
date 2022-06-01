
class Player {
  constructor(root) {
    this.x = 2 * PLAYER_WIDTH;

    const y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
    this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;

    this.domElement = document.createElement("img");
    this.domElement.src = "images/player2.png";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = "400px";
    this.domElement.style.zIndex = "10";
    root.appendChild(this.domElement);
  }

  moveLeft() {
    if (this.x > 7.5) {
      this.x = this.x - PLAYER_WIDTH;
      PLAYER_POSITION = this.x;
    }

    this.domElement.style.left = `${this.x}px`;
  }

  moveRight() {
    if (this.x < GAME_WIDTH) {
      this.x = this.x + PLAYER_WIDTH;
      PLAYER_POSITION = this.x;
    }
    this.domElement.style.left = `${this.x}px`;
  }
}
