// 1. callback 함수
// 매개변수로 대입되는 함수를 의미한다 -> 다른함수가 실행을 끝낸 뒤 실행되는 함수
// 어떤 함수가 다른 함수의 실행을 끝낸 뒤 실행되는 것을 보장
// 예시 -> 클릭 이벤트 발생시 실행되는 sayHi 함수

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다");
}
// function pickDrink(callback) {
//   setTimeout(function () {
//     console.log("고민 끝!!");
//     product = "제로콜라";
//     price = 2000;
//     callback(product, price);
//   }, 3000);
// }

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

// let product;
// let price;
// pickDrink(pay);

// 2. promise
// 비동기 처리를 할 수 있는 객체, 성공(resolve)과 실패(reject)를 분리하여 반환
// new Promise로 객체 만들어서 사용

// promise 함수 정의
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        "promise 상태는 fulfilled!! then으로 연결됩니다. \n 이때의 flag가 true입니다"
      );
    } else {
      reject(
        "promise 상태는 rejected!! catch로 연결됩니다. \n 이때의 flag는 false입니다"
      );
    }
  });
}
// // then:성공시 실행, catch: 실패시 실행, finally: 성공여부와 상관없이 실행
function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!!");
      product = "제로콜라";
      price = 2000;
      resolve();
    }, 3000);
  });
}

// goMart();
// pickDrink().then(pay);

// 3. async/await
// promise 기반 코드를 좀 더 쓰기 쉽고 읽기 쉽게함
// async: 함수앞에 붙여 promise를 반환
// await: 기다리다, promise가 다 처리될 때까지 기다리는 역할, 결과는 그 후 반환
// async가 붙은 함수는 항상 promise를 반환하며 async가 있는 함수에서만 await가 사용가능하다

async function exec() {
  goMart();
  await pickDrink(); //pickDrink를 기다리고 뒤이어 pay()함수 실행
  pay();
}

let product;
let price;
exec();
