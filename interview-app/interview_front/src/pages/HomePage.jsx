import { CategoryBox } from "../components/CategoryBox";
import { Header } from "../components/Header";

export function HomePage() {
  return (
    <div className="container">
      <Header />
      <div
        className="categoryContainer"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px 100px",
        }}
      >
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
