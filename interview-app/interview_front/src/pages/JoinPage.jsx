import { useState } from "react";
import { Header } from "../components/Header";
import { JoinBox } from "../components/JoinBox";
import { LoginBox } from "../components/LoginBox";
import "../styles/joinBox.scss";
import { useParams } from "react-router-dom";

export function JoinPage() {
  const { option } = useParams();
  return (
    <>
      <div className="container">
        <Header />
        {/* <div className="pageContainer">{option === "join" ? <JoinBox /> : <LoginBox />}</div> */}
        <div className="pageContainer">
          <LoginBox option={option} />
        </div>
      </div>
    </>
  );
}
