// sin(x°) = O/H     // sin(30) = 1/3
// H * sin(x°) = O   // 3 * sin(30) = 1
// sin(x°)/O = H     // sin(30)/1 = 3
// sin-1(O/H) = x°   // asin(O/H) = 30

function sine_angle(O, H){

  return MATH.asin(O/H);

}

function sine_O(angle, H) {

    return H * Math.sin(angle);

}

function sine_H(angle, O) {}

// cos(x°) = A/H
// H * cos(x°) = A

// tan(x°) = O/A
// A * tan(x°) = O

// Converting radians to degrees
function radians_to_degrees(r){

  // degrees = radians * 180/pi
  d = r * (180/MATH.pi);
  return d;

}

// Converting degrees to radians
function degrees_to_radians(d) {

  // radians = degrees * pi/180
  r = d * (MATH.pi/180);
  return r;

}
