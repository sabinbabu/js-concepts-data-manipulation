const headingEl = document.getElementById("heading");
headingEl.innerText = "Boolean Manipulation";

const definitionEl = document.getElementById("definition");
definitionEl.innerText = "Definition";

const definitionParaEl = document.getElementById("definition-para");
definitionParaEl.innerHTML =
  "Boolean manipulation refers to the process of evaluating, combining, or transforming Boolean values using logical operators and other techniques.";

//and
const andEl = document.getElementById("and");
andEl.innerHTML =
  "<b><code>AND(&&)</code></b> - It combines two Boolean expressions and returns true only if both operands are true. For example: <code>  <br><b> let isAdult = true;<br>let hasID = false; <br>console.log(isAdult && hasID); <br> RESULT ----- false </b></code>";

//or
const orEl = document.getElementById("or");
orEl.innerHTML =
  "<b><code>OR(||)</code></b> - It combines two Boolean expressions and returns true if at least one operand is true. For example: <code>  <br><b> let isWeekend = false;<br>let hasFriends = true;<br>console.log(isWeekend || hasFriends); <br> RESULT ----- true </b></code>";

//not
const notEl = document.getElementById("not");
notEl.innerHTML =
  "<b><code>NOT(!!)</code></b> - It reverses the given boolean value. For example: <code>  <br><b> let isReady = false;<br>console.log(!isReady); <br> RESULT ----- true  </b></code>";

//boolean short circuit
const shortCircuitEl = document.getElementById("boolean-short-circuit");
shortCircuitEl.innerHTML =
  "Here, short circuiting means they stop evaluating as soon as the result is determined.";

//and circuit
//or
const andCircuitEl = document.getElementById("and-circuit");
andCircuitEl.innerHTML =
  "<b><code>AND(&&) Circuit</code></b> - It stops if the first operand is false. For example: <code>  <br><b> let isAdult = false;<br>let hasID = true; <br>console.log(isAdult && hasID); <br> RESULT ----- false //Stops at isAdult </b></code>";

// or circuit
const orCircuitEl = document.getElementById("or-circuit");
orCircuitEl.innerHTML =
  "<b><code>OR(||) Circuit</code></b> - It stops if the first operand is true. For example: <code>  <br><b> let isWeekend = true;<br>let hasFriends = false;<br>console.log(isWeekend || hasFriends); <br> RESULT ----- true //stops at isWeekend</b></code>";
