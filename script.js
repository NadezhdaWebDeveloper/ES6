window.onload = function() {

  const PI = 3.124;

  function calcArea(r) {
    const PI = 10;
    console.log('The area with a local const PI is: ' + PI * r * r);
  }

  console.log(PI);

  calcArea(5);


};
