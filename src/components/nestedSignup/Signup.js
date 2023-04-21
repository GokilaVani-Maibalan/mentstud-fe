import Button from "react-bootstrap/Button";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  let handleMSignup = () => {
    navigate("/signup/mentorsignup");
  };
  let handleSSignup = () => {
    navigate("/signup/studentsignup");
  };
  return (
    <div>
      <h1 className="login">SignUp</h1>
      <div className="button">
        <Button onClick={() => handleMSignup()}>Mentor SignUp</Button>
        <Button onClick={() => handleSSignup()}>Student SignUp</Button>
      </div>
      <Outlet />
    </div>
  );
}

export default Signup;
