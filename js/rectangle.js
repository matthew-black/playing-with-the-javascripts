var rectOne   = {width: 10, height: 20};
var rectTwo   = {width: 32, height: 13};
var rectThree = {width: 20, height: 10};

function area(r) {
  return r.width * r.height;
};

function equal(r1, r2) {
  return ( r1.width  == r2.width || r1.width == r2.height &&
           area(r1) == area(r2) );
};

function perimeter(r) {
  return (r.width * 2) + (r.height * 2);
};

function diagonal(r) {
  return Math.sqrt(r.width*r.width + r.height*r.height);
};

function isSquare(r) {
  return r.width === r.height;
}



// Math.sqrt(x)
// Returns the positive square root of a number.

// Math.pow(x, y)
// Returns base to the exponent power, that is, baseexponent.