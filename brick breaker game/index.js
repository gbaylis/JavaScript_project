/*
JS
Bricker Breaker game / index.js
created by gbaylis
Dec 9th, 2019 . 
*/

import Game from "/src/game";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new GAME(GAME_WIDTH, GAME_HEIGHT);

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;
function gameLoop(timestamp) {
let deltaTIme = timestamp - lastTime;
  lastTime = timestamp;
  


