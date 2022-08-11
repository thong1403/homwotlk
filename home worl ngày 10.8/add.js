// bài 1 : 
// function a() {
//     let b = parseInt(prompt("nhập j bn thik"))
//     let c = parseInt(prompt("nhập sô mày thích"))
//     return b + c 
// }
// console.log(a());

// bài 2
// function array() {
//     let arr = [1, 2, 3, 4, 5, 6];
//     let a = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             a = a + arr[i];
//         }
//     }

// console.log(a)
// return;
// }



// array()

// bài 3 :
// function number(a,b){
//     a =Number(prompt("nhập số thứ nhất"))
//     b = Number(prompt("nhập vào số thứ 2"))
//     if(a>b){
//         alert("số thứ nhất của bạn lớn hơn số thứ 2")
//     }else {
//         return a + b
//     }
// }alert(number());
// number();

//bài 4

// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     return result;
// }
// result = 0;
// alert(`${result} là giá trị đầu tiên của biến result`);
// result = addNumbers();
// alert(`${result} là giá trị sau của biến result`);

// bài 5

// function footToMeter() {
//     a = Number(prompt("nhập vào số foot"))
//     b = Number(prompt("nhập vào số meter"))
//     foot = 3.279 * b
//     meter = 0.305 * a
//     alert(`${foot} là giá trị của foot`)
//     alert(`${meter}là giá trị của meter`)

// }

// footToMeter();


//bài 6 

//bai 6
let number = Number(prompt("moi nhap so bat ki de kiem tra"));
function isPrime(number) {
  let state = true;

  if (number < 2) {
    state = false;
  } else if (number === 2) {
    state = true;
  } else if (number % 2 === 0) {
    state = false;
  } else {
    for (let i = 3; i < number - 1; i = i + 2) {
      if (number % i === 0) {
        state = false;
        break;
      }
    }
  }
  if (state === true) {
    console.log(`${number} la so nguyen to`);
  } else {
    console.log(`${number} ko phai so nguyen to`);
  }
  return state;
}

let a = "";
for (let i = 0; i < 100; i++) {
  if (isPrime(i) === true) {
    a = a + "," + i;
  }
}
console.log(a.replace(",", ""));