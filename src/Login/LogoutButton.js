import React from "react";
import { withRouter } from "react-router-dom";
import "../css/login.css";

function LogoutButton({ logout, history }) {
  const handleClick = () => {
    logout();
    history.push("/");
  };
  return (
    <button onClick={handleClick} className="headerRegister">
      로그아웃
    </button>
  );
}

export default withRouter(LogoutButton);
