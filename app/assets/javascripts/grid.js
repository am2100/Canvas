// A simple grid exploring the Canvas element
window.onload = function(){
    var canvas = document.getElementById("grid");
    var context = canvas.getContext("2d");

    drawGrid();
    drawHorizontalArrow();
    drawVerticalArrow();
//    context.font = "bold 12px serif";
//    context.fillText = ("x", 5, 5);
//    context.fillText = ("y", 58, 165);
    drawText();
//  context.beginPath();
//  context.moveTo(10,9.5);
//  context.lineTo(100,10);
//  context.stroke();

    function drawGrid(){

	for (var x = 10.5; x <= 590.5; x += 10){
	    context.moveTo(x, 10);
	    context.lineTo(x, 390.5);
	}

	for (var y = 10.5; y <= 390.5; y += 10){
	    context.moveTo(10, y);
	    context.lineTo(590.5, y);
	}

	context.strokeStyle = "#fff";
	context.stroke();
    }
  
    function drawHorizontalArrow(){
	context.beginPath();
	context.moveTo(20, 60);
	context.lineTo(290, 60);
	context.moveTo(310, 60);
	context.lineTo(580, 60);
	context.moveTo(575, 55);
	context.lineTo(580, 60);
	context.lineTo(575, 65);

	context.strokeStyle ="#000";
	context.stroke();
    }

    function drawVerticalArrow(){
	context.beginPath();
	context.moveTo(60, 20);
	context.lineTo(60, 210);
	context.moveTo(60, 230);
	context.lineTo(60, 380);
	context.moveTo(55, 375);
	context.lineTo(60, 380);
	context.lineTo(65, 375);

	context.strokeStyle ="#000";
	context.stroke();
    }

    function drawText(){
	context.font = "bold 12px sans-serif";
	context.textBaseline = "middle";
	context.textAlign = "center";
	context.fillText("x", 300, 61);
	context.fillText("y", 60, 220);
	context.textBaseline = "top";
	context.fillText("(0, 0)", 34, 21);
	context.textBaseline = "bottom";
	context.textAlign = "right";
	context.fillText("(580, 380)", 580, 382);
	context.stroke();
    }
}