import { Link, useNavigate } from "react-router-dom";
export function RouteNotFound() {
  const navi = useNavigate();
  // a태그 대신 Link를 사용하면 새로고침 없이 페이지 이동이 가능하다
  return (
    <>
      <div>
        <h1>404NotFound</h1>
        <Link to={"/"}>메인페이지로 이동!</Link>
        {/* useNavigate: 페이지 앞뒤로 이동가능 */}
        <ol>
          <li>
            <button
              onClick={() => {
                navi(-1);
              }}
            >
              Go back
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navi(1);
              }}
            >
              Go forward
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navi("/");
              }}
            >
              Go root
            </button>
          </li>
        </ol>
      </div>
    </>
  );
}
