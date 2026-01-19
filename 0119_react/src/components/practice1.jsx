import { useState } from "react";

export function StatePrac1() {
  const [number, setNumber] = useState(0);
  const addNumber = () => {
    setNumber(number + 1);
  };
  const minusNumber = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <div>
        {number}
        {number < 8 ? "🥰" : "😭"}
      </div>
      <div>
        <button onClick={addNumber}>1 증가</button>
        <button onClick={minusNumber}>1 감소</button>
      </div>
    </div>
  );
}
