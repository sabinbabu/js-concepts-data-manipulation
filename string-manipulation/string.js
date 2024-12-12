const headingEl = document.getElementById("heading");
headingEl.innerText = "String Manipulation";

const definitionEl = document.getElementById("definition");
definitionEl.innerText = "Definition";

const definitionParaEl = document.getElementById("definition-para");
definitionParaEl.innerText =
  "A string in JavaScript is a sequence of characters enclosed in single ('), double (&#34;), or backticks (`). Strings are immutable, meaning any transformation returns a new string.  Manipulations involve adding, removing, sorting, and iterating over elements.";

const methodsEl = document.getElementById("methods");
methodsEl.innerText = "Methods";

//Basic property
const basicPropEl = document.getElementById("basic-prop");
basicPropEl.innerText = "Basic Property";

//length
const lengthEl = document.getElementById("length");
lengthEl.innerHTML =
  "<b>string.length</b> - It returns the length of the string. For example: <code> hello.length ---RESULT--- 5 </code>";

//transform and extract
const transAndExtractEl = document.getElementById(
  "transformations-and-extract"
);
transAndExtractEl.innerText = "Transformation and Extract";

//uppercase
const upperCaseEl = document.getElementById("uppercase");
upperCaseEl.innerHTML =
  "<b>string.toUpperCase()</b> - It returns the input string converted to uppercase. For example: <code> hello.toUpperCase() ---RESULT--- HELLO </code>";

//lowercase
const lowerCaseEl = document.getElementById("lowercase");
lowerCaseEl.innerHTML =
  "<b>string.toLowerCase()</b> - It returns the input string converted to lowercase. For example: <code> Hello.toLowerCase() ---RESULT--- hello </code>";

//trim
const trimEl = document.getElementById("trim");
trimEl.innerHTML =
  "<b>string.trim()</b> - It removes whitespace from both ends of this string and returns a new string, without modifying the original string. For example: <code> Hello .trim() ---RESULT--- Hello </code>";

//at
const atEl = document.getElementById("at");
atEl.innerHTML =
  "<b>string.at(index)</b> - It  takes an integer value and returns a new String consisting of the single character located at the specified position. For example: <code> Hello.at(1) ---RESULT--- e </code>";

//Search and Replace
const searchNReplaceEl = document.getElementById("search-and-replace");
searchNReplaceEl.innerText = "Search and Replace";

//index-of
const indexOfEl = document.getElementById("index-of");
indexOfEl.innerHTML =
  "<b>string.indexOf(keyword)</b> -  It searches keyword string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number. For example: <code>  hello world.indexOf('world') ---RESULT--- 1 </code>";

//includes
const includesEl = document.getElementById("includes");
includesEl.innerHTML =
  "<b>string.includes(keyword)</b> -  It performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.   For example: <code>  hello world.includes('world') ---RESULT--- true </code>";

//replace
const replaceEl = document.getElementById("replace");
replaceEl.innerHTML =
  "<b>string.replace(oldString, newString)</b> -  It returns a new string with one, some, or all matches of a pattern replaced by a replacement. For example: <code>  hello world.replace('mars') ---RESULT--- hello mars </code>";

//substring-operations
const substringOperationEl = document.getElementById("substring-operations");
substringOperationEl.innerText = "Substring Operations";

//slice
const sliceEl = document.getElementById("slice");
sliceEl.innerHTML =
  "<b>string.slice()</b> - It extracts a section of this string and returns it as a new string, without modifying the original string. For example: <code>  hello world.slice(1,4) ---RESULT--- ell </code>";

//substring
const subStringEl = document.getElementById("substring");
subStringEl.innerHTML =
  "<b>substring(indexStart, indexEnd)</b> - It  returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied. For example: <code>  hello world.substring(1,4) ---RESULT--- ell </code>";

//splitting and joining
const splitNJoinEl = document.getElementById("splitting-and-joining");
splitNJoinEl.innerHTML = "Splitting and Joining";

//split
const subSplitEl = document.getElementById("split");
subSplitEl.innerHTML =
  "<b>string.split(<pattern>)</b> - It takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array. For example: <code>  hello world.split(' ') ---RESULT--- ['hello','world'] </code>";
