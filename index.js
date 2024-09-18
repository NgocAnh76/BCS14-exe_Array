let number = [];
let numberPos = [];

// Lấy input, thêm vào mảng và hiển thị lên UI
function showNumber() {
  let inputEnter = document.querySelector("#inputNum").value * 1;
  number.push(inputEnter);
  document.getElementById("txtArray").innerHTML = number;
}

// Tính tổng các số dương
function sumPositive() {
  let sum = 0;
  for (let index = 0; index < number.length; index++) {
    if (number[index] > 0) {
      sum += number[index];
    }
  }
  document.querySelector("#txtSum").innerHTML = `Tổng các số dương: ${sum}`;
}

// Đếm số dương
function countPositive() {
  let numberPositive = 0;
  for (let index in number) {
    if (number[index] > 0) {
      numberPositive++;
    }
  }
  document.querySelector("#txtCount").innerHTML = `Số dương: ${numberPositive}`;
}
//Tìm số nhỏ nhất
function findMin() {
  let min = number[0];
  for (let index in number) {
    if (min > number[index]) {
      min = number[index];
    }
    document.querySelector("#txtMin").innerHTML = `Số nhỏ nhất là: ${min}`;
  }
}
//Tìm số dương nhỏ nhất
function minPos() {
  for (let index in number) {
    if (number[index] > 0) {
      numberPos.push(number[index]);
    }
  }
  let minP = numberPos[0];
  for (let index in numberPos) {
    if (minP > numberPos[index]) {
      minP = numberPos[index];
    }
  }
  document.querySelector(
    "#txtMinPos"
  ).innerHTML = `Số dương nhỏ nhất là: ${minP}`;
}

// Tìm số chẵn cuối cùng
function posEnd() {
  let pos = 0;
  for (let index in number) {
    if (number[index] % 2 == 0) {
      pos = number[index];
    }
  }
  document.querySelector("#txtEven").innerHTML = `Số chẵn cuối cùng: ${pos}`;
}

//Hoán đổi vị trí 2 phần tử
function swap(i1, i2) {
  let n = number[i1];
  number[i1] = number[i2];
  number[i2] = n;
}

function position() {
  let i1 = document.querySelector("#inputIndex1").value * 1;
  let i2 = document.querySelector("#inputIndex2").value * 1;
  swap(i1, i2);
  document.querySelector(
    "#txtChangePos"
  ).innerHTML = `Mảng sau khi đổi là: ${number}`;
}
// sắp xếp tăng dần
// let numberCp = [];
// for (let value of number) {
//   numberCp.push(value);
// }
// console.log(number);
// console.log(numberCp);
function arrange() {
  number.sort(function (a, b) {
    return a - b;
  });

  document.querySelector(
    "#txtIncrease"
  ).innerHTML = `Mảng sau khi sắp xếp: ${number}`;
}

// Tìm số nguyên tố đầu tiên
function prime(n) {
  if (n < 2) return false;

  for (let index = 2; index < Math.sqrt(n); index++) {
    if (n % index == 0) return false;
  }
  return true;
}
function firstPrime() {
  let n = -1;
  for (let index = 0; index < number.length; index++) {
    if (prime(number[index])) {
      n = number[index];
      break;
    }
  }
  document.querySelector("#txtPrime").innerHTML =
    n !== -1 ? n : "Không có số nguyên tố";
}

// Đếm số nguyên
// lấy input từ IU nhập vào mảng number integer
let num = [];
function integer() {
  let iP = document.querySelector("#inputFloat").value * 1;
  num.push(iP);
  document.querySelector("#txtArrayFloat").innerHTML = num;
}
// kiểm tra số nguyên
function isInteger(n) {
  return Number.isInteger(n);
}

// Đếm số
function countIn() {
  let count = 0;
  for (let n = 0; n < num.length; n++) {
    if (isInteger(num[n])) {
      count++;
    }
  }
  document.querySelector("#txtInt").innerHTML = `Số nguyên: ${count}`;
}

// So sánh số âm và số dương

function compare() {
  let a = 0;
  let d = 0;
  for (let n = 0; n < number.length; n++) {
    if (number[n] > 0) {
      d++;
    } else if (number[n] < 0) {
      a++;
    }
  }
  if (a > d) {
    document.querySelector("#txtCompare").innerHTML = "Số âm > Số dương";
  } else if (a < d) {
    document.querySelector("#txtCompare").innerHTML = "Số dương > Số âm";
  } else {
    document.querySelector("#txtCompare").innerHTML = "Số âm = Số dương";
  }
}

document.querySelector("#showN").onclick = showNumber;
document.querySelector("#sumP").onclick = sumPositive;
document.querySelector("#count").onclick = countPositive;
document.querySelector("#sapxep").onclick = arrange;
