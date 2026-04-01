import { Link } from "react-router-dom";
import "../styles/header.scss";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [userid, setUserid] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const id = localStorage.getItem("userid");
    setUserid(id);
  }, []);

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
  return (
    <>
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
            {/* <img src="/assets/QuizLogo.png" alt="logoImage" /> */}
            <a href="/">
              <img src="/assets/Quiz.png" alt="logoImage" />
            </a>
          </div>
        </div>
        <div className="nBox nBox3">
          {/* <div className="rMenu">
            <span>
              {userid ? (
                <span className="nickname" onClick={() => setIsOpen(!isOpen)}>
                  {userid}
                </span>
              ) : (
                <Link to="/joinpage/login">Login</Link> | <Link to="/joinpage/join">Join</Link>
              )}
            </span>
            {isOpen && (
              <div className="detailMenu">
                <div>마이페이지</div>
                <div>로그아웃</div>
              </div>
            )}
          </div> */}
          <div className="rMenu" ref={menuRef}>
            <span>
              {userid ? (
                <span className="nickname" onClick={() => setIsOpen(!isOpen)}>
                  {userid}
                </span>
              ) : (
                <>
                  <Link to="/joinpage/login">Login</Link> | <Link to="/joinpage/join">Join</Link>
                </>
              )}
            </span>

            {isOpen && (
              <div className="detailMenu">
                <div>마이페이지</div>
                <div>로그아웃</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
