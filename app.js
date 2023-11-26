console.log("Hello World");

let numEl1 = document.getElementById("num1");
let numEl2 = document.getElementById("num2");
let numEl3 = document.getElementById("num3");
let numEl4 = document.getElementById("num4");

let submitEl = document.getElementById("submit");
let submit1El = document.getElementById("submit1");
let submit2El = document.getElementById("submit2");
let resultEl = document.getElementById("result");
let result1El = document.getElementById("result1");
let result2El = document.getElementById("result2");

submitEl.onclick = function () {
  let x = Number(numEl1.value);
  let y = Number(numEl2.value);
  let result = 0;
  result = x + y;
  resultEl.textContent = result;
};

submit1El.onclick = function () {
  let z = Number(numEl3.value);

  let result1 = 0;
  if (z > 0) {
    result1 = "Положительное";
  }
  if (z < 0) {
    result1 = "Отрицательное";
  }
  if (z == 0) {
    result1 = "Ноль";
  }
  result1El.textContent = result1;
};
submit2El.onclick = function () {
  let o = Number(numEl4.value);

  let result2 = 0;
  if (o % 2 == 0) {
    result2 = "Четное число";
  }
  if (o % 2 == 1) {
    result2 = "Нечетное число";
  }

  result2El.textContent = result2;
};
