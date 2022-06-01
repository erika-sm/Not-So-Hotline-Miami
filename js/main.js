
const gameEngine = new Engine(document.getElementById("app"));

document.addEventListener("keydown", function () {
    gameEngine.gameLoop();
  },
  { once: true }
);

const keydownHandler = (event) => {
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }

  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }

  if (event.code === "ArrowUp") {
    gameEngine.shooting();
  }
};

document.addEventListener("keydown", keydownHandler);
