/* src/App.js */

import React, { Component } from "react";
import axios from "axios";
import "../css/users.css";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      list: [],
      update: false,
    };
  }

  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    const res = await axios.get("/get/data");

    if (res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);

      return this.setState({ list: cover });
    }
    this.setState({ list: res.data });
  };

  render() {
    const { list } = this.state;

    return (
      <div className="wraper">
        <div className="tableDiv">
          <h1 style={{ textAlign: "center" }}> User List </h1>
          <div
            className="headerWraper"
            style={{
              border: "solid 1px black",
              width: "50%",
              marginLeft: "25%",
              textAlign: "center",
            }}
          >
            <div
              className="headerContet"
              style={{
                display: "grid",
                gridTemplateColumns: "25% 25% 25% 25%",
                textAlign: "center",
              }}
            >
              <div> 번호 </div>
              <div> 아이디 </div>
              <div> 비밀번호 </div>
              <div> 이름 </div>
            </div>
          </div>

          {list.length !== 0
            ? list.map((el, key) => {
                return (
                  <div
                    className="content"
                    key={key}
                    style={{
                      display: "grid",
                      lineHeight: "40px",
                      gridTemplateColumns: "25% 25% 25% 25%",
                      width: "50%",
                      marginLeft: "25%",
                      textAlign: "center",
                    }}
                  >
                    <div> {el.id} </div>
                    <div> {el.userid} </div>
                    <div> {el.password} </div>
                    <div> {el.name} </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default Users;
