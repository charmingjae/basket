// import React from "react";
import React, { Component } from "react";
import "../css/myinfo.css";
import axios from "axios";

class MyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
      name: sessionStorage.getItem("id"),
      dateInfo: [],
    };
    console.log("this.page : ", this.state.page);
    console.log("Myinfo Session id : ", sessionStorage.getItem("id"));
  }

  componentDidMount() {
    this.getMyinfo();
  }

  getMyinfo = async () => {
    console.log("myInfos post name : ", this.state.name);
    const res = await axios("http://localhost:4000/get/myinfo", {
      method: "POST",
      data: this.state,
      headers: new Headers(),
    });

    // Log
    if (res.data[0] === undefined) {
      console.log("res.data : ", res.data);
      // alert("값을 못 가져왔습니다.");
    } else {
      this.setState({ dateInfo: res.data });
    }
  };
  //dateInfo[0].brDate   setState 둘다 xxxxx대여안함
  render() {
    // 날짜 정보 가져오기
    const { dateInfo } = this.state;
    console.log("dateInfo : ", dateInfo);
    console.log("dateInfo's Length", dateInfo.length);
    return (
      <div className="indexcontainer">
        <div className="indexbox">
          <h1 className="indexHeader">내 정보</h1>
          {dateInfo.length !== 0 ? (
            <>
              <h1 className="notBorrowDate">대여 날짜</h1>
              <h1 className="contBorrowDate">
                {dateInfo[0].brDate.substring(5, 10)}
              </h1>
              <h1 className="notReturnDate">반납 일자</h1>
              <h1 className="contReturndate">
                {dateInfo[0].rtDate.substring(5, 10)}
              </h1>
            </>
          ) : (
            <h1 className="notBorrow">우산을 대여하지 않았습니다!</h1>
          )}
          <button className="updateUmbEtc">미정</button>
        </div>
      </div>
    );
  }
}

export default MyInfo;
