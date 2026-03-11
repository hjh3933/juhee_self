import { Link } from "react-router-dom";
import { CategoryBox } from "../components/CategoryBox";
import { Header } from "../components/Header";

export function HomePage() {
  // 카테고리 가져오는 axios코드
  return (
    <div className="container">
      <Header />
      <div className="pageContainer">
        <CategoryBox category={"자기소개"} />
        <CategoryBox category={"개인프로젝트"} />
        <CategoryBox category={"팀프로젝트"} />
        <CategoryBox category={"팀프로젝트"} />
        <CategoryBox category={"팀프로젝트"} />
        <CategoryBox category={"팀프로젝트"} />
        <CategoryBox category={"팀프로젝트"} />
        <CategoryBox category={"팀프로젝트"} />
        <CategoryBox category={"팀프로젝트"} />
      </div>
    </div>
  );
}
