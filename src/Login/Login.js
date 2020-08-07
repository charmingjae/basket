import React, { useState } from "react";
import "../css/login.css";
import { Redirect } from "react-router-dom";

function Login({ authenticated, login, location }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    try {
      login({ id, password });
    } catch (e) {
      alert("Failed to login");
      setId("");
      setPassword("");
    }
  };

  const { from } = location.state || { from: { pathname: "/" } };
  if (authenticated) return <Redirect to={from} />;

  return (
    <div className="container">
      <div className="box">
        <h1 className="logHeader">Login.</h1>
        <input
          className="logInput"
          placeholder="UserID"
          value={id}
          onChange={({ target: { value } }) => setId(value)}
        />
        <input
          className="logInput"
          placeholder="Password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <input
          type="button"
          className="logBtn"
          value="로그인"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

// 하단 백업
// const Login = () => {
//   return (
//     <div className="container">
//       <div className="box">
//         <h1 className="logHeader">Login.</h1>
//         <input className="logInput" placeholder="UserID"></input>
//         <input className="logInput" placeholder="Password"></input>
//         <input
//           type="submit"
//           className="logBtn"
//           value="로그인"
//           onClick={() => alert("alert Test")}
//         ></input>
//       </div>
//     </div>
//   );
// };

export default Login;
