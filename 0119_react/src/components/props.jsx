export function PropsFuntion1(props) {
  return (
    <div>
      <h3>안녕?</h3>
      <p>나는 {props.name}라고해!</p>
      <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
        {props.children}
      </p>
    </div>
  );
}
export function PropsFuntion2({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export function PropsFuntion3({ weather = "날씨가 좋다!" }) {
  return (
    <div>
      <p>오늘은 뭔가 {weather}</p>
    </div>
  );
}
