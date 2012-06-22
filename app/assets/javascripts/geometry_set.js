// Geometry Set
//
// Takes a canvas and a context and creates a visual environment for drawing
// geometric elements in.
// Colors for various elements can be set.
// Canvas dimensions should be divisible by 10.

var gridBgCol = '#000';
var gridFgCol = '#222';
var axisCol = '#444';
var traceCol = '#006600';
var penCol = '#00FF00';

function drawGrid(context, canvas) {

  drawGridBg(context, canvas);
  drawGridSquares(context, canvas);
}

function drawGridBg(context, canvas) {

  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = gridBgCol;
  context.fill();
}

function drawGridSquares(context, canvas) {

  for (var x = 0.5; x <= canvas.width + 0.5; x += 10) {
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height + 0.5);
  }

  for (var y = 0.5; y <= canvas.height + 0.5; y += 10) {
    context.moveTo(0, y);
    context.lineTo(canvas.width + 0.5, y);
  }

  context.strokeStyle = gridFgCol;
  context.stroke();
}

function draw1Radian(context) {

  var radius = 100;
  var startAngle = 0 * Math.PI;   // 3.00 O'Clock
//	var startAngle = 1 * Math.PI/2; // 6.00 O'Clock

  var endAngle = startAngle + (1 * Math.PI / 3); // 60 deg
//	var endAngle = 1 * Math.PI/2; // 90 deg
//	var endAngle = 1 * Math.PI;   // 180 deg
//	var endAngle = 2 * Math.PI;   // 360 deg


  var counterClockwise = false;

  context.beginPath();
  context.arc(xCenter + 0.5, yCenter + 0.5, radius, startAngle, endAngle, counterClockwise);

  context.lineWidth = 1;
  context.strokeStyle = penCol;
  context.stroke();
}

function drawTrace(context) {

  var radius = 100;
  var startAngle = 0; // 1 * Math.PI;
  var endAngle = 2 * Math.PI;
  var counterClockwise = false;

  context.beginPath();
  context.arc(xCenter + 0.5, yCenter + 0.5, radius, startAngle, endAngle, counterClockwise);

  context.lineWidth = 1;
  context.strokeStyle = traceCol;
  context.stroke();


}

function drawPoint(context, x, y) {

  var radius = 1;
  var startAngle = 0;
  var endAngle = 2 * Math.PI;
  var counterClockwise = false;

  context.beginPath();
  context.arc(x + 0.5, y + 0.5, radius, startAngle, endAngle, counterClockwise);

  context.fillStyle = penCol;
  context.fill();
}

function drawAxes(context, canvas, x, y) {

  drawXAxis(context, canvas, y);
  drawYAxis(context, canvas, x);
}

function drawXAxis(context, canvas, y) {

  context.beginPath();
  context.moveTo(0, y + 0.5);
  context.lineTo(canvas.width, y + 0.5);

  context.strokeStyle = axisCol;
  context.stroke();
}

function drawYAxis(context, canvas, x) {

  context.beginPath();
  context.moveTo(x + 0.5, 0);
  context.lineTo(x + 0.5, canvas.height);

  context.stokeStyle = axisCol;
  context.stroke();
}
