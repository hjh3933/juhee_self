// interface 여러 오브젝트의 타입을 정의하는 규칙
// 직접만드는 타입?
interface Student {
  name: string;
  grade: number;
  isPassed: boolean;
}

const student1: Student = {
  name: "juhee",
  grade: 89,
  isPassed: true,
};
const student2: Student = {
  name: "juhee",
  grade: 89,
  isPassed: true,
};

// type 사용자 정의타입을 만들어준다
// interface와 달리 object 외에도 문자열, 숫자 등의 제한을 둘 수 있음
type Gender = "Female" | "Male";
const gender: Gender = "Female";
// const gender2: Gender = "male"; 오류
const gender2: Gender = "Male";
