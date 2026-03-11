import { useState } from "react";

export function QuizBox({ quizData }) {
  // category, quiz, answer
  // 전체 문제 수와 현재 문제 위치 받기
  const [toggle, setToggle] = useState(true);
  return (
    <div className="qBoxContainer">
      <div className="qBoxTitle">
        <span>{quizData.category}</span>
        <span>
          {quizData.nowPage} / {quizData.totalPage}
        </span>
      </div>
      <div className="qBoxContent">
        <div className="arrow arrL">왼쪽 화살표</div>
        <div className="quizContainer">
          <div className="textBox">
            {toggle ? (
              <span className="quiz">{quizData.quiz}</span>
            ) : (
              <span className="answer">{quizData.answer}</span>
            )}
          </div>
          <div className="toggleBtn">
            <button onClick={() => setToggle(!toggle)}>{toggle ? "답변확인" : "문제확인"}</button>
          </div>
        </div>
        <div className="arrow arrR">오른쪽 화살표</div>
      </div>
    </div>
  );
}
