let firstElement = document.getElementById("fnum");
let secondElement = document.getElementById("snum");
let resultElement = document.getElementById("result");

let addBtn = document.getElementById("add");
let divideBtn = document.getElementById("divide");

function add(num1, num2) {
  return num1 + num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

addBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let firstNumValue = Number(firstElement.value);
  let secondNumValue = Number(secondElement.value);

  if (firstNumValue && secondNumValue) {
    let result = add(firstNumValue, secondNumValue);

    resultElement.innerText = result;

    console.log(result);
  } else {
    console.log("please enter correct values");
  }
});

divideBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let firstNumValue = Number(firstElement.value);
  let secondNumValue = Number(secondElement.value);

  let result = divide(firstNumValue, secondNumValue);

  resultElement.innerText = result;
  console.log(result);
});
