import { useState } from "react";
import { Header } from "../components/Header";
import { JoinBox } from "../components/JoinBox";
import { LoginBox } from "../components/LoginBox";
import "../styles/joinBox.scss";

export function JoinPage() {
  const [menu, setMenu] = useState("login");
  return (
    <>
      <div className="container">
        <Header />
        <div className="pageContainer">{menu === "join" ? <JoinBox /> : <LoginBox />}</div>
      </div>
    </>
  );
}
