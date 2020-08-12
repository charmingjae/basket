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

    const res = await axios("/add/data", {
      method: "POST",
      data: { dataUserId: userid, dataPassword: password, dataName: name },
      headers: new Headers(),
    });

    if (res.data) {
      alert("회원가입 완료.");
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
              className="regInput"
              placeholder="UserID"
              onChange={(e) => this._idUpdate(e)}
            ></input>
            <input
              className="regInput"
              placeholder="Password"
              onChange={(e) => this._passwordUpdate(e)}
            ></input>
            <input
              className="regInput"
              placeholder="UserName"
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
