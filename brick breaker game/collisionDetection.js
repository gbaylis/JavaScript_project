/*
Created by gbaylis
Dec 23rd 2019
*/

export function detectCollision(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  
  let topofObject = gameObject.position.y;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  
  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= leftSideofObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideOfObject
    ) {
    return true;
  } else {
    return false;
  }
}
