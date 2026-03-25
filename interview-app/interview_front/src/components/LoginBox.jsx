import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export function LoginBox({ option }) {
  return (
    <>
      <div className="jBoxContainer">
        <div className="jBoxTop">
          <div className="inputBox">
            <label htmlFor="">ID</label>
            <input type="text" />
          </div>
          <div className="inputBox">
            <label htmlFor="">PW</label>
            <input type="password" />
          </div>
          {option === "join" ? (
            <div className="inputBox">
              <label htmlFor="">NAME</label>
              <input type="text" />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="jBoxMid">
          {option === "join" ? <button>Join</button> : <button>Login</button>}
        </div>
        <div className="jBoxBot">
          {option === "join" ? (
            <Link to="/joinpage/login">
              <IoIosArrowForward className="icon" /> <span>Login</span>
            </Link>
          ) : (
            <Link to="/joinpage/join">
              <IoIosArrowForward className="icon" />
              <span>Join</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
