import React from "react";
import "../css/Register.css";

const Register = () => {
  return (
    <div className="regContainer">
      <div className="regBox">
        <h1 className="regHeader">Register.</h1>
        <input className="regInput" placeholder="UserID"></input>
        <input className="regInput" placeholder="Password"></input>
        <input className="regInput" placeholder="UserName"></input>
        <input
          type="submit"
          className="regBtn"
          value="회원가입"
          onClick={() => alert("alert Test")}
        ></input>
      </div>
    </div>
  );
};

export default Register;
