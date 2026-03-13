import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { QuizBox } from "../components/QuizBox";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function QuizPage() {
  // url로 받음
  const { category } = useParams();
  // 실제 퀴즈 데이터
  const [quizzes, setQuizzes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getQuizzes = async () => {
    try {
      const res = await axios.get(`/api-server/quizzes/${category}`);
      // quizzes는 배열 {id, question, answer}
      setQuizzes(res.data.quizzes);
    } catch (err) {
      console.log(err);
    }
  };
  // 페이지 로드 시 실행
  useEffect(() => {
    getQuizzes();
  }, [category]);

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
        {quizData && (
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
