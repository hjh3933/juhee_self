import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { QuizBox } from "../components/QuizBox";
import { quizList } from "../data/quizData";
import { useState } from "react";

export function QuizPage() {
  // url로 받음
  const { category } = useParams();
  // 임시 퀴즈 데이터
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuiz = quizList[currentIndex];

  const quizData = {
    category,
    quiz: currentQuiz.quiz,
    answer: currentQuiz.answer,
    nowPage: currentIndex + 1,
    totalPage: quizList.length,
  };
  // 이동버튼
  const prevQuiz = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const nextQuiz = () => {
    setCurrentIndex((prev) => (prev < quizList.length - 1 ? prev + 1 : prev));
  };
  return (
    <div className="container">
      <Header />
      <div className="pageContainer">
        <QuizBox quizData={quizData} prevQuiz={prevQuiz} nextQuiz={nextQuiz} />
      </div>
    </div>
  );
}
