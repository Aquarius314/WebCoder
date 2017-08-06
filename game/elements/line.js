class Line{
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = "#000000";
  }

  aParam() {
    return (this.y2-this.y1)/(this.x2-this.x1);
  }

  bParam() {
    return (this.y1*this.x2-this.y2*this.x1)/(this.x2-this.x1);
  }

  getEquation() {
    var a = parseFloat(this.aParam()).toFixed(3);
    var b = parseFloat(this.bParam()).toFixed(3);
    return "y = " + a + "x + " + b;
  }

}
