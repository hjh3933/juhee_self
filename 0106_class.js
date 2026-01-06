// class
// 1. 클래스 생성(PascalCase)
class House {
  // 속성 부여
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // 메소드
  age() {
    console.log(`건축한지 ${2026 - this.year}년 되었어요`);
  }
}

// 2. 클래스 상속
class Apartment extends House {
  // 미리만들어둔 부모의 속성, 메소드 사용가능
  // 추가로 자신만의 속성 메소드 생성, 사용가능
  constructor() {}
}

const home = new House("레미안", 2015);
console.log(home.age());

// 모듈 PascalCase ES6 (여러개보낼땐 default 쓰지 않음)
export default function sayHi() {
  console.log("hi");
}
console.log(sayHi());
