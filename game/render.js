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

function drawBall() {
  ctx.beginPath();
  ctx.fillStyle = "#FF0000";
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, false);
  ctx.fill();
  ctx.closePath();
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

function drawLine(line) {
  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.moveTo(line.x1, line.y1);
  ctx.lineTo(line.x2, line.y2)
  ctx.stroke();
  ctx.closePath();
}

function render() {
  // console.log("Render");
  clear();
  // drawGround();
  drawLine(line);
  drawBall();
}
