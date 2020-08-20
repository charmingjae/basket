import React, { Component } from "react";
import Header from "./Component/Header";
import Main from "./Main/index";
import Login from "./Login/Login";
import Register from "./Register/Register";
import User from "./users/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Main",
      id: "",
      pw: "",
      login: sessionStorage.loginStat,
    };
  }

  _componentWillMount = () => {
    this.setState({
      login: sessionStorage.loginStat,
    });
  };

  onHeaderSubmit = async (header, login) => {
    // console.log(header);
    // console.log(this.state.page);
    await this.setState({
      page: header,
      login: login,
    });

    console.log("sessionStorage's id Value is");
    console.log(sessionStorage.getItem("id"));
    console.log("sessionStorage's pw Value is");
    console.log(sessionStorage.getItem("pw"));
    console.log("sessionStorage's loginStat Value is");
    console.log(sessionStorage.getItem("loginStat"));
  };

  onLoginSubmit = async (id, pw, login) => {
    await this.setState({
      page: "Main",
      id: id,
      pw: pw,
      login: login,
    });

    console.log("onLoginSubmit");
    console.log(this.state.login);
  };

  render() {
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
