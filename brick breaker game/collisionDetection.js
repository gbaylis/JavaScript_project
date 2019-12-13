export function detectCollision(ball, gameObject) { 
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  
  let topOfObject = gameObject.position.y;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObjet = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.positio0n.y + gameObject.height;
  
  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideObject
    {
