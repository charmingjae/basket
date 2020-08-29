// import React from "react";
import React, { Component } from "react";
import "../css/setUmb.css";
import axios from "axios";

class SetUmb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      umbEtc: 0,
    };
  }

  umbEtcValue = async (e) => {
    await this.setState({ umbEtc: e.target.value });
  };

  updateUmb = async () => {
    const res = await axios("http://localhost:4000/update/etc", {
      method: "POST",
      data: this.state,
      headers: new Headers(),
    });

    if (res.data) {
      this.setState({
        umbEtc: res.data,
      });
      alert("수정 완료");
      var input = document.getElementById("setUmbInput");
      input.value = null;
    } else {
      alert("오류가 있습니다.");
    }
  };

  openLab = async () => {
    const page = "Lab";
    this.props.onSubmit(page);
  };

  render() {
    return (
      <div className="setUmbcontainer">
        <div className="setUmbbox">
          <h1 className="setUmbHeader">SETUMB</h1>
          {/* <button className="updateUmbEtc" onClick={() => this.openLab()}>
            실험실로
          </button> */}
        </div>
        <div className="setUmbInput">
          <input
            type="number"
            className="UmbInput"
            id="setUmbInput"
            placeholder="?"
            onChange={(e) => this.umbEtcValue(e)}
          ></input>
          <button className="subUmbCnt" onClick={() => this.updateUmb()}>
            개수 수정
          </button>
        </div>
      </div>
    );
  }
}

export default SetUmb;
