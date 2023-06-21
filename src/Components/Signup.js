import React from "react";
import "./Signup.css";
import { useState } from "react";
import { addUser } from "../API/api.js";
import { useEffect } from "react";
const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleInputChange = (e) => {
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    console.log("user");
    e.preventDefault();
    addUser(user);
  };
  return (
    <div className="Signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleInputChange}
          className="AddInput1"
          required
        />
        <input
          type="Email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          className="AddInput1"
          required
          placeholder="Email"
        />
        <input
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInputChange}
          className="AddInput1"
          required
        />
        <input
          name="password"
          value={user.password}
          onChange={handleInputChange}
          className="AddInput1"
          required
          placeholder="Confirm password"
        />
        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default Signup;
