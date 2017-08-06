class Edge {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

var totalEdges = 40;
var mountainsFactor = 10;

class Ground {
  constructor() {
    this.edges = [];
    var ex = 0, ey = canvas.height/2;
    for(var i = 1; i <= totalEdges; i++) {
      this.edges.push(new Edge(ex, ey));
      ex = canvas.width*i/totalEdges;
      if(Math.random()>=0.3) {
        ey += Math.floor(Math.random()*mountainsFactor);
      } else {
        ey -= Math.floor(Math.random()*mountainsFactor);
      }
    }
    this.edges.push(new Edge(ex+100, ey));
  }
}
