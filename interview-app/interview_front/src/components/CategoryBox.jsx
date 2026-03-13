import { Link } from "react-router-dom";
import "../styles/categoryBox.scss";

export function CategoryBox({ category, type, count }) {
  return (
    <Link to={`/category/${category}`} className="categoryLink">
      <div className="cBoxContainer">
        <div className="cBox cBox1">
          <div>{category}</div>
        </div>
        <div className="cBox cBox2">
          <div className="lDetail detail">
            {/* 추후 props로 받아 변경 */}
            <span>{type === "subjective" ? "주관식" : "객관식"}</span>
            <span>{count} 문항</span>
          </div>
          <div className="RDetail detail">
            <span>⭐⭐⭐</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
