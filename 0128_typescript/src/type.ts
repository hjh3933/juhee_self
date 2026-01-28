// 기본
let a: number = 1;
let b: object = {
  name: "juhee",
  friends: null,
};
// 웬만하면 지양
let c: any;
c = "hi";
c = 3;
c = true;

// 1. tuple: js의 배열과 같음
// 순서와 개수가 정해져있는 배열
// 배열의 각각의 타입에 모두 type을 지정해야한다
let drink: [string, number];
drink = ["cola", 1];
drink[1] = 2;
console.log(drink);
// readonly(읽기만 가능한 튜플 타입)
let drink2: readonly [string, number] = ["cola", 2500];
// drink2[1] = 3000; 불가능
console.log(drink2);

// 2. Enum: 열거형, 값들에 미리 이름을 정의하고 사용하는 타입
// 숫자 열거형, 문자 열거형이 있다
// 문자열이나 숫자에 미리 의미를 지정해두고 그룹화 할 수 있는 속성
// 선언 이후로는 내용 추가나 삭제가 불가능
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}
// 숫자 생략하면 위부터 0,1,2
enum Auth2 {
  admin,
  user,
  guest,
}
console.log(Auth.guest, Auth2.user);
