var ball = new Ball(200, 200, 40);
var ground = new Ground();
var lines = [];
// var line1 = new Line(10,130, 720,330);
//
// lines.push(line1);
// lines.push(new Line(300,200, 570,160));
//

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function p2l(p1, p2) {
  lines.push(new Line(p1.x, p1.y, p2.x, p2.y));
}

var A = new Point(80, 100);
var B = new Point(200, 200);
var C = new Point(100, 300);
var D = new Point(50, 200);

p2l(A,B);
p2l(B,C);
p2l(C,D);
p2l(D,A);
