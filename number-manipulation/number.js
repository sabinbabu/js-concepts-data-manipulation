// heading
const numberHeadingEl = document.getElementById("number-heading");
numberHeadingEl.innerText = "Number Manipulation";

//definition
const definitionEl = document.getElementById("definition");
definitionEl.innerText = "Definition";

const definitionParaEl = document.getElementById("definition-para");
definitionParaEl.innerText =
  "Numbers in JavaScript include both integers and floating-point values. Number manipulation allow mathematical calculations, type conversion, and formatting.";

//methods
const methodsEl = document.getElementById("methods");
methodsEl.innerText = "Methods";

//parsing/type conversion

const parsingEl = document.getElementById("parsing");
parsingEl.innerText = "Parsing / Type Conversion";

const methodsParaEl = document.getElementById("type-conversion-para");
methodsParaEl.innerHTML = `We can convert other data type(say string) to number type. For example: <br><br> <code> <b>parseInt("42")</b> &nbsp;&nbsp;&nbsp;----  Converts String type 42 to number type 42 <br><br> <b>5.4566.toFixed(2)</b> ---- Rounds up floating type number to 2 digits after decimal ----RESULT---- (5.46)</code>`;

//math-operations

const mathOperationsEl = document.getElementById("math-operations");
mathOperationsEl.innerText = "Mathematical Operations";

const mathOperationsParaEl = document.getElementById("math-operations-para");
mathOperationsParaEl.innerHTML =
  "We can perform <b>Addition, subtraction, multiplication, division (+, -, *, /)</b> operations on numbers.";

//math-object
const mathObjectEl = document.getElementById("math-object");
mathObjectEl.innerText = "Math Object";

const mathObjectParaEl = document.getElementById("math-object-para");
mathObjectParaEl.innerHTML =
  "The Math contains static properties and methods for mathematical constants and functions. Some of important Math methods and properties are:";

// Math.PI
const mathPiEL = document.getElementById("math-pi");
mathPiEL.innerHTML =
  "<b>Math.PI</b> : It provides ratio of a circle's circumference to its diameter; approximately 3.14159.";

//   Math.abs()
const mathAbsEL = document.getElementById("math-abs");
mathAbsEL.innerHTML =
  "<b>Math.abs()</b> : It returns the absolute value of a number. For example :<code> Math.abs(-10) ---RETURNS--- 10 </code>";

//   Math.ceil()
const mathCeilEL = document.getElementById("math-ceil");
mathCeilEL.innerHTML =
  "<b>Math.ceil()</b> :  It rounds up and returns the smallest integer greater than or equal to a given number. For example :<code> Math.ceil(45.32) ---RETURNS--- 46 </code>";

//   Math.floor()
const mathFloorEL = document.getElementById("math-floor");
mathFloorEL.innerHTML =
  "<b>Math.floor()</b> :  It rounds down and returns the largest integer less than or equal to a given number. For example :<code> Math.ceil(45.99) ---RETURNS--- 45 </code>";

//   Math.max()
const mathMaxEL = document.getElementById("math-max");
mathMaxEL.innerHTML =
  "<b>Math.max()</b> :  It returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters. For example :<code> Math.max(1,5,4) ---RETURNS--- 5 </code>";

//   Math.min()
const mathMinEL = document.getElementById("math-min");
mathMinEL.innerHTML =
  "<b>Math.min()</b> :  It returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters. For example :<code> Math.min(2,4,6) ---RETURNS--- 2 </code>";

//   Math.pow()
const mathPowEL = document.getElementById("math-pow");
mathPowEL.innerHTML =
  "<b>Math.pow()</b> :  It returns the value of a base raised to a power. For example :<code> Math.pow(2,3) ---RETURNS--- 8 </code>";

//   Math.random()
const mathRandomEL = document.getElementById("math-random");
mathRandomEL.innerHTML =
  "<b>Math.random()</b> :  It returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, For example :<code> Math.random() ---RETURNS--- 0.3453453 </code>";
