import "../styles/header.scss";

export function Header() {
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
          <div className="rMenu">
            <span>
              <a href="">Login</a> | <a href="">Join</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
