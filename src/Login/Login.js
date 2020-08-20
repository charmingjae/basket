import React, { Component } from "react";
import "../css/login.css";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      login: false,
    };
  }

  _selectUserData = async (e) => {
    // Post to server
    // 총 두 가지 값을 전송
    // id, pw
    const res = await axios("http://localhost:4000/send/pw", {
      method: "POST",
      data: this.state,
      headers: new Headers(),
    });

    if (res.data) {
      console.log(res.data.msg);

      if (res.data.suc) {
        sessionStorage.setItem("loginStat", true);
        sessionStorage.setItem("id", this.state.id);
        sessionStorage.setItem("pw", this.state.password);
        this.props.onSubmit(this.state.id, this.state.password, true);
      }
    }

    // Reload Header Component
    window.location.reload(true);
  };

  _changeID = function () {
    const id_v = document.getElementsByName("id")[0].value;
    // state 의 id 와 헷갈릴 수 있어 변수명을 변경했습니다.

    this.setState({
      id: id_v,
    });
  };

  _changePW = function () {
    const pw_v = document.getElementsByName("password")[0].value;

    this.setState({
      password: pw_v,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="box">
          <h1 className="logHeader">Login.</h1>
          <input
            type="text"
            className="logInput"
            placeholder="UserID"
            name="id"
            onChange={() => this._changeID()}
          />
          <input
            type="text"
            className="logInput"
            placeholder="Password"
            name="password"
            onChange={() => this._changePW()}
          />
          <input
            type="button"
            className="logBtn"
            value="로그인"
            onClick={() => this._selectUserData()}
          />
        </div>
      </div>
    );
  }
}

export default Login;
