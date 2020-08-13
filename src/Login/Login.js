import React, { Component } from "react";
import Header from "../Component/Header";
import Register from "../Register/Register";
import Home from "../Main/index";
import "../css/login.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

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
    const res = await axios("/send/pw", {
      method: "POST",
      data: this.state,
      headers: new Headers(),
    });

    if (res.data) {
      console.log(res.data.msg);

      // 로그인 성공
      if (res.data.suc) {
        sessionStorage.setItem("login", true);
        this.setState({ login: true });
        // 메인으로 이동
        // window.location.assign("/?login=" + this.state.login);
        this.props.history.push({
          pathname: "/index",
          search: "?login=true",
          state: { login: true },
        });
      }
    }
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
