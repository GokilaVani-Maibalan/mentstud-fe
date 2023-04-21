import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../App";
import { toast } from "react-toastify";
import Button from "react-bootstrap/esm/Button";

function StudentDashboard() {
  let [data, setData] = useState([]);
  let token = sessionStorage.getItem("token");
  let navigate = useNavigate();

  let logout = () => {
    sessionStorage.clear();
    navigate("/login/studentlogin");
  };

  let getData = async () => {
    try {
      let res = await axios.get(`${url}/student`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(res.data.message);
      setData(res.data.users);
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        toast.error(error.response.data.message);
        logout();
      }
    }
  };

  useEffect(() => {
    if (token) getData();
    else logout();
  }, []);

  console.log(data);
  return (
    <>
      <Button onClick={() => getData()}>Refresh</Button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Batch</th>
            <th>Course</th>
            <th>Mentor Assigned</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e, i) => {
            return (
              <tr key={e._id}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.batch}</td>
                <td>{e.course}</td>
                <td>{e.mentorAssigned}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
export default StudentDashboard;
