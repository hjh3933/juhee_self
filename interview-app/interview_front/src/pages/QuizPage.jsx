import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { QuizBox } from "../components/QuizBox";

export function QuizPage() {
  // url로 받음
  const { category } = useParams();
  // 임시 퀴즈 데이터
  const quizData = {
    category: category,
    quiz: "1분 자기소개",
    answer:
      "안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 ",
    totalPage: 13,
    nowPage: 3,
  };
  return (
    <div className="container">
      <Header />
      <div className="pageContainer">
        <QuizBox quizData={quizData} />
      </div>
    </div>
  );
}
