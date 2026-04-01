import { IoIosArrowForward } from "react-icons/io";
import { href, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function LoginBox({ option }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState(option);
  const [formData, setFormData] = useState({
    userid: "",
    userpw: "",
    name: "",
  });
  // 회원가입 api
  const joinToPage = async () => {
    // 빈값 검증
    if (!formData.userid || !formData.userpw || !formData.name) {
      alert("모든 값을 입력해주세요.");
      return;
    }
    try {
      const res = await axios.post("/api-server/join", formData);
      setMode("login");
    } catch (err) {
      console.log(err);
    }
  };
  // 로그인 api
  const loginToPage = async () => {
    try {
      const res = await axios.post("/api-server/login", formData);
      console.log(res.data);
      // token 로컬에 저장
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userid", res.data.userid);
      // 메인페이지이동
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="jBoxContainer">
        <div className="jBoxTop">
          <div className="inputBox">
            <label htmlFor="">ID</label>
            <input
              type="text"
              value={formData.userid}
              onChange={(e) => setFormData({ ...formData, userid: e.target.value })}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="">PW</label>
            <input
              type="password"
              value={formData.userpw}
              onChange={(e) => setFormData({ ...formData, userpw: e.target.value })}
            />
          </div>
          {mode === "join" ? (
            <div className="inputBox">
              <label htmlFor="">NAME</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="jBoxMid">
          {mode === "join" ? (
            <button onClick={joinToPage}>Join</button>
          ) : (
            <button onClick={loginToPage}>Login</button>
          )}
        </div>
        <div className="jBoxBot">
          {mode === "join" ? (
            <Link
              to="/joinpage/login"
              onClick={() => {
                setMode("login");
              }}
            >
              <IoIosArrowForward className="icon" /> <span>Login</span>
            </Link>
          ) : (
            <Link
              to="/joinpage/join"
              onClick={() => {
                setMode("join");
              }}
            >
              <IoIosArrowForward className="icon" />
              <span>Join</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
