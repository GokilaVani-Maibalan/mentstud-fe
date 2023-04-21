import Button from "react-bootstrap/Button";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let handleMLogin = () => {
    navigate("/login/mentorlogin");
  };
  let handleSLogin = () => {
    navigate("/login/studentlogin");
  };
  return (
    <div>
      <h1 className="login">Login</h1>
      <div className="button">
        <Button onClick={() => handleMLogin()}>Mentor Login</Button>
        <Button onClick={() => handleSLogin()}>Student Login</Button>
      </div>
      <Outlet />
    </div>
  );
}

export default Login;
