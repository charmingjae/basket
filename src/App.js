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
      id: "",
      pw: "",
      login: false,
    };
  }

  onHeaderSubmit = async (header, login) => {
    // console.log(header);
    // console.log(this.state.page);
    await this.setState({
      page: header,
      login: login,
    });
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
