// 1.
let olimpic_newgame: readonly [object, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성계주",
  },
  true,
];
// olimpic_newgame[1] = false;

// 2.
interface Game {
  title: string;
  price: number;
  // optional값 이름? 사용
  desc?: string;
  category: string;
  platform: string;
}

// 3.
function sumA(a: number, b: number): void {
  console.log(a + b);
}
sumA(5, 11);

// 4.
function sumB(...numbers: number[]): number {
  let result: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
console.log(sumB(1, 2, 3, 4, 10));

// 5.
function arrElement<T>(arr: T[], index: number): T | boolean {
  if (arr.length - 1 < index) {
    return false;
  }
  return arr[index];
}
console.log(arrElement<string>(["a"], 1));
console.log(arrElement<string>(["a", "b"], 1));
