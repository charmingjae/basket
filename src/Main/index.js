// import React from "react";
import React, { Component } from "react";
import "../css/index.css";
import { WiRaindrops } from "react-icons/wi";
import axios from "axios";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      umbEtc: [],
      loginChk: "",
      name: sessionStorage.getItem("id"),
    };
  }

  componentDidMount() {
    console.log("Get Session : ", sessionStorage.getItem("id"));
    console.log("Get Login Status : ", sessionStorage.getItem("loginStat"));
    this._getUmbEtc();
  }

  componentDidUpdate() {
    console.log("Update login status : ", sessionStorage.getItem("loginStat"));
  }

  _getUmbEtc = async () => {
    const res = await axios.get("http://localhost:4000/get/etc");

    if (res.data[0] === undefined) {
      let getErrEtc = [];
      getErrEtc.push(res.data);

      return this.setState({ umbEtc: getErrEtc });
    }
    this.setState({ umbEtc: res.data });
  };

  // 우산 빌리러 가기 버튼 이벤트 함수
  borrowUmb = async () => {
    console.log(sessionStorage.getItem("loginStat"));
    if (sessionStorage.getItem("loginStat") === "true") {
      const res = await axios("http://localhost:4000/add/borrow", {
        method: "POST",
        data: this.state,
        headers: new Headers(),
      });

      console.log("반환 여부 : ", res.data);
      if (!res.data) {
        alert("현재 대여중 입니다.");
      } else {
        alert("대여 완료!");
        return (window.location.href = "/");
      }
    } else {
      // 지렸고
      alert("로그인이 필요합니다!");
      await this.setState({
        loginChk: "Login",
      });
      this.props.onSubmit(this.state.loginChk);
    }
  };

  render() {
    const { umbEtc } = this.state;
    return (
      <div className="indexcontainer">
        <div className="indexbox">
          <WiRaindrops />
          <h1 className="indexHeader">Basket.</h1>
          <h1 className="indexContent">
            비가 오는 날, 우산이 필요한 사람들을 위한 대여 서비스.
          </h1>
          <h1 className="indexCntUmb">남은 우산 개수</h1>
          {umbEtc.length !== 0
            ? umbEtc.map((el, key) => {
                return (
                  <h1 className="indexUmbEtc" key={el.id}>
                    {el.etc}
                  </h1>
                );
              })
            : null}
          {/* <Link to="/login"> */}
          <button className="indexlogBtn" onClick={() => this.borrowUmb()}>
            우산 쓰고 가기
          </button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}
export default Index;
