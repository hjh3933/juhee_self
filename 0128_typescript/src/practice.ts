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
