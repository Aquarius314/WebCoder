var gameIsOn = true;

var btnStop = document.getElementById('gameButton');
btnStop.onclick = function() {
  console.log(btnStop.textContent);
  if(gameIsOn) {
    btnStop.textContent = "Run game";
  } else {
    btnStop.textContent = "Stop game";
  }
  gameIsOn = !gameIsOn;
}

var btnReset = document.getElementById('resetButton');
btnReset.onclick = function() {
  console.log("Reset!");
  init();
}

function gameLoop() {
  if(gameIsOn) {

    // console.log("game is ON");
    calculate();
    render();
    myLoop();
  }
}

function myLoop() {
  console.log("myLoop function not overridden!");
}

init();
setInterval(gameLoop, defaultFPSDividor);
// setInterval(loopingFunction, 100);
