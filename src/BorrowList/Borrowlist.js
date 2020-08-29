// import React from "react";
import React, { Component } from "react";
import "../css/lab.css";

class Borrowlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
    };
    console.log("this.page : ", this.state.page);
  }

  render() {
    return (
      <div className="indexcontainer">
        <div className="indexbox">
          <h1 className="indexHeader">대여자</h1>
        </div>
      </div>
    );
  }
}

export default Borrowlist;
