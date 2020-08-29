// import React from "react";
import React, { Component } from "react";
import "../css/Borrowlist.css";
import axios from "axios";

class Borrowlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
      brList: [], //대여자 명단 State
      sendArr: [], //실제반납날짜
    };
    console.log("this.page : ", this.state.page);
  }

  componentDidMount = () => {
    this.getBorrowList();
  };

  //대여자 명단 가져오는 함수 : getBorrowList
  getBorrowList = async () => {
    const res = await axios("http://localhost:4000/get/borrowlist", {
      method: "GET",
      headers: new Headers(),
    });

    this.setState({
      brList: res.data,
    });

    console.log("brList");
    console.log(this.state.brList);
  };

  //책 반납 함수 : returnBook
  returnBook = async () => {
    var checkboxes = document.getElementsByName("element");
    var checkedArr = [];
    for (var i in checkboxes) {
      if (checkboxes[i].checked === true) {
        checkedArr.push(parseInt(checkboxes[i].value));
      }
    }
    await this.setState({
      sendArr: [...checkedArr],
    });

    console.log("CheckedArr : ", checkedArr);
    console.log("SendArr: ", this.state.sendArr);

    if (this.state.sendArr.length === 0) {
      alert("선택 된 명단이 없습니다.");
    } else {
      const res = await axios("http://localhost:4000/post/returnbook", {
        method: "POST",
        data: this.state.sendArr,
        headers: new Headers(),
      });

      if (res.data) {
        alert("삭제 성공");
        // 체크박스 초기화
        for (var i in checkboxes) {
          if (checkboxes[i].checked === true) {
            checkboxes[i].checked = false;
          }
        }
        this.getBorrowList();
      }

      console.log(this.state.sendArr);
    }
  };

  // 체크박스 모두 선택
  checkAllbox(event) {
    const allCheckBox = event.target.checked;
    var checkboxes = document.getElementsByName("element");
    if (allCheckBox) {
      for (var i in checkboxes) {
        if (checkboxes[i].checked === false) {
          checkboxes[i].checked = true;
          console.log(checkboxes[i].value);
        }
      }
    } else {
      for (var i in checkboxes) {
        if (checkboxes[i].checked === true) {
          checkboxes[i].checked = false;
        }
      }
    }
  }

  render() {
    const { brList } = this.state;
    return (
      <div className="indexcontainer">
        <div className="indexbox">
          <h1 className="indexHeader">대여자</h1>
          <div className="buttonDiv">
            <button className="doReturnUmb" onClick={this.returnBook}>
              반납
            </button>
          </div>

          <table className="borTable">
            <thead>
              <tr>
                <th>번호</th>
                <th>이름</th>
                <th>대여 날짜</th>
                <th>반납 날짜</th>
                <th className="thChkbox">
                  <input type="checkbox" onChange={this.checkAllbox}></input>
                </th>
              </tr>
            </thead>
            <tbody>
              {brList.length !== 0 ? (
                brList.map((el, key) => {
                  return (
                    <tr key={key}>
                      <td>{el.id}</td>
                      <td>{el.name}</td>
                      <td>{el.brDate.substring(5, 10)}</td>
                      <td>{el.rtDate.substring(5, 10)}</td>
                      <td>
                        <input
                          type="checkbox"
                          name="element"
                          value={el.id}
                        ></input>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5">대여자가 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Borrowlist;
