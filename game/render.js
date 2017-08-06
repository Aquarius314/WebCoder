var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.fillStyle = "#000088";
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();
  ctx.closePath();
}

function drawBall(b) {
  ctx.beginPath();
  ctx.fillStyle = b.color;
  ctx.arc(b.x, b.y, b.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.closePath();

  for(var i = 0; i < b.lastPositions.length; i++) {
    ctx.beginPath();
    ctx.arc(b.lastPositions[i].x, b.lastPositions[i].y, b.lastPositions[i].radius, 0, Math.PI*2, false);
    ctx.fill();
    ctx.closePath();
  }

}

function drawGround() {
  ctx.beginPath();
  ctx.fillStyle = "#006600";
  ctx.moveTo(0, 200);
  ctx.lineTo(ground.edges[0].x, ground.edges[0].y);
  for(var i = 0; i < ground.edges.length-1; i++) {
    ctx.lineTo(ground.edges[i+1].x, ground.edges[i+1].y);
  }
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.fill();
  ctx.closePath();
}

function drawLine(l) {
  ctx.beginPath();
  ctx.strokeStyle = l.color;
  ctx.lineWidth = 2;
  ctx.moveTo(l.x1, l.y1);
  ctx.lineTo(l.x2, l.y2)
  ctx.stroke();
  ctx.closePath();
}

function drawLines() {
  for(var i = 0; i < lines.length; i++) {
    drawLine(lines[i]);
  }
}

function render() {
  // console.log("Render");
  clear();
  // drawGround();
  drawLines();
  drawBall(ball);
}
