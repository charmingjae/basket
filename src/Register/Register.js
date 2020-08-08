import React, { Component } from "react";
import "../css/Register.css";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  _addData = async (e) => {
    const { name } = this.state;
    e.preventDefault();

    const res = await axios("/add/data", {
      method: "POST",
      data: { data: name },
      headers: new Headers(),
    });

    if (res.data) {
      alert("데이터를 추가했습니다.");
      return window.location.reload();
    }
  };

  _nameUpdate(e) {
    this.setState({ name: e.target.value });
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
              onChange={(e) => this._nameUpdate(e)}
            ></input>
            {/* <input className="regInput" placeholder="Password"></input>
          <input className="regInput" placeholder="UserName"></input> */}
            <input type="submit" className="regBtn" value="Add"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
