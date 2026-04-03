import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { QuizBox } from "../components/QuizBox";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function QuizPage() {
  const navigate = useNavigate();
  // url로 받음
  const { category } = useParams();
  // 실제 퀴즈 데이터
  const [quizzes, setQuizzes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getQuizzes = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await axios.get(`/api-server/quizzes/${category}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setQuizzes(res.data.quizzes);
    } catch (err) {
      if (err.response?.status === 401) {
        alert("로그인이 만료되었습니다");
        localStorage.removeItem("token");
        navigate("/joinpage/login");
      }
    }
  };
  // 로그인 확인 함수
  const loginCheck = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("로그인 후 이용할 수 있습니다");
      navigate("/joinpage/login");
      return false;
    }

    return true;
  };
  // 페이지 로드 시 실행
  useEffect(() => {
    if (!loginCheck()) return;
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
