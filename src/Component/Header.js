import React, { Component } from "react"; //잠시바꾼거
import "../css/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Main",
      login: this.props.login,
    };
  }

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

  selectBorrowlist = async () => {
    await this.setState({
      selected: "Borrowlist",
    });
    this.props.onSubmit(this.state.selected, this.props.login);
  };

  selectSetumb = async () => {
    await this.setState({
      selected: "Setumb",
    });
    this.props.onSubmit(this.state.selected, this.props.login);
  };

  selectOverduelist = async () => {
    await this.setState({
      selected: "Overduelist",
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
      if (sessionStorage.getItem("id") === "admin") {
        return (
          <div className="con">
            <header className="header">
              <button className="headerName" onClick={() => this.selectMain()}>
                Basket
              </button>
              {/* <button className="headerLogin" onClick={() => this.selectLab()}>
                실험실
              </button> */}
              {/* Submenu */}
              <button className="headerToLab">
                L . A . B
                <ul className="sub-menu">
                  <li onClick={() => this.selectSetumb()}>우산 개수 수정</li>
                  <li onClick={() => this.selectBorrowlist()}>대여자 명단</li>
                  <li onClick={() => this.selectOverduelist()}>연체자 명단</li>
                </ul>
              </button>
              <button className="headerMyInfo">
                {sessionStorage.getItem("id")}님 환영합니다!
                <ul className="sub-menu">
                  <li onClick={() => this.selectMyInfo()}>내 정보</li>
                  <li onClick={() => this.selectLogout()}>로그아웃</li>
                </ul>
              </button>
              {/* <button className="headerLogin" onClick={() => this.selectUser()}>
                회원정보
              </button> */}
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
              <button className="headerMyInfo">
                {sessionStorage.getItem("id")}님 환영합니다!
                <ul className="sub-menu">
                  <li onClick={() => this.selectMyInfo()}>내 정보</li>
                  <li onClick={() => this.selectLogout()}>로그아웃</li>
                </ul>
              </button>
            </header>
          </div>
        );
      }
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
