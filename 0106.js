import sayHi from "./0106_class.js";

// 배열 구조분해 할당
const arr1 = ["tomato", "banana", "kiwi"];
const arr2 = ["tomato", "banana"];
// const arr3 = ["tomato", "banana", "kiwi"];

const [to, ba, ki] = arr1;
const [toma, bana, kiwi = "kw"] = arr2;

// 직접 할당보다 간단
console.log(ba);
console.log(toma);
console.log(kiwi);

let x = 1,
  y = 3;
[x, y] = [y, x];
console.log(x, y);

// 객체 구조분해 할당
const obj = {
  title: "제목",
  content: "내용",
  num: 13,
};
const { title, content } = obj;
console.log(obj.title);
console.log(title);
// 변수명 변경가능
const { num: number } = obj;
console.log(obj.num);
console.log(number);

// 전개구문 ...
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];

console.log(spread);

const c = [..."HELLO"];
console.log(c);

const word1 = "abc";
const word2 = "xyz";
const word3 = [...word1, ...word2];
console.log(word3);

// rest 파라미터: 파라미터 a에 할당하고 남은 배열 요소를 가져온다
const values = ["a", "b", "c"];
function get(a, ...rest) {
  console.log(rest);
}
get(...values);

// 모듈 받기

console.log(sayHi());
