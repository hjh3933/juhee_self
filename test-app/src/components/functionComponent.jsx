export function FunctionComponent1() {
  return (
    <div>
      <h1>함수형 컴포넌트입니다!</h1>
    </div>
  );
}

export function FunctionComponent2() {
  const name = "주희";
  const hello = "안녕하세요!";
  return (
    <div className="container">
      <p>안녕하세요 저는 {name}입니다</p>
      <button
        onClick={() => {
          alert(hello);
        }}
      >
        클릭!
      </button>
    </div>
  );
}
export function FunctionComponent3() {
  const animal = "강아지";
  const fruit = "사과";
  // if문, for문은 jsx 내부에 사용불가, 별도로 이곳에서 저장하고 사용
  return (
    <div>
      {/* 3항 연산자 조건?참일때:아닐때 */}
      <p>{animal === "강아지" ? "멍멍!!" : "냐옹"}</p>
      <p>
        {fruit === "오렌지" ? (
          <h3>아오 상큼해!</h3>
        ) : (
          <div>
            <h4>달콤고소해요</h4>
          </div>
        )}
      </p>
    </div>
  );
}
export function FunctionComponent4() {
  const blueStyle = {
    backgroundColor: "blue",
    width: "200px",
    height: "200px",
    lineHeight: "200px",
  };
  return (
    <div>
      <h3>즐거운 색깔놀이</h3>
      <div
        style={{
          backgroundColor: "red",
          width: "200px",
          height: "200px",
          lineHeight: "200px",
        }}
      >
        나는 빨강!
      </div>
      <div style={blueStyle}>나는 무슨색?</div>
    </div>
  );
}
