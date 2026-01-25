import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
// 오타방지
import { decrease, increase } from "../store/counterSlice";

export function RouteProduct() {
  // useParams() :name 경로에 :사용하여 설정, 여러개인 경우 /:id/:name 처럼 설정함
  const { id } = useParams();

  // store의 상태값을 조회하기 위한 hook함수, 인자로 함수 넘겨야함
  const number = useSelector((state) => state.number);
  // action객체를 넘겨줘야하는 hook함수
  const dispatch = useDispatch();
  return (
    <>
      <div>{id}</div>
      {/* 현재 주소에서 /1 로 이동함 ex) 현재 주소가 product/:id 이므로 product/4 라면 아래 링크 클릭시 product/4/1 주소로 이동 */}
      <Link to="1">1번글</Link>
      <Link to="2">2번글</Link>
      {/* useRedux */}
      <h3>Redux</h3>
      <div>{number}</div>
      <button onClick={() => dispatch(increase())}>+1</button>
      <button onClick={() => dispatch(decrease())}>-1</button>
    </>
  );
}
