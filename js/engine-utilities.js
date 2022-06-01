const nextEnemySpot = (enemies) => {
  const enemySpots = GAME_WIDTH / ENEMY_WIDTH;

  const spotsTaken = [false, false, false, false, false];
  enemies.forEach((enemy) => {
    spotsTaken[enemy.spot] = true;
  });

  let candidate = undefined;
  while (candidate === undefined || spotsTaken[candidate]) {
    candidate = Math.floor(Math.random() * enemySpots);
  }
  return candidate;
};

const addBackground = (root) => {
  const bg = document.createElement("img");

  bg.src = "images/hm.gif";
  bg.style.height = `${GAME_HEIGHT}px`;
  bg.style.width = `${GAME_WIDTH}px`;

  root.append(bg);

  const whiteBox = document.createElement("div");

  whiteBox.style.zIndex = 100;

  whiteBox.style.position = "absolute";
  whiteBox.style.top = `${GAME_HEIGHT}px`;
  whiteBox.style.height = "100px";
  whiteBox.style.width = `${GAME_WIDTH}px`;
  whiteBox.style.background = "#fff";
  root.append(whiteBox);

  const sideBar = document.createElement("div");

  sideBar.style.zIndex = 1;
  sideBar.style.backgroundImage = "url('images/background2.png')";
  sideBar.style.position = "absolute";
  sideBar.style.height = "492px";
  sideBar.style.top = "8px";
  sideBar.style.width = "125px";
  sideBar.style.left = "383px";
  sideBar.style.textAlign = "center";
  sideBar.innerHTML =
    "<span style='color: white; font-weight: bold; font-size: 15px; font-family: Courier New, monospace;'><br> <br><br> <br> <br><br> <br>Shoot &#x2B06; <br> Move Left &#11013; <br> Move Right &#11157; </span>";
  root.append(sideBar);
};

const start = (root) => {
  const startGame = document.createElement("div");

  startGame.style.background = "rgba(0, 200, 20, 0.4)";
  startGame.style.textAlign = "center";
  startGame.style.border = "solid";
  startGame.style.borderColor = "white";
  startGame.innerHTML =
    "<span style='color: white; font-weight: bold; font-size: 17px; font-family: Courier New, monospace;'>Welcome to Not-So-Hotline Miami <br> <br> <br> How To Play: Survive the wave of enemies by either dodging or shooting them. <br><br> Point System: 25 points per second + 50 points for shooting or dodging an enemy. <br><br> Press any key to start! <br> <br> (Turn on your sound!) </span>";
  startGame.style.position = "absolute";
  startGame.style.zIndex = 2;
  startGame.style.height = "280px";
  startGame.style.top = "100px";
  startGame.style.width = "368px";
  startGame.style.left = "9px";
  startGame.style.display = "block";

  document.addEventListener(
    "keydown",
    function () {
      startGame.style.display = "none";
    },
    { once: true }
  );

  root.append(startGame);
};

const score = (root) => {
  const scoreboard = document.createElement("div");

  scoreboard.style.position = "absolute";
  scoreboard.style.zIndex = 1000;
  scoreboard.style.height = "200px";
  scoreboard.style.top = "20px";
  scoreboard.style.width = "150px";
  scoreboard.style.left = "390px";
  scoreboard.style.background = "transparent";
  scoreboard.style.display = "none";

  document.addEventListener(
    "keydown",
    function () {
      const countdown = setInterval(function () {
        scoreTally++;
        scoreboard.style.display = "block";
        scoreboard.innerHTML =
          "<span style='color: white; font-weight: bold; font-size: 15px; font-family: Courier New, monospace;'> Score: " +
          (scoreTally + bonus) +
          "</span>";
        if (gameOver) {
          clearInterval(countdown);
        }
      }, 25);
    },
    { once: true }
  );
  root.append(scoreboard);
};

const dead = (root) => {
  const over = document.createElement("div");

  over.style.background = "rgba(0, 20, 20, 0.6)";
  over.style.textAlign = "center";
  over.style.border = "solid";
  over.style.borderColor = "white";
  over.style.position = "absolute";
  over.style.zIndex = 100;
  over.style.height = "280px";
  over.style.top = "100px";
  over.style.width = "368px";
  over.style.left = "9px";
  over.style.display = "block";
  over.innerHTML =
    "<span style='color: white; font-weight: bold; font-size: 17px; font-family: Courier New, monospace;'><br><br><br>You Died <br><br> Base score: " +
    scoreTally +
    "<br> Bonus score: " +
    bonus +
    "<br>Final score: " +
    (scoreTally + bonus) +
    "</span>";

  root.append(over);
};

const retry = (root) => {
  const but = document.createElement("button");
  but.innerHTML =
    "<span style='color: white; font-weight: bold; font-size: 15px; font-family: Courier New, monospace;'> Try again? </span>";
  but.style.background = "black";
  but.style.position = "absolute";
  but.style.zIndex = 200;
  but.style.height = "30px";
  but.style.top = "275px";
  but.style.width = "150px";
  but.style.left = "119px";
  but.style.display = "block";
  but.addEventListener("click", () => {
    window.location.reload();
  });
  root.append(but);
};
