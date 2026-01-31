// props가 어떤 type인지 표시해야한다
interface Props {
  name: string;
  age?: number; // 넘겨주지 않는 경우도 있으면 ?를 이용
}

export default function Content({ name, age }: Props) {
  return (
    <>
      <h3>안녕! 나는 {name}!!</h3>
    </>
  );
}
