// 함수 선언시 타입설정, 호출은 그대로
// 매개변수타입, 함수 return에 따라 전체 타입 설정
function sum(a: number, b: number): number {
  return a + b;
}
const sum1 = (a: number, b: number): number => {
  return a + b;
};
const sum2 = (a: number, b: number): number => a + b;
// js: 매개변수 선언 후 parameter 전달 없어도 오류X
// ts: 매개변수 선언 후 parameter 전달 없으면 오류O
// console.log(sum(1));
console.log(sum(1, 2));
// 값전달여부가 불확실한 경우 ? 사용
function add(a: number, b: number, c?: number): number {
  return a + b;
}
console.log(add(4, 2));
// 리턴 타입 없을 때 void
function print(name: string, age: number): void {
  // return name; 오류발생
  console.log(name + "입니다. " + "나이는 " + age);
}
print("주희", 26);
// 결코 함수의 끝에 도달할 수 없을 때 never
function goingOn(): never {
  while (true) {
    console.log("go");
  }
}
// goingOn()
