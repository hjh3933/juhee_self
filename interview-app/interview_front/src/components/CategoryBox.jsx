import "../styles/categoryBox.scss";

export function CategoryBox({ category }) {
  return (
    <div className="cBoxContainer">
      <div className="cBox cBox1">
        <div>{category}</div>
      </div>
      <div className="cBox cBox2">
        <div className="lDetail detail">
          {/* 추후 props로 받아 변경 */}
          <span>주관식</span>
          <span>9문항</span>
        </div>
        <div className="RDetail detail">
          <span>⭐⭐⭐</span>
        </div>
      </div>
    </div>
  );
}
