
const GAME_WIDTH = 375;
const GAME_HEIGHT = 500;

const ENEMY_WIDTH = 75;
const ENEMY_HEIGHT = 56;
const MAX_ENEMIES = 3;

const PLAYER_WIDTH = 75;
const PLAYER_HEIGHT = 75;

let PLAYER_POSITION = 2 * PLAYER_WIDTH;

let ENEMY_POSITION_X = 0;
let ENEMY_POSITION_Y = 0;

let BULLET_POSITION = 0;

let SHOT_POSITION = 0;

let deadEnemy = 0;

let scoreTally = 0;
let bonus = 0;
let gameOver = false;
