// 호출할 때마다 타입이 달라진다면 any: ts사용의 의미를 잃음
function arrLength(arr: any[]): number {
  return arr.length;
}

// Generic: 함수를 호출할 때 데이터 타입을 지정할 수 있는 문법
// 선언
function arrLength2<T>(arr: T[]): number {
  return arr.length;
}
console.log(arrLength2<string>(["a"]));
console.log(arrLength2<number>([1, 2, 3, 4]));
