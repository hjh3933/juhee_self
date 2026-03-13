import { Link } from "react-router-dom";
import { CategoryBox } from "../components/CategoryBox";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export function HomePage() {
  // 카테고리 가져오는 axios코드
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const res = await axios.get("/api-server/category");
      // res.data
      setCategories(res.data.categories);
    } catch (err) {
      console.log(err);
    }
  };
  // 페이지 로드 시 실행
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="container">
      <Header />
      <div className="pageContainer">
        {categories.map((result, i) => {
          return (
            <CategoryBox
              key={i}
              category={result.category}
              type={result.type}
              count={result.count}
            />
          );
        })}
      </div>
    </div>
  );
}
