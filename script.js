let btn1 = document.getElementsByClassName("next-btn")[0];
let btn2 = document.getElementsByClassName("prev-btn")[0];
var card = document.querySelector(".scene .card");
btn1.addEventListener("click", function () {
  card.classList.toggle("is-flipped");
});
btn2.addEventListener("click", function () {
  card.classList.toggle("is-flipped");
});

let b2s = document.getElementById("b2s");
let b2sInput = document.getElementById("b2sInput");
let b2sOutput = document.getElementById("b2sOutput");
let s2b = document.getElementById("s2b");
let s2bInput = document.getElementById("s2bInput");
let s2bOutput = document.getElementById("s2bOutput");

b2s.addEventListener("click", () => {
  b2sOutput.value = binaryArrayToString(b2sInput.value);
});

s2b.addEventListener("click", () => {
  s2bOutput.innerHTML = stringToBinaryArray(s2bInput.value).join(" ");
});

function binaryArrayToString(binaryString) {
  const binaryPattern = /^[01\s]+$/;
  if (!binaryPattern.test(binaryString)) {
    return "Enter Binary Numbers only";
  }
  return binaryString
    .split(" ")
    .map((binary) => String.fromCharCode(parseInt(binary, 2)))
    .join("");
}

function stringToBinaryArray(str) {
  return str
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"));
}
