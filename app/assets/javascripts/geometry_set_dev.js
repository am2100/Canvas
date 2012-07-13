
// Developing a set of functions for drawing graphs and exploring geometry.

window.onload = function () {

  var canvas = document.getElementById("graph_paper");
//  var panel  = $('.debug_panel');

  var xOrigin = canvas.width / 4;
  var yOrigin = (canvas.height / 4) * 3;

  var d_to_r = "30 degrees: " + degrees_to_radians(30) + " radians";
  var d_to_r = "180 degrees: " + degrees_to_radians(180) + " radians";

  var r_to_d = "1 radian: " + radians_to_degrees(1) + " degrees";
  var r_to_d = "3.14 radians: " + radians_to_degrees(3.14) + " degrees";

    console.log(d_to_r);

  if (canvas.getContext) {

    var ctx = canvas.getContext("2d");

    drawGrid(ctx, canvas);
    drawAxes(ctx, canvas, xOrigin, yOrigin);

    var Ax = xOrigin + 10;
    var Ay = yOrigin - 10;

    var Bx = xOrigin + 210;
    var By = yOrigin - 10;

    var Cx = xOrigin + 10;
    var Cy = yOrigin - 110;

    drawPoint(ctx, Ax, Ay);
    drawPoint(ctx, Bx, By);
    drawPoint(ctx, Cx, Cy);
    drawLine(ctx, Ax, Ay, Bx, By);
    drawLine(ctx, Bx, By, Cx, Cy);
    drawLine(ctx, Cx, Cy, Ax, Ay);
    drawRect(ctx, Ax, Ay - 20, 20, 20);
    drawCircle(ctx, 210 + xOrigin, -10 + yOrigin, 200);
//    draw1Radian(ctx); 

  } else {

    alert('Your browser does not support canvas.')

  }
}
