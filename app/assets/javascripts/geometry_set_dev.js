// Developing a set of functions for drawing graphs and exploring geometry.
window.onload = function () {
  var canvas = document.getElementById("graph_paper");

  var xOrigin = canvas.width / 2;
  var yOrigin = canvas.height / 2;


  if (canvas.getContext) {

    var ctx = canvas.getContext("2d");

    drawGrid(ctx, canvas);
    drawAxes(ctx, canvas, xOrigin, yOrigin);

    var Px = 10;
    var Py = 10;

    var Qx = 100;
    var Qy = 250;

    drawPoint(ctx, Px, Py);
    drawPointLabel(ctx, Qx, Qy);
    drawPoint(ctx, Qx, Qy);
    drawLine(ctx, Px, Py, Qx, Qy);

//    drawTrace(ctx);
//    draw1Radian(ctx);

  } else {

    alert('Your browser does not support canvas.')

  }
}
