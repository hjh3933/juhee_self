import { useRef, useState } from "react";

// useState와 generic 함께쓰기
// setter 사용시 설정한 타입으로만 변경가능
// 기본적으로는 generic을 사용하지 않아도 ts가 유추하지만 state값이 null일 수도 있을경우 반드시 generic으로 union타입 전달4
interface Data {
  name: string;
  age: number;
}
export default function Hooks() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  // generic으로 전달 필수!
  const [data, setData] = useState<null | Data>(null);

  // useRef - 변수: 초기값 타입을 generic으로 작성
  const refVal = useRef<number>(0);
  // useRef - dom요소: type에 HTMLInputElement 사용
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <div></div>
    </>
  );
}
