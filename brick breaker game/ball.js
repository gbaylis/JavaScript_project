/*
Created by gbaylis
Dec 10, 2019
JS - ball.js
*/

import { detectCollision } from "./collisionDetection";

export default class Ball {
constructor(game) {
this.image = document.getElementById("img_ball");

this.gameWidth = game.gameWidth;
this.gameHeight = game.gameHeight;

this.game = game;
this.size = 16;
this.reset();
}

reset() {
this.position = { x: 10, y: 400 };
this.speed = { x: 4, y: -2} ;
}

draw(ctx) {
ctx.drawO,age(
this.image,
this.position.x,
this.position.y,
