// import React from "react";
import React, { useState, Component } from "react"; //잠시바꾼거
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../Main/index";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile";
import "../css/header.css";
import { signIn } from "../Auth/auth";
import AuthRoute from "../Auth/AuthRoute";
import LogoutButton from "../Login/LogoutButton";
import axios from "axios";

function Header() {
  // 민재 Writing
  // const [user, setUser] => 사용자가 로그인 Form에서 입력한 정보 저장

  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ id, password }) => setUser(signIn({ id, password }));
  const logout = () => setUser(null);

  // 여기까지 민재 씀

  return (
    <Router>
      <div className="con">
        <header className="header">
          <Link to="/">
            <button className="headerName">Basket</button>
          </Link>
          {/* 로그인 / 로그아웃 */}
          {authenticated ? (
            <LogoutButton logout={logout} />
          ) : (
            <>
              <Link to="/login">
                <button className="headerLogin">로그인</button>
              </Link>
              <Link to="/register">
                <button className="headerRegister">회원가입</button>
              </Link>
            </>
          )}
          {/* Import profile */}
          <Link to="/profile">
            <button className="headerRegister">프로필</button>
          </Link>
        </header>
      </div>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/login"
            render={(props) => (
              <Login authenticated={authenticated} login={login} {...props} />
            )}
          />
          <Route path="/register" component={Register} />
          {/* Profile Import */}
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={(props) => <Profile user={user} {...props} />}
          />
        </Switch>
      </main>
    </Router>
  );
}

export default Header;
