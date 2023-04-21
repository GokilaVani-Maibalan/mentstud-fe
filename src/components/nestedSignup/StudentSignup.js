import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { url } from "../../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function StudentSignup() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [course, setCourse] = useState("");
  let [batch, setBatch] = useState("");
  let [mobile, setMobile] = useState("");
  let navigate = useNavigate();

  // to clear session storage
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  let handleSignup = async () => {
    let payload = { name, email, batch, password, course, mobile };

    try {
      let res = await axios.post(`${url}/student/signup`, payload);
      toast.success(res.data.message);
      //to store in session storage
      sessionStorage.setItem("token", res.data.token);
      //after login and storing navigate to dashboard
      navigate("/dashboard/studentdashboard");
      console.log(res);
    } catch (error) {
      console.log(error);
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
          <Form.Label>Batch</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter batch"
            onChange={(e) => setBatch(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Course</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course"
            onChange={(e) => setCourse(e.target.value)}
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

export default StudentSignup;
