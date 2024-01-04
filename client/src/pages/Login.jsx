import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  // const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    axios.get("http://localhost:5000/api/users/register").then((res) => {
      console.log(res.data);
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );
      const token = response.data.token;
      if (token) {
        alert("Login Successful");
        setEmail("");
        setPassword("");
        fetchUsers();
        localStorage.setItem("token", token);
        navigate("/home");
      } else {
        // Handle scenario if token is not received
        console.log("Token is undefined or null");
      }
    } catch (error) {
      console.log("Login Error", error);
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
        <form
          className="text-center border rounded-lg w-[600px] h-[400px] p-9"
          onSubmit={handleLogin}
        >
          <label>Email</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button
            className="w-[200px] h-[50px] border hover:bg-teal-900"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center bg-teal-800">
        <h2 className="text-3xl text-white ">Login</h2>
      </div>
    </div>
  );
};

export default Login;
