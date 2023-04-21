import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { url } from "../../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function MentorSignup() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [experience, setExperience] = useState("");
  let [mobile, setMobile] = useState("");
  let navigate = useNavigate();

  // to clear session storage
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  let handleSignup = async () => {
    let payload = { name, email, password, experience, mobile };

    try {
      let res = await axios.post(`${url}/mentor/signup`, payload);
      toast.success(res.data.message);
      //to store in session storage
      sessionStorage.setItem("token", res.data.token);
      //after login and storing navigate to dashboard
      navigate("/dashboard/mentordashboard");
      console.log(res);
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data.message)
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="login-wrapper">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter experience"
            onChange={(e) => setExperience(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter mobile number"
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={() => handleSignup()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default MentorSignup;
