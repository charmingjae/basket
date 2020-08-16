import React, { Component } from "react";
import Header from "./Component/Header";
import Main from "./Main/index";
import Login from "./Login/Login";
import Register from "./Register/Register";
import User from "./users/Users";
import axios from "axios";

// function App() {
//   return <Header />;
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Main",
      id: localStorage.getItem("id"),
      pw: localStorage.getItem("pw"),
      login: localStorage.getItem("loginStat"),
    };
  }

  onHeaderSubmit = async (header, login) => {
    // console.log(header);
    // console.log(this.state.page);
    await this.setState({
      page: header,
      login: login,
    });

    console.log("localStorage's id Value is");
    console.log(localStorage.getItem("id"));
    console.log("localStorage's pw Value is");
    console.log(localStorage.getItem("pw"));
    console.log("localStorage's loginStat Value is");
    console.log(localStorage.getItem("loginStat"));
  };

  onLoginSubmit = async (id, pw, login) => {
    await this.setState({
      page: "Main",
      id: id,
      pw: pw,
      login: login,
    });

    console.log("Login.js에서 넘어온 회원정보 결과");
    console.log(this.state.id);
    console.log(this.state.pw);
    console.log(this.state.login);
    localStorage.setItem("id", this.state.id);
    localStorage.setItem("pw", this.state.pw);
    localStorage.setItem("loginStat", this.state.login);
  };

  render() {
    // return (
    //   <div className="App">
    //     <h3>
    //       {" "}
    //       Welcome to <u> {this.state.host} </u> Blog!{" "}
    //     </h3>
    //   </div>
    // );

    // localStorage.setItem();
    return (
      <>
        <div className="Header">
          <Header login={this.state.login} onSubmit={this.onHeaderSubmit} />
        </div>

        <div className="Body">
          {this.state.page === "Main" && <Main />}
          {this.state.page === "Login" && (
            <Login onSubmit={this.onLoginSubmit} />
          )}
          {this.state.page === "Register" && <Register />}
          {this.state.page === "User" && <User />}
        </div>
      </>
    );
  }
}

export default App;
