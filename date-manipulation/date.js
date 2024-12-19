const headingEl = document.getElementById("heading");
headingEl.innerText = "Date Manipulation";

const definitionEl = document.getElementById("definition");
definitionEl.innerText = "Definition";

const definitionParaEl = document.getElementById("definition-para");
definitionParaEl.innerHTML =
  "Dates are managed using the Date object. It allows retrieving and manipulating time data. A JavaScript date is fundamentally specified as the time in milliseconds that has elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC ";

const methodsEl = document.getElementById("methods");
methodsEl.innerText = "Methods";

//creating dates
const creatingDateEl = document.getElementById("creating-dates");
creatingDateEl.innerText = "Creating Dates";

//current date
const currentDateEl = document.getElementById("current-date");
currentDateEl.innerHTML =
  "<b><code>new Date()</code></b> - It returns a string representing current time.  For example: <code>  <br><b> console.log(new Date()) ---RESULT--- Thu Dec 19 2024 14:26:28 GMT+1100 (Australian Eastern Daylight Time) </b></code>";

//specific-date
const specificDateEl = document.getElementById("specefic-date");
specificDateEl.innerHTML =
  "<b><code>new Date(year, month, day, hours, minutes, seconds)</code></b> - It returns a string specified date.  For example: <code>  <br><b> console.log(new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toDateString()) ---RESULT--- Date after 7 days</b></code>";

//Retrieving dates
const retrievingDateEl = document.getElementById("retrieving-date");
retrievingDateEl.innerText = "Retrieving Dates";

//get day date
const getDatDateEl = document.getElementById("get-date-day");
getDatDateEl.innerHTML =
  "<b><code>new Date().getFullYear()</code></b> - It  returns the year for given date according to local time. For example: <code>  <br><b> console.log(new Date('July 20, 69 00:20:18').getFullYear()) ---RESULT--- 1969 </b></code>";

//get time
const getTimeEl = document.getElementById("get-time");
getTimeEl.innerHTML =
  "<b><code>new Date().getTime()</code></b> - It returns the number of milliseconds for this date since the epoch.  For example: <code>  <br><b> console.log(new Date('July 20, 69 20:17:40 GMT+00:00').getTime()) ---RESULT--- -14182940000 </b></code>";

//Formatting
const formattingEl = document.getElementById("formatting");
formattingEl.innerText = "Retrieving Dates";

// to iso string
const toISOStringEL = document.getElementById("to-iso-string");
toISOStringEL.innerHTML =
  "<b><code>new Date().toISOString()</code></b> - It returns a string representing specified date in simplified date time string format, For example: <code>  <br><b> console.log(new Date('05 October 2025 14:48 UTC').toISOString()) ---RESULT--- 2025-10-05T14:48:00.000Z </b></code>";

//to locale date string
const toLocaleStringEl = document.getElementById("to-locale-date-string");
toLocaleStringEl.innerHTML =
  "<b><code>new Date().toLocaleDateString()</code></b> - It returns a string with a language-sensitive representation of the date portion of this date in the local timezone. For example: <code>  <br><b> const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0)); <br>const options = {<br> weekday: 'long',<br>  year: 'numeric',<br> month: 'long', <br> day: 'numeric',}<br><br>console.log(event.toLocaleDateString('de-DE', options));<br>// Expected output (varies according to local timezone): Donnerstag, 20. Dezember 2012<br>console.log(event.toLocaleDateString('ar-EG', options));<br>// Expected output (varies according to local timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢<br>console.log(event.toLocaleDateString(undefined, options));<br>// Expected output (varies according to local timezone and default locale): Thursday, December 20, 2012</b></code>";

//Time Calculation
const timeCalculationEl = document.getElementById("time-calculation");
timeCalculationEl.innerText = "Time Calculation";

// get timestamp
const getTimeStampEl = document.getElementById("get-timestamp");
getTimeStampEl.innerHTML =
  "<b><code>Date.now()</code></b> - It returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC. For example: <code>  <br><b> console.log(Date.now()) ---RESULT--- 1734583054565 </b></code>";
