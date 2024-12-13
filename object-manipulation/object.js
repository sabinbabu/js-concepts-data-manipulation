const headingEl = document.getElementById("heading");
headingEl.innerText = "Object Manipulation";

const definitionEl = document.getElementById("definition");
definitionEl.innerText = "Definition";

const definitionParaEl = document.getElementById("definition-para");
definitionParaEl.innerHTML =
  "Objects are collections of key-value pairs. They store data and methods for accessing and modifying it. Manipulations involve accessing, updating, and iterating over properties. For example : <br><code> <b>const person = {name: 'Bob' , occupation: 'Student'}</b> </code>  ";

const methodsEl = document.getElementById("methods");
methodsEl.innerText = "Methods";

//accessing and modifying
const accessNmodifyEl = document.getElementById("accessing-and-modifying");
accessNmodifyEl.innerText = "Accessing and Modifying";

//dot notation
const dotEl = document.getElementById("dot-notation");
dotEl.innerHTML =
  "<b><code>object.propertyName</code></b> - Values in an object can be accessed by using dot notation.   For example: <code>  <br><b> person.name ---RESULT--- Bob </b></code>";

//bracket notation
const bracketEl = document.getElementById("bracket-notation");
bracketEl.innerHTML =
  "<b><code>object[propertyName]</code></b> - We can also access object property using [] notation. Bracket notation accepts dynamic keys.  For example: <code>  <br><b> const obj = {name: 'Bob',age: 8, language: 'javascript'} <br> const myKey = 'language' <br> const target = obj[myKey] ---RESULT--- javascript </b></code>";

//adding property
const addingEl = document.getElementById("adding");
addingEl.innerHTML =
  "<b><code>object[propertyName]</code></b> - It copies all properties from one or more objects to a target object and returns the modified target object.  For example: <code>  <br><b> const obj = { a: 1, b: 2 } <br> Object.assign(obj,{c:3})  ---RESULT--- { a: 1, b: 2 , c: 3} </b></code>";

//deleting property
const deletingEl = document.getElementById("deleting");
deletingEl.innerHTML =
  "<b><code>object[propertyName]</code></b> - It removes a property from an object.  For example: <code>  <br><b> const obj = { a: 1, b: 2 } <br> delete.obj.b  ---RESULT--- { a: 1} </b></code>";

//accessing and modifying
const objectMethodEl = document.getElementById("object-methods");
objectMethodEl.innerText = "Object Methods";

//object keys
const keysEl = document.getElementById("keys");
keysEl.innerHTML =
  "<b><code>Object.keys(obj)</code></b> - It returns an array of a given object's property names.  For example: <code>  <br><b> const object1 = {a: 'Bob',b: 42, c: false} <br> console.log(Object.keys(object1));  ---RESULT---  ['a', 'b', 'c'] </b></code>";

//object values
const valuesEl = document.getElementById("values");
valuesEl.innerHTML =
  "<b><code>Object.values(obj)</code></b> - It returns an array of a given object's property values.  For example: <code>  <br><b> const object1 = {a: 'Bob',b: 42, c: false} <br> console.log(Object.values(object1));  ---RESULT---  ['Bob', 42, false] </b></code>";

//object entries
const entriesEl = document.getElementById("entries");
entriesEl.innerHTML =
  "<b><code>Object.entries(obj)</code></b> - It returns an array of a given object's property key and values pair.  For example: <code>  <br><b> const object1 = {a: 'Bob',b: 42, c: false} <br> console.log(Object.values(object1));  ---RESULT---  [['a','Bob'], ['b',42], ['c':false]] </b></code>";

//object destructuring
const objectDestructuringEl = document.getElementById("object-destructuring");
objectDestructuringEl.innerText = "Object Destructuring";

//object destructuring para
const objectDestructuringParaEl = document.getElementById(
  "object-destructuring-para"
);
objectDestructuringParaEl.innerHTML =
  "<b><code>const{prop1,prop2} = obj</code></b> - It is used to extract properties from objects and bind them to variables. They extract all contents out of object. We can give default value for variable if something is null from server. For example: <code>  <br><b> const {name, occupation} = person <br> console.log(name, occupation);  ---RESULT---  Bob, Student </b></code>";

//spread operator
const spreadOperatorEl = document.getElementById("spread-operator");
spreadOperatorEl.innerText = "Spread Operator";

//object destructuring para
const spreadOperatorParaEl = document.getElementById("spread-operator-para");
spreadOperatorParaEl.innerHTML =
  "<b><code>{...obj}</b> - It allows to spread individual property on an object separately. They are used for quickly copying object properties into new object. For example: <code>  <br><b> const const subject = {...person, subject: 'Astrophysics'} <br> console.log(subject);  ---RESULT---  {name: 'Bob' , occupation: 'Student' , subject:'Astrophysics'}  </b></code>";
