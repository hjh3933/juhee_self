import Content from "./content";

export default function MainPage() {
  return (
    <>
      <Content name="juhee" />
      {/* <Content /> 하위 컴포넌트에서 정의된 props라면 반드시 넘겨야한다 */}
    </>
  );
}
