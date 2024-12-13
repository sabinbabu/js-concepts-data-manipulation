const headingEl = document.getElementById("heading");
headingEl.innerText = "Array Manipulation";

const definitionEl = document.getElementById("definition");
definitionEl.innerText = "Definition";

const definitionParaEl = document.getElementById("definition-para");
definitionParaEl.innerHTML =
  "Arrays are ordered collections of values. They can store any data type. Manipulations involve adding, removing, sorting, and iterating over elements. For example : <br><code> <b>const myArray = [4,23,322,'apple']</b> </code>  ";

const methodsEl = document.getElementById("methods");
methodsEl.innerText = "Methods";

//Basic-prop

const basicPropEl = document.getElementById("basic-prop");
basicPropEl.innerText = "Basic Properties";

//length
const lengthEl = document.getElementById("length");
lengthEl.innerHTML =
  "<b><code>array.length</code></b> - It returns number of elements in that array. For example: <code>  <b>myArray.length ---RESULT--- 4 </b></code>";

//access
const accessEl = document.getElementById("access");
accessEl.innerHTML =
  "<b><code>array[index]</code></b> - Items in array can be accessed using []. For example: <code>  <b>myArray[0] ---RESULT--- 4 </b></code>";

//spread-operator
const spreadOperatorEl = document.getElementById("spread-operator");
spreadOperatorEl.innerHTML =
  "<b><code>[..array]</code></b> - It is used to spread elements in an array separately. For example: <code>  <b> const newArray = [...myArray,7] ---RESULT--- newArray = [4,23,322,'apple',7] </b></code>";

//Adding and Removing Elements

const addAndRemoveEl = document.getElementById("adding-and-removing-elements");
addAndRemoveEl.innerText = "Adding and Removing Elements";

//push
const pushEl = document.getElementById("push");
pushEl.innerHTML =
  "<b><code>array.push(item1,item2)</code></b> - It adds the specified elements to the end of an array and returns the new length of the array. For example: <code>  <b> myArray.push(6) ---RESULT--- newArray = [4,23,322,'apple',6] </b></code>";

//pop
const popEl = document.getElementById("pop");
popEl.innerHTML =
  "<b><code>array.pop()</code></b> - It removes the last element from an array and returns that element.  For example: <code>  <b> myArray.pop() ---RESULT--- newArray = [4,23,322] </b></code>";

//unshift
const unshiftEl = document.getElementById("unshift");
unshiftEl.innerHTML =
  "<b><code>array.unshift(item1,item2)</code></b> - It adds the specified elements to the beginning of an array and returns the new length of the array.  For example: <code>  <b> myArray.unshift(4,5) ---RESULT--- newArray = [4,5,4,23,322,'apple'] </b></code>";

//shift
const shiftEl = document.getElementById("shift");
shiftEl.innerHTML =
  "<b><code>array.shift()</code></b> - It removes the first element from an array and returns that element.  For example: <code>  <b> myArray.shift() ---RESULT--- newArray = [23,322,'apple'] </b></code>";

//splice
const spliceEl = document.getElementById("splice");
spliceEl.innerHTML =
  "<b><code>array.splice(start,deleteCount,item1,item2)</code></b> - It changes the contents of an array by removing or replacing existing elements and/or adding new elements.   For example: <code>  <br><b> myArray.splice(1,0,45) ---RESULT--- newArray = [4,23, 45 , 322,'apple'] <br> myArray.splice(1,2) ---RESULT--- newArray = [4,'apple'] <br> myArray.splice(1,2,45) ---RESULT--- newArray = [4,45,'apple'] </b></code>";

//Transformations

const transformationsEl = document.getElementById("transformations");
transformationsEl.innerText = "Transformations";

//map
const mapEl = document.getElementById("map");
mapEl.innerHTML =
  "<b><code>array.map(callback fn)</code></b> - It creates a new array populated with the results of calling a provided function on every element of array.   For example: <code>  <br><b> myArray.map((item)=> item+1) ---RESULT--- newArray = [5,24,323,'apple1'] </b></code>";

//filter
const filterEl = document.getElementById("filter");
filterEl.innerHTML =
  "<b><code>array.filter(callback fn)</code></b> - It returns a filtered array based on true condition given in callback function   For example: <code>  <br><b> myArray.map((item)=> item/2) ---RESULT--- newArray = [323] </b></code>";

//reduce
const reduceEl = document.getElementById("reduce");
reduceEl.innerHTML =
  "<b><code>array.reduce(callback fn)</code></b> - It reduces the given array to single value . For example: <code>  <br><b> const array1 = [1, 2, 3, 4] <br> const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue,0) ---RESULT--- 10 </b></code>";

//find
const findEl = document.getElementById("find");
findEl.innerHTML =
  "<b><code>array.find(callback fn)</code></b> - It returns the first element in the provided array that satisfies the provided testing function. For example: <code>  <br><b> const array1 = [5, 12, 8, 130, 44] <br> const found = array1.find((element) => element > 10); ---RESULT--- 10 </b></code>";

//flatmap
const flatMapEl = document.getElementById("flatmap");
flatMapEl.innerHTML =
  "<b><code>array.flatmap(callback fn)</code></b> - It maps all array elements and creates a new flat array.  For example: <code>  <br><b> const myArr = [1, 2, 3, 4, 5, 6] <br>const newArr = myArr.flatMap(x => [x * 10]) ---RESULT--- [10,20,30,40,50,60] </b></code>";

//foreach
const foreachEl = document.getElementById("foreach");
foreachEl.innerHTML =
  "<b><code>array.foreach(callback fn)</code></b> - It  allows you to iterate over an array and perform an operation on each element of the array.  For example: <code>  <br><b> const myArr = [1, 2, 3, 4, 5, 6] <br>const newArr = myArr.forEach((item)=> console.log(item)) ---RESULT--- 1 2 3 4 5 6 </b></code>";

//Sorting

const sortingEl = document.getElementById("sorting");
sortingEl.innerText = "Sorting";

//sort
const sortEl = document.getElementById("sort");
sortEl.innerHTML =
  "<b><code>array.sort()</code></b> - It  allows you to sort arrays of numbers, strings, or objects with custom functions.  For example: <code>  <br><b> const months = ['March', 'Jan', 'Feb', 'Dec'] <br> months.sort() ---RESULT--- ['Dec', 'Feb', 'Jan', 'March']</b></code>";

//reverse
const reverseEl = document.getElementById("reverse");
reverseEl.innerHTML =
  "<b><code>array.reverse()</code></b> - The elements order in the array will be turned towards the direction opposite to that previously stated.  For example: <code>  <br><b> const array1 = ['one', 'two', 'three'] <br> array1.reverse() ---RESULT--- ['three','two','one'] </b></code>";

//combining and splitting

const combineNsplitEl = document.getElementById("combining-splitting");
combineNsplitEl.innerText = "Combining and Splitting";

//concat
const concatEl = document.getElementById("concat");
concatEl.innerHTML =
  "<b><code>array.concat(array2)</code></b> - It  is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.  For example: <code>  <br><b> const array1 = ['a', 'b', 'c'] <br>const array2 = ['d', 'e', 'f'] <br> const array3 = array1.concat(array2); ---RESULT--- ['a','b','c','d','e','f'] </b></code>";

//slice
const sliceEl = document.getElementById("slice");
sliceEl.innerHTML =
  "<b><code>array.slice(start,end)</code></b> - It  returns  a new array  selected from start to end (end not included) where start and end represent the index of items in that array.  For example: <code>  <br><b> const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'] <br> console.log(animals.slice(2, 4)); ---RESULT--- ['camel', 'duck'] </b></code>";

//join
const joinEl = document.getElementById("join");
joinEl.innerHTML =
  "<b><code>array.join(' ')</code></b> - It creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.   For example: <code>  <br><b> const elements = ['Fire', 'Air', 'Water'] <br>console.log(elements.join('-')) ---RESULT--- 'Fire-Air-Water' </b></code>";
