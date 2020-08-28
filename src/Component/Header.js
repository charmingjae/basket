import React, { Component } from "react"; //잠시바꾼거
import "../css/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // visible: false, 바꾸기전
      selected: "Main", //added
      login: this.props.login,
    };
  }

  componentWillMount = () => {
    // console.log("Header.js Component Will Mount!!!");
    // console.log(this.props.login);
    // console.log(this.state.login);
  };

  componentWillUpdate = () => {
    // console.log("Header.js Component Will Update!!!");
    // console.log(this.state.login);
  };

  componentDidUpdate = () => {
    // console.log("Header.js Component Did Update!!!");
    // console.log(this.state.login);
  };

  selectMain = async () => {
    await this.setState({
      selected: "Main",
    });
    this.props.onSubmit(this.state.selected, this.props.login);
  };

  selectLogin = async () => {
    await this.setState({
      selected: "Login",
    });
    this.props.onSubmit(this.state.selected, this.props.login);
  };

  selectRegister = async () => {
    await this.setState({
      selected: "Register",
    });
    this.props.onSubmit(this.state.selected, this.props.login);
  };

  selectUser = async () => {
    await this.setState({
      selected: "User",
    });
    this.props.onSubmit(this.state.selected, this.props.login);
  };

  selectLab = async () => {
    await this.setState({
      selected: "Lab",
    });
    this.props.onSubmit(this.state.selected, this.props.login);
  };

  selectLogout = () => {
    sessionStorage.setItem("loginStat", false);
    sessionStorage.setItem("id", null);
    sessionStorage.setItem("pw", null);
    this.props.onSubmit(this.state.selected, false);
    // Reload Header Component
    window.location.reload(true);
  };

  selectMyInfo = async () => {
    await this.setState({
      selected: "MyInfo",
    });
    this.props.onSubmit(this.state.selected, this.props.login);
  };

  render() {
    if (this.state.login === "true") {
      return (
        <div className="con">
          <header className="header">
            <button className="headerName" onClick={() => this.selectMain()}>
              Basket
            </button>

            <button className="headerLogin" onClick={() => this.selectLab()}>
              실험실
            </button>

            <button className="headerLogin" onClick={() => this.selectMyInfo()}>
              내 정보
            </button>

            <button className="headerLogin" onClick={() => this.selectUser()}>
              회원정보
            </button>

            <button className="headerLogin" onClick={() => this.selectLogout()}>
              로그아웃
            </button>
          </header>
        </div>
      );
    } else {
      // 로그인 페이지 진입 시 헤더에 '로그인' 없애기
      if (this.state.selected === "Login") {
        return (
          <div className="con">
            <header className="header">
              <button className="headerName" onClick={() => this.selectMain()}>
                Basket
              </button>

              <button
                className="headerLogin"
                onClick={() => this.selectRegister()}
              >
                회원가입
              </button>
            </header>
          </div>
        );
      } else {
        return (
          <div className="con">
            <header className="header">
              <button className="headerName" onClick={() => this.selectMain()}>
                Basket
              </button>
              <button
                className="headerLogin"
                onClick={() => this.selectLogin()}
              >
                로그인
              </button>

              <button
                className="headerLogin"
                onClick={() => this.selectRegister()}
              >
                회원가입
              </button>
            </header>
          </div>
        );
      }
    }
  }
}

export default Header;
