// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;

// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1btn = document.getElementById("plus1");
var minus10btn = document.getElementById("minus10");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");
var plus50btn = document.getElementById("plus50");
var plus10btn = document.getElementById("plus10");
var minus50btn = document.getElementById("minus50");
var minus1btn = document.getElementById("minus1");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
plus1btn.addEventListener("click", add1);
minus10btn.addEventListener("click", sub10);
plus50btn.addEventListener("click", add50);
plus10btn.addEventListener("click", add10);
minus50btn.addEventListener("click", sub50);
minus1btn.addEventListener("click", minus1);

function add1() {
  counter++;
  console.log(counter);
  displayEl.innerHTML = counter;
}
function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}
function add50() {
  counter += 50;
  displayEl.innerHTML = counter;
}
function add10() {
  counter += 10;
  displayEl.innerHTML = counter;
}
function sub50() {
  counter -= 50;
  displayEl.innerHTML = counter;
}
function minus1() {
  counter--;
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = ""; // clears the input

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");
var rand4outEl = document.getElementById("rand4-out");

rand1Btn.addEventListener("click", showRand1);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}

rand2Btn.addEventListener("click", showRand2);

function showRand2() {
  var rand = Math.random() * 101;
  rand = rand.toFixed();
  rand2OutEl.innerHTML = rand;
}

rand3Btn.addEventListener("click", showRand3);

function showRand3() {
  var rand = Math.random() * 10 - 5;
  rand = rand.toFixed();
  rand3OutEl.innerHTML = rand;
}
document.getElementById("rand4").addEventListener("click", showRand4);

function showRand4() {
  let smallNum = +document.getElementById("rand-in1").value;
  let largerNum = +document.getElementById("rand-in2").value;

  let m = Math.random() * (largerNum - smallNum + 1) + smallNum;
  m = Math.floor(m);

  document.getElementById("rand4-out").innerHTML = m;
}

var randsizebtn = document
  .getElementById("random-size")
  .addEventListener("click", randomFontSize);

function randomFontSize() {
  let fontSize = Math.random() * (25 - 5) + 5;
  var fontString = `${fontSize}px`;
  document.body.style.fontSize = fontString;
}

var randcolourbtn = document
  .getElementById("random-rgb")
  .addEventListener("click", randomrgbcolour);

function randomrgbcolour() {
  let red = Math.random() * 255;
  let green = Math.random() * 255;
  let blue = Math.random() * 255;
  var randomrgbcolour = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("HTML").style.background = randomrgbcolour;
}

var resetbtn = document
  .getElementById("reset")
  .addEventListener("click", reset);

function reset() {
  displayEl.innerHTML = 0;
  stringOutEl.innerHTML = `Once upon a time,`;
  rand1OutEl.innerHTML = `----------`;
  rand2OutEl.innerHTML = `----------`;
  rand3OutEl.innerHTML = `----------`;
  rand4outEl.innerHTML = `----------`;
}
