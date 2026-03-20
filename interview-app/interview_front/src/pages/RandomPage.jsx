import { Header } from "../components/Header";
import { QuizBox } from "../components/QuizBox";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../styles/randomPage.scss";

export function RandomPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [n, setN] = useState(null);

  // 무작위로 n문항을 가져오는 함수
  const getRandomQuizzes = async () => {
    try {
      const res = await axios.get(`/api-server/randomQuizzes/${n}`);
      // quizzes는 배열 {id, question, answer}
      setQuizzes(res.data.quizzes);
    } catch (err) {
      console.log(err);
    }
  };
  // 페이지 로드 시 실행
  useEffect(() => {
    if (n === null) return;
    getRandomQuizzes();
    setCurrentIndex(0); // 새로 시작할 때 초기화
  }, [n]);

  // 이동버튼
  const prevQuiz = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const nextQuiz = () => {
    setCurrentIndex((prev) => (prev < quizzes.length - 1 ? prev + 1 : prev));
  };
  const quizData = quizzes[currentIndex];
  return (
    <div className="container">
      <Header />
      <div className="pageContainer">
        {/* n이 없으면 버튼 UI */}
        {n === null && (
          <div className="nBox">
            <h2>문제 개수를 선택하세요</h2>
            <div>
              {[5, 10, 15, 20].map((num) => (
                <button className="numBtn" key={num} onClick={() => setN(num)}>
                  {num}문제
                </button>
              ))}
            </div>
          </div>
        )}

        {/* n이 있으면 퀴즈 */}
        {n !== null && quizData && (
          <QuizBox
            quizData={quizData}
            prevQuiz={prevQuiz}
            nextQuiz={nextQuiz}
            nowPage={currentIndex + 1}
            totalPage={quizzes.length}
          />
        )}
      </div>
    </div>
  );
}
