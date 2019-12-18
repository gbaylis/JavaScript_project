/*
brick.js
Created by gbaylis
date: Dec 17th 2019
*/

import { detectCollision } from "./collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");
