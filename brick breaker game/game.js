/*
Created by gbaylis 
Dec 24th 2019
*/

import Paddle from "/src/paddle";
import inputHandler from "/src/input";
import Ball from "/src/ball";
import Brick from "/src/ball";

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
export default class Game {
  constructor(gameWidth, gameHeight, bricksPerRow) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gamestate = GAMESTATE.MENU;
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
    this.gameObjects = [];
    this.bricks = [];
    this.lives = 3;
    
    // 5th block of code
    this.levels = [level1, level2];
    this.currentLevel = 0;
    
    // 6th block of code
    new InputHandler(this.paddle, this);
  }
  
  // 7th block of code
  start() {
    if (
      this.gamestate !== GAMESTATE.MENU &&
      this.gamestate !== GAMESTATE.NEWLEVEL
      )
      return;
    
    // 8th block of code
    this.bricks = buildLevel(this, this.levels[this.currentLevel]);
    this.ball.reset();
    this.gameObjects = [this.ball, this.paddle];
    
    // 9th block of code
    this.gamestate = GAMESTATE.RUNNING;
  }
  
  // 10th block of code
  update(deltaTime) {
    if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;
    
    // 11th block of code
    if (
      this.gamestate === GAMESTATE.PAUSED ||
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.GAMEOVER
      )
      return;
    
    // 12th block of code
    if (this.bricks.length === 0) {
      this.currentLevel++;
      this.gamestate = GAMESTATE.NEWLEVEL;
      this.start();
    }
    
    // 13th block of code
    [...this.gameObjects, ...this.bricks].forEach(object =>
    object.update(deltaTime)
                                                  );
    
    // 14th block of code
    this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);
  
