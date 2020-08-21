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
    };
  }

  componentDidMount() {
    this._getUmbEtc();
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

  render() {
    const { umbEtc } = this.state;
    //찜닭 ㅈㄴ설레네
    return (
      <div className="indexcontainer">
        <div className="indexbox">
          <WiRaindrops />
          <h1 className="indexHeader">Basket.</h1>
          <h1 className="indexContent">
            비가 오는 날, 우산이 필요한 사람들을 위한 학생 서비스.
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
          <button className="indexlogBtn">우산 쓰고 가기</button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}
export default Index;
