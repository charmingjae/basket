import React from "react";
import "../css/index.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { WiRaindrops } from "react-icons/wi";
import Login from "../Login/Login";

const Index = () => {
  return (
    <div className="indexcontainer">
      <div className="indexbox">
        <WiRaindrops />
        <h1 className="indexHeader">Basket.</h1>
        <h1 className="indexContent">
          비가 오는 날, 우산이 필요한 사람들을 위한 학생 서비스.
        </h1>
        <h1 className="indexCntUmb">남은 우산 개수</h1>
        <h1 className="indexUmbEtc">59</h1>
        {/* <Link to="/login"> */}
        <button className="indexlogBtn">우산 쓰고 가기</button>
        {/* </Link> */}
      </div>
    </div>
  );
};
export default Index;
