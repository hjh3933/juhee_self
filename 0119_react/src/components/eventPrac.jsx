import { useState } from "react";
import apple from "../apple.jpg";
import banana from "../banana.jpg";
import grape from "../grape.jpg";
import peach from "../peach.jpg";

const EventPrac = () => {
  const [fruit, setFruit] = useState("apple");
  const [bgColor, setBgColor] = useState("black");
  const [color, setColor] = useState("white");
  const [text, setText] = useState("text");
  // 과일 이미지 경로
  const fruitImages = {
    apple: apple,
    banana: banana,
    grape: grape,
    peach: peach,
  };
  return (
    <div>
      <div>
        <span>과일: </span>
        <select
          name="fruit"
          id="fruit"
          onChange={(e) => {
            setFruit(e.target.value);
          }}
        >
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="peach">복숭아</option>
        </select>
        <span>배경색: </span>
        <select
          name="bgColor"
          id="bgColor"
          onChange={(e) => {
            setBgColor(e.target.value);
          }}
        >
          <option value="black">검정</option>
          <option value="blue">파랑</option>
          <option value="red">빨강</option>
          <option value="green">초록</option>
        </select>
        <span>글자색: </span>
        <select
          name="color"
          id="color"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        >
          <option value="white">하양</option>
          <option value="blue">파랑</option>
          <option value="red">빨강</option>
          <option value="green">초록</option>
        </select>
      </div>
      <div>
        <span>
          내용:{" "}
          <input
            type="text"
            name="text"
            id="text"
            onChange={(e) => setText(e.target.value)}
          />
        </span>
      </div>
      <div>
        <img
          src={fruitImages[fruit]}
          alt="과일사진"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "200px",
            height: "100px",
            lineHeight: "100px",
            color: color,
            backgroundColor: bgColor,
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
export default EventPrac;
