function values() {
  var sides = new Array; //create an array called "sides" that will store variables containing user input values.
  var inputA = (document.getElementById('SideA').value); //create variables that will store user input values.
  var inputB = (document.getElementById('SideB').value);
  var inputC = (document.getElementById('SideC').value);

  var output = (document.getElementById('output').value); // variable "output" that contains value of what to be displayed.
  sides.push(inputA, inputB, inputC); //push variables containing  input in the empty array "sides".
  if (inputA.length === null || inputB.length === null || inputC.length === null) // checks whether field is blank.
  {
    output.innerHTML = "<p>Please FILL all the fields.</p>"
  } else {
    var A = parseFloat(inputA); //converts the input string values to numbers,and stores the results variables(A,B & C).
    var B = parseFloat(inputB);
    var C = parseFloat(inputC);
  }
  scripts(A, B, C); //function "scripts" is called within function "values"

};

function scripts(A, B, C) {
  if (A + B > C && B + C > A && C + A > B) {
    if (A === B && A === C) {
      output.innerHTML = "<p1>Your values give an EQUILATERAL triangle.</p>";
    } else if (A === B || B === C || A === C) {
      output.innerHTML = "<p1>Your values give an ISOSCELES triangle.</p>";
    } else {
      output.innerHTML = "<p1>Your values give a SCALENE triangle.</p>";
    }
  } else if (isNaN(A) || isNaN(B) || isNaN(C)) {
    output.innerHTML = "<p1>Please input a NUMBER!</p>";
  } else {
    output.innerHTML = "<p1>Your values CANNOT possibly form a triangle!</p>";
  }
}

function reset() { //resets input  to "empty".
  location.reload();
}
