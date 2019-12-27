/*
Created by gbaylis 
Dec 24th 2019
*/

// 1st block of code
import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";
import Brick from "/src/brick";

// 2nd block of code 
import { buildLevel, level1, level2 } from "/src/levels";

// 3rd block of code
const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLEVEL: 4
};

// 4th block of code
this.levels = [level1, level2];
this.currentLevel = 0;

// 5th block of code
new InputHandler(this.paddle, this);
}

// 6th block of code
start() {
  if (
    this.gamestate !== GAMESTATE.MENU &&
    this.gamestate !== GAMESTATE.NEWLEVEL
    )
    return;
  
  // 7th block of code
  this.bricks = buildLevel(this, this.levels[this.currentLevel]);
  this.ball.reset();
  this.gameObjects = [this.ball, this.paddle];
  
  // 8th block of code
  this.gamestate = GAMESTATE.RUNNING[
    }
    
    // 9th block of code
    update(deltaTime) {
    if (this.lives === 0) this.gamesate = GAMESTATE.GAMEOVER;
    
    // 10th block of code
    if (
    this.gamestate === GAMESTATE.PAUSED ||
    this.gamestate === GAMESTATE.MENU ||
    this.gamestate === GAMESTATE.GAMEOVER
    )
    return;
    
    // 11th block of code
    if (this.bricks.length === 0) {
    this.currentLevel++;
    this.gamestate = GAMESTATE.NEWLEVEL;
    this.start();
    }
    
    // 12th block of code
    [...this.gameObjects, ...this.bricks].forEach(object =>
    object.update(deltaTime)
                                                  );
  
  // 13th block of code
  this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);
}

//14th block of code
draw(ctx) {
  [...this.gameObjects, ...this.bricks].forEach(object => object.draw(ctx));

// 15th block of code
  if (this.gamestate === GAMESTATE.PAUSED) {
    ctx.rect(0, 0, this.gameWidth, this.gameHeight);
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fil();
    
    //16th block of code
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
