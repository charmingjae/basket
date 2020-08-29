// import React from "react";
import React, { Component } from "react";
import "../css/lab.css";

class Lab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
    };
    console.log("this.page : ", this.state.page);
  }

  openSetUmb = async () => {
    const page = "Setumb";
    this.props.onSubmit(page);
  };

  openBorrowList = async () => {
    const page = "Borrowlist";
    this.props.onSubmit(page);
  };

  render() {
    return (
      <div className="indexcontainer">
        <div className="indexbox">
          <h1 className="indexHeader">LAB</h1>
          <h1 className="indexContent">하단 메뉴 이용</h1>
          <button className="updateUmbEtc" onClick={() => this.openSetUmb()}>
            우산 개수 수정
          </button>
          <button
            className="showBorrowList"
            onClick={() => this.openBorrowList()}
          >
            대여자 명단
          </button>
        </div>
      </div>
    );
  }
}

export default Lab;
