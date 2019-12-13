export function detectCollision(ball, gameObject) { 
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  
  let topOfObject = gameObject.position.y;
