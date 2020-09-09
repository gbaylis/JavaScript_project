/*
Brick Breaker game
levels.js
*/

import Brick from "/src/brick";

export function buildLevel(game, level) {
  let bricks = [];
  
  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
     if (brick === 1) {
       let position = {
         x: 80 * brickIndex,
         y: 75 + 24 * rowIndex
       };
       bricks.push(new Brick(game, position));
     }
    });
  });
  
  return bricks;
}

export const level = [
  // a 1 represents a brick in the row, a 0 means an empty space
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0]
  ];

export const level2 = [
  // you can change the brick patter, by changing 0 to 1 or vice versa
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
  
  
  
  
         

