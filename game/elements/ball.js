var canvas = document.getElementById('myCanvas');

class Ball{
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.speedX = 0;
    this.speedY = 0;
  }

  isFalling() {
    return true;
  }

  gravity() {
    // gravity of absolute bottom

    if(this.isFalling()) {
      this.speedY += 1;
    }

    // natural loosing speed
    this.speedX *= 0.995;
    this.speedY *= 0.98;

    // check collisions
    this.checkCollisions();

  }

  checkCollisions() {
    // temporary: only 1 line to check
    var l = line;
    var a = l.aParam();
    var b = l.bParam();
  }

  bounceLine() {

  }

  actions() {
    this.move(this.speedX, this.speedY);
    this.bounceWalls();
    this.gravity();
  }

  setSpeed(speedX, speedY) {
    this.speedX = speedX;
    this.speedY = speedY;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
    if(this.x+this.radius > canvas.width) {
      this.x = canvas.width-this.radius;
    }
    if(this.x-this.radius < 0) {
      this.x = this.radius;
    }
    if(this.y+this.radius > canvas.height) {
      this.y = canvas.height-this.radius;
    }
    if(this.y-this.radius < 0) {
      this.y = this.radius;
    }
  }

  moveTo(x, y) {
    if(x > 0 && x < canvas.width){
      this.x = x;
    }
    if(y > 0 && y < canvas.width) {
      this.y = y;
    }
  }

  resize(r) {
    if(r > 0) {
      this.radius = r;
    }
  }

  bounceWalls() {
    if(this.x === canvas.width-this.radius || this.x === this.radius) {
      this.speedX = (-this.speedX*0.6);
    }
    if(this.y === canvas.height-this.radius || this.y === this.radius) {
      this.speedY = (-this.speedY*0.9);
    }
  }

}
