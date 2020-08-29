// import React from "react";
import React, { Component } from "react";
import "../css/Overduelist.css";
import axios from "axios";

class Returnlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
      odList: [],
      sendArr: [],
    };
    console.log("this.page : ", this.state.page);
  }

  componentDidMount = () => {
    this.getOverdueList();
  };

  //반납자 명단 가져오는 함수 : getBorrowList
  getOverdueList = async () => {
    const res = await axios("http://localhost:4000/get/overduelist", {
      method: "GET",
      headers: new Headers(),
    });

    this.setState({
      odList: res.data,
    });

    console.log("odList");
    console.log(this.state.odList);
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
    const { odList } = this.state;
    return (
      <div className="indexcontainer">
        <div className="indexbox">
          <h1 className="indexHeader">반납자</h1>
          <div className="buttonDiv">
            <button className="doReturnUmb" onClick={this.returnBook}>
              종료
            </button>
          </div>

          <table className="borTable">
            <thead>
              <tr>
                <th>번호</th>
                <th>이름</th>
                <th>기존 반납 날짜</th>
                <th>실제 반납 날짜</th>
                <th className="thChkbox">
                  <input type="checkbox" onChange={this.checkAllbox}></input>
                </th>
              </tr>
            </thead>
            <tbody>
              {odList.length !== 0 ? (
                odList.map((el, key) => {
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
                  <td colSpan="5">반납자가 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Returnlist;
