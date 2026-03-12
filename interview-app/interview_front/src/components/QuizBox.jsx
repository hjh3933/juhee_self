import { useState } from "react";
import "../styles/quizBox.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export function QuizBox({ quizData, prevQuiz, nextQuiz }) {
  // category, quiz, answer, nowPage, totalPage
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
        <div
          className="arrow"
          onClick={() => {
            setToggle(true);
            prevQuiz();
          }}
        >
          <IoIosArrowBack className="arrIcon" />
        </div>
        <div className="quizContainer">
          <div className="textBox">
            {toggle ? (
              <span className="quiz">Q. {quizData.quiz}</span>
            ) : (
              <span className="answer">A. {quizData.answer}</span>
            )}
          </div>
          <div className="toggleBtn">
            <button onClick={() => setToggle(!toggle)}>{toggle ? "답변확인" : "문제확인"}</button>
          </div>
        </div>
        <div
          className="arrow"
          onClick={() => {
            setToggle(true);
            nextQuiz();
          }}
        >
          <IoIosArrowForward className="arrIcon" />
        </div>
      </div>
    </div>
  );
}
