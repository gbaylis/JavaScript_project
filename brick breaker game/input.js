/*
created by gbaylis
Dec 27th 2019
*/

export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", event => {
      constructor(paddle, game) {
        document.addEventListener("keydown", event => {
          switch (even.keyCode) {
              
              // pressing the left arrow key
            case 37:
              paddle.moveLeft();
              break;
              
              // pressing the right arrow key
            case 39:
              paddle.moveRight();
              break;
              
              // pressing the space bar to pause the game
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
              
              // case 39, when pressing the right arrow key on the keyboard
              if (paddle.speed > 0) paddle.stop();
              break;
          }
        });
      }
    }
            case 39:
      
