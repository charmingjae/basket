// import React from "react";
import React, { useState, Component } from "react"; //잠시바꾼거
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Home from "../Main/index";
// import Login from "../Login/Login";
// import Register from "../Register/Register";
// import Profile from "../Profile";
// import Users from "../users/Users";
import "../css/header.css";
// import { signIn } from "../Auth/auth";
// import AuthRoute from "../Auth/AuthRoute";
// import LogoutButton from "../Login/LogoutButton";
// import axios from "axios";
// import Modal from "react-awesome-modal";
// import queryString from "query-string";

//응빈 Write - Test용 파일 import
// import Testprofile from "../Test/testProfile";
//--------------------------------------------

//여기까지 응빈 씀

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // visible: false, 바꾸기전
      selected: "Main", //added
      login: this.props.login,
    };
  }

  // Set Modal status
  // _openModal = function () {
  //   this.setState({
  //     visible: true,
  //   });
  // };

  // _closeModal = function () {
  //   this.setState({
  //     visible: false,
  //   });
  // };

  // _selectUserData = async (e) => {
  //   const res = await axios("/send/pw", {
  //     method: "POST",
  //     data: this.state,
  //     headers: new Headers(),
  //   });

  //   if (res.data) {
  //     console.log(res.data);
  //   }
  // };

  componentWillMount = () => {
    console.log("Header.js Component Will Mount!!!");
    console.log(this.props.login);
    console.log(this.state.login);
  };

  componentDidMount = () => {
    console.log("Header.js Component Did Mount!!!");
    console.log(this.props.login);
    console.log(this.state.login);
  };

  componentDidUpdate = () => {
    console.log("Header.js Component Did Update!!!");
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

  selectLogout = () => {
    this.props.onSubmit(this.state.selected, false);
  };

  render() {
    return (
      // <Router>
      //   <div className="con">
      //     <header className="header">
      //       <Link to="/">
      //         <button className="headerName">Basket</button>
      //       </Link>
      //       <Link to="/users">
      //         <button className="headerLogin">회원 정보</button>
      //       </Link>
      //       {/* 로그인 / 로그아웃 */}
      //       {/* {authenticated ? (
      //         <LogoutButton logout={logout} />
      //       ) : ( */}
      //       {this.state.login ? (
      //         <Link to="/login">
      //           <button
      //             className="headerLogin"
      //             onClick={() => this._selectUserData()}
      //           >
      //             로그인
      //           </button>
      //         </Link>
      //       ) : (
      //         <>
      //           <Link to="/login">
      //             <button
      //               className="headerLogin"
      //               onClick={() => this._selectUserData()}
      //             >
      //               로그인
      //             </button>
      //           </Link>
      //           <Link to="/register">
      //             <button className="headerRegister">회원가입</button>
      //           </Link>
      //         </>
      //       )}

      //       {/* )} */}
      //       {/* Import profile */}
      //       {/* <Link to="/profile">
      //       <button className="headerRegister">프로필</button>
      //     </Link> */}
      //       {/* 응빈 Write [Test용] */}
      //       {/* <Link to="/Testprofile">
      //       <button className="headerRegister">테스트프로필</button>
      //     </Link> */}
      //       {/* 여기까지 */}
      //     </header>
      //   </div>
      //   <main>
      //     <Switch>
      //       {/* <Route exact path="" component={Home} /> */}
      //       <Route exact path="/" component={Home} />
      //       <Route exact path="/index" component={Home} />
      //       <Route path="/login" component={Login} />
      //       {/* <Route
      //         path="/login"
      //         render={(props) => (
      //           <Login authenticated={authenticated} login={login} {...props} />
      //         )}
      //       /> */}
      //       <Route path="/register" component={Register} />
      //       {/* Profile Import */}
      //       {/* <AuthRoute
      //         authenticated={authenticated}
      //         path="/profile"
      //         render={(props) => <Profile user={user} {...props} />}
      //       /> */}

      //       {/* 응빈 Write 테스트 */}
      //       {/* <Route
      //         path="/Testprofile"
      //         render={() => <Testprofile testuser={testUser} />}
      //       /> */}
      //       {/* 여기까지 */}
      //       <Route path="/Users" render={() => <Users />} />
      //     </Switch>
      //   </main>
      // </Router>

      <div className="con">
        <header className="header">
          <button className="headerName" onClick={() => this.selectMain()}>
            Basket
          </button>
          {this.props.login === true ? (
            <button className="headerLogin" onClick={() => this.selectUser()}>
              회원정보
            </button>
          ) : null}
          {this.props.login === true ? (
            <button className="headerLogin" onClick={() => this.selectLogout()}>
              로그아웃
            </button>
          ) : (
            <button className="headerLogin" onClick={() => this.selectLogin()}>
              로그인
            </button>
          )}
          {this.props.login === true ? null : (
            <button
              className="headerLogin"
              onClick={() => this.selectRegister()}
            >
              회원가입
            </button>
          )}
        </header>
      </div>
    );
  }
}

export default Header;
