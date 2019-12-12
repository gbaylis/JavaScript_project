import { detectCollision } from "./collisionDetection";

export default class Brick { 
  constructor(game, position) { 
    this.image = document.getElementById("img_brick");
    
    this.game = game;
    
    this.position = position;
    this.width = 80;
    this.height = 24;
    
