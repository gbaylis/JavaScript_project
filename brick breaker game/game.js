import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";
import Brick from "/src/brick";

import { buildLevel, level1, level2 } from "/src/levels";

const GAMESTATE = {
PAUSED: 0,
RUNNING: 1,
MENU: 2,
GAMEOVER: 3,
NEWLEVEL: 4
};

export default class Game {
constructor(gameWidth, gameHeight, bricksPerRow) {
this.gameWidth = gameWidth;
this.gameHeight = gameHeight;
this.gamestate = GAMESTATE.MENU;
this.ball = new BALL(this);
this.paddle = new Paddle(this);
this.gameObjects= [];
this.bricks = [];
this.lives = 3;

this.levels = [level1, level2];
this.currentLevel = 0;

new InputHandler(this.paddle, this);
}

start() {
