var canvas = document.getElementById('myCanvas');

class Ball{
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.speedX = 0;
    this.speedY = 0;
    this.color = "#FF0000";
    this.lastPositions = [];
  }

  isFalling() {
    return true;
  }

  gravity() {
    // gravity of absolute bottom
    if(this.isFalling()) {
      this.speedY += 0.5;
    }
    // natural loosing speed
    this.speedX *= 0.995;
    this.speedY *= 0.98;
    // maximum Y speed
    if(this.speedY > defMaxSpeedY) {
      this.speedY = defMaxSpeedY;
    }
  }

  distanceToLine(line) {
    var a = line.aParam();
    var b = line.bParam();
    var distanceToLine = Math.abs(-a*this.x + this.y - b)/Math.sqrt(a*a+1);
    return distanceToLine;
  }

  checkCollisions() {
    // temporary: only 1 line to check
    for(var i = 0; i < lines.length; i++) {
      if(this.x > lines[i].x1-this.radius && this.x < lines[i].x2+this.radius) {
        if(this.distanceToLine(lines[i]) <= this.radius) {
          this.bounceLine(lines[i]);
        }
      }
    }
  }

  rotateVector2d(x, y, ang) {
    var resultX = x*Math.cos(ang) - y*Math.sin(ang);
    var resultY = x*Math.sin(ang) + y*Math.cos(ang);
    return [resultX, resultY];
  }

  bounceLine(l) {
    // var tmp = this.speedX;
    // this.speedX = this.speedY;
    // this.speedY = tmp;

    var dX = this.speedX;
    var dY = this.speedY;
    var angA = Math.atan2(dX, dY);//*180/Math.PI;

    dX = l.x2-l.x1;
    dY = l.y2-l.y1;
    var angB = Math.atan2(dX, dY);//*180/Math.PI;

    var ang = (angA-angB)*2;

    // console.log("a: " + angA + " b: " + angB + " 2(a-b): " + angToRotate);

    // this.speedX = this.speedX*Math.cos(angToRotate) - this.speedY*Math.sin(angToRotate);
    // this.speedY = this.speedX*Math.sin(angToRotate) + this.speedY*Math.cos(angToRotate);

    // var res = rotateVector2d(this.speedX, this.speedY, angToRotate);
    // this.speedX = res[0];
    // this.speedY = res[1];
    var x = this.speedX, y = this.speedY;
    this.speedX = (x*Math.cos(ang) - y*Math.sin(ang))*0.9;
    this.speedY = (x*Math.sin(ang) + y*Math.cos(ang))*0.9;

    // result[0] = x * Math.Cos(degrees) - y * Math.Sin(degrees);
    // result[1] = x * Math.Sin(degrees) + y * Math.Cos(degrees);

  }

  actions() {
    this.move(this.speedX, this.speedY);
    this.bounceWalls();
    this.gravity();
    this.checkCollisions();
    this.lastPositions.push(new Ball(this.x, this.y, 1));
    if(this.lastPositions.length > 100) {
      this.lastPositions.shift();
    }
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
