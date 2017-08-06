var defR = 10;
var defX = 100, defY = defR+1;
var defSpeedX = 0;
var defSpeedY = 0;

var defaultFPSDividor = 10;
var defMaxSpeedY = defR*2-1;

function changeDefaults(defaultX, defaultY, defaultR, defaultSX, defaultSY) {
  defX = defaultX;
  defY = defaultY;
  defR = defaultR;
  defSpeedX = defaultSX;
  defSpeedY = defaultSY;
}

function init() {
  ball.moveTo(defX, defY);
  ball.resize(defR);
  ball.setSpeed(defSpeedX, defSpeedY);
}
