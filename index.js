const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let resultLeftEl = document.getElementById("result-left");
let resultRightEl = document.getElementById("result-right");
let passwordLength = 15;
let arrayLength = characters.length;

function setArrayLength(input) {
  removeStyles("chars");
  arrayLength = input; // number 9 is at index 61 //array.length is 91
  document.getElementById(input).style.background = "#a7f3d0";
}

function setLength(input) {
  removeStyles("length");
  passwordLength = input;
  document.getElementById(input).style.background = "#a7f3d0";
}

function removeStyles(input) {
  let lengthBtns = document.getElementsByClassName(input);
  for (let i = 0; i < lengthBtns.length; i++) {
    lengthBtns[i].style.background = "white";
  }
}

function generatePasswords() {
  resultLeftEl.innerHTML = "";
  resultRightEl.innerHTML = "";

  for (let i = 1; i <= passwordLength; i++) {
    let randomNo1 = Math.floor(Math.random() * arrayLength);
    let randomNo2 = Math.floor(Math.random() * arrayLength);
    resultLeftEl.innerHTML += characters[randomNo1];
    resultRightEl.innerHTML += characters[randomNo2];
  }
  console.log(characters.indexOf("9"));
}
