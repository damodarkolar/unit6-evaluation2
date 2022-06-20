import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  return <div>
    <form action="">
      <input type="email" placeholder="Enter Email Id" onChange={(e) => {console.log(e.target.value)}}/>
      <input type="password" placeholder="Please Enter password" onChange={(e) => {console.log(e.target.value)}}/>
      <input type="Submit" onClick={() => {console.log("added")}}/>
    </form>

  </div>;
};

export default Login;
