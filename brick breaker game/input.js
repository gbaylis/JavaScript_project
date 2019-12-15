export default class InputHandler {
  constructor(paddle, game) {
    document.addWeventListener("keydown", event => {
      switch (even.keyCode) {
          
          //case 37, refers to pressing the left key on the keyboard
        case 37:
        paddle.moveLeft();
         break;
          
     // 39 refers to pressing the right arrow key on the keyboard     
        case 39:
          paddle.moveRight();
          break;
          
        case 27:
          game.togglePause();
          break;
          
        case 32:
          game.start();
          break;
      }
    });
    
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
         if (paddle.speed < 0) paddle.stop();
          break;
          
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });
  }
}
    
    
          
