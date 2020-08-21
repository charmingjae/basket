import React, { Component } from "react";
import "../css/Register.css";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userid: "",
      password: "",
    };
  }

  _addData = async (e) => {
    const { name } = this.state;
    const { password } = this.state;
    const { userid } = this.state;
    e.preventDefault();

    const res = await axios("http://localhost:4000/add/data", {
      method: "POST",
      data: {
        dataUserId: userid,
        dataPassword: password,
        dataName: name,
      },
      headers: new Headers(),
    });

    // Server.js에서 res.send(false) 여부를 통해 출력되는 값 표시
    if (!res.data) {
      alert("이미 가입된 아이디가 있습니다..");
      return window.location.reload();
    } else {
      alert("회원가입 완료!");
      return window.location.reload();
    }
  };

  _nameUpdate(e) {
    this.setState({ name: e.target.value });
  }

  _passwordUpdate(e) {
    this.setState({ password: e.target.value });
  }

  _idUpdate(e) {
    this.setState({ userid: e.target.value });
  }

  render() {
    return (
      <div className="regContainer">
        <div className="regBox">
          <h1 className="regHeader">Register.</h1>
          <form method="POST" onSubmit={this._addData}>
            <input
              name="id"
              className="regInput"
              placeholder="아이디"
              onChange={(e) => this._idUpdate(e)}
            ></input>
            <input
              className="regInput"
              placeholder="비밀번호"
              onChange={(e) => this._passwordUpdate(e)}
            ></input>
            <input
              className="regInput"
              placeholder="이름"
              onChange={(e) => this._nameUpdate(e)}
            ></input>
            <input type="submit" className="regBtn" value="회원가입"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
