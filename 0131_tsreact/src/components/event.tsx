import React, { useRef } from "react";

// React.MouseEvent<HTMLButtonElement>
// React.ChangeEvent<HTMLInputElement>
// React.KeyboardEvent<HTMLInputElement>

export default function Event() {
  function click(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("X:", e.clientX);
    // html요소라서 value없어서 currentTarget 사용불가
    console.log("disabled:", e.currentTarget.disabled);
  }

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("입력값:", e.currentTarget.value);
  }

  function keyboard(e: React.KeyboardEvent<HTMLInputElement>) {
    // 특정 key인식가능
    if (e.key === "Enter") {
      console.log("엔터로 제출:", e.currentTarget.value);
    }
  }

  return (
    <>
      <h3>이벤트 객체 타입 설정</h3>
      <button onClick={click}>클릭이벤트</button>
      <input onChange={change} />
      <input onKeyDown={keyboard} />
    </>
  );
}
// submit 이벤트
function Submit() {
  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault(); // 기존 form기능 작동못하도록 하는 코드 필수!! 안그러면 전송시 다 날아감
    console.log("submit!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input />
      <button type="submit">제출</button>
    </form>
  );
}
