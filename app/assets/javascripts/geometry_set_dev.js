// Developing a set of functions for drawing graphs and exploring geometry.
window.onload = function () {
  var canvas = document.getElementById("graph_paper");

  var xOrigin = canvas.width / 2;
  var yOrigin = canvas.height / 2;


  if (canvas.getContext) {

    var ctx = canvas.getContext("2d");

    drawGrid(ctx, canvas);
    drawAxes(ctx, canvas, xOrigin, yOrigin);

    drawPoint(ctx, xOrigin, yOrigin);
//    drawTrace(ctx);
//    draw1Radian(ctx);

  } else {

    alert('Your browser does not support canvas.')

  }
}
