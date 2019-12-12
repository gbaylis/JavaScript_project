import { detectCollision } from "./collisionDetection";

export default class Brick { 
  constructor(game, position) { 
    this.image = document.getElementById("img_brick");
    
