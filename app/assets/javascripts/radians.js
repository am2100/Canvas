// Exploring Radians with the Canvas element
window.onload = function(){
    var canvas = document.getElementById("radians");

    if(canvas.getContext){

	var context = canvas.getContext("2d");

	var gridBgCol = '#000';
	var gridFgCol = '#111';
	var axisCol   = '#222';
	var traceCol  = '#006600';
	var penCol    = '#00FF00';

	var xCenter = canvas.width/2;
	var yCenter = canvas.height/2;
	
	drawGridBg();
	drawGrid();
	drawAxes();

	drawFocus();
	drawTrace();
	draw1Radian();

    }else{

	alert('Your browser does not support canvas.')

    }

    function draw1Radian(){

	var radius = 100;
	var startAngle = 0 * Math.PI;   // 3.00 O'Clock
//	var startAngle = 1 * Math.PI/2; // 6.00 O'Clock

	var endAngle = startAngle + (1 * Math.PI/3); // 60 deg
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

    function drawTrace(){

	var radius = 100;
	var startAngle = 0; // 1 * Math.PI;
	var endAngle = 2 * Math.PI;
	var counterClockwise = false;

	context.beginPath();
	context.arc(xCenter + 0.5 ,yCenter + 0.5, radius, startAngle, endAngle, counterClockwise);

	context.lineWidth = 1;
	context.strokeStyle = traceCol;
	context.stroke();

	
}

    function drawFocus(){

	var radius = 1;
	var startAngle = 0; // 1 * Math.PI;
	var endAngle = 2 * Math.PI;
	var counterClockwise = false;

	context.beginPath();
	context.arc(xCenter + 0.5 ,yCenter + 0.5, radius, startAngle, endAngle, counterClockwise);

//	context.lineWidth = 1;
//	context.strokeStyle = penCol;
//	context.stroke();

	context.fillStyle = penCol;
	context.fill();
    }

    function drawAxes(){

	drawXAxis();
	drawYAxis();
    }

    function drawXAxis(){

	context.beginPath();
	context.moveTo(0, yCenter + 0.5);
	context.lineTo(canvas.width, yCenter + 0.5);

	context.strokeStyle = axisCol;
	context.stroke();
    }

    function drawYAxis(){

	context.beginPath();
	context.moveTo(xCenter + 0.5, 0);
	context.lineTo(xCenter + 0.5, canvas.height);

        context.stokeStyle = axisCol;
        context.stroke();
    }

    function drawGridBg(){

	context.beginPath();
        context.rect(0, 0, canvas.width, canvas.height);
        context.fillStyle = gridBgCol;
        context.fill();
    }

    function drawGridSquares(){

	for (var x = 0.5; x <= canvas.width + 0.5; x += 10){
	    context.moveTo(x, 0);
	    context.lineTo(x, canvas.height + 0.5);
	}

	for (var y = 0.5; y <= canvas.height + 0.5; y += 10){
	    context.moveTo(0, y);
	    context.lineTo(canvas.width + 0.5, y);
	}

	context.strokeStyle = gridFgCol;
	context.stroke();
    }

    function drawGrid(){
	drawGridBg();
	drawGridSquares();
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