import { Link, useNavigate } from "react-router-dom";
import "../styles/header.scss";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [userid, setUserid] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  // 로그인 상태 체크 (토큰 기준)
  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("userid");

    if (!token) {
      setIsLogin(false);
      setUserid("");
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const exp = payload.exp * 1000;

      // 토큰 만료 체크
      if (Date.now() > exp) {
        localStorage.removeItem("token");
        localStorage.removeItem("userid");

        setIsLogin(false);
        setUserid("");
      } else {
        setIsLogin(true);
        setUserid(id);
      }
    } catch (err) {
      setIsLogin(false);
      setUserid("");
    }
  }, []);

  // 바깥 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 로그아웃
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    setIsLogin(false);
    setUserid("");
    setIsOpen(false);
    alert("로그아웃되었습니다.");
    navigate("/");
  };

  return (
    <div className="headerContainer">
      <div className="nBox nBox1">
        <div className="lMenu">
          <span>
            <a href="/category/random">Random</a>
          </span>
          <span>
            <a href="">Rank</a>
          </span>
        </div>
      </div>
      <div className="nBox nBox2">
        <div className="logo">
          <a href="/">
            <img src="/assets/Quiz.png" alt="logoImage" />
          </a>
        </div>
      </div>
      <div className="nBox nBox3">
        <div className="rMenu" ref={menuRef}>
          <span>
            {isLogin ? (
              <span className="nickname" onClick={() => setIsOpen(!isOpen)}>
                {userid}
              </span>
            ) : (
              <>
                <Link to="/joinpage/login">Login</Link> | <Link to="/joinpage/join">Join</Link>
              </>
            )}
          </span>
          {isLogin && isOpen && (
            <div className="detailMenu">
              <div>마이페이지</div>
              <div onClick={handleLogout}>로그아웃</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
