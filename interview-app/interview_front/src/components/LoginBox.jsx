export function LoginBox() {
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
          <div className="inputBox">
            <label htmlFor="">NAME</label>
            <input type="text" />
          </div>
        </div>
        <div className="jBoxBot">
          <span>
            <a href="/joinpage">Login / Join</a>
          </span>
        </div>
      </div>
    </>
  );
}
