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
if (
  this.gamestate !== GAMESTATE.MENU &&
  this.gamestate !== GAMESTATE.NEWLEVEL
  )
  return;  
  
  this.bricks = buildLevel(this, this.levels[this.currentLevel]);
  this.ball.reset();
  this.Objects = [this.ball, this.paddle];
  
  this.gamestate = GAMESTATE.RUNNING;
}
  
  update(deltaTime) {
    if (this.lives === 0) {
      
      if (
        this.gamestate === GAMESTATE.PAUSED ||
this.gamestate === GAMESTATE.MENU ||
        this.gamestate ==- GAMESTATE.GAMEOVER
        )
        return;
      
      if (this.bricks.length === 0) {
        this.currentLevel++;
        this.gamestate = GAMESTATE.NEWLEVEL;
        this.start();
      }
      
      [...this.gameObjects, ...this.bricks].forEach(object =>
      object.update(deltaTime)
      );
      
      this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);
    }
    
    draw(ctx) {
      [...this.gameObjects, ...this.bricks].forEach(object => object.draw(ctx));
      
if (this.gamestate === GAMESTATE.PAUSED) {
  ctx.rect(0, 0, this.gameWidth, this.gameHeight);
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.fill();

   ctx.font = "30px Arial";
  ctx.fillStyle = "white";
  
