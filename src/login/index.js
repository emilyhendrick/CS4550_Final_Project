
import "./login.css";

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
function LoginComponent() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const handleLogin = async () => {
  try {
    await dispatch(loginThunk({ username, password }));
    navigate("/profile");
  } catch (e) {
    alert(e);
  }
 };
return(

<>
<h2>Login Form</h2>

  <div className="imgcontainer">
    <img src="/images/user.jpg" alt="Avatar" className="avatar"/>
  </div>

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" value={username}  onChange={(event) => setUsername(event.target.value)} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" value={password}
                                                                          onChange={(event) => setPassword(event.target.value)} required/>

    <button type="submit" onClick={handleLogin}>Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div className="container" >
    <button type="button" className="cancelbtn" >Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>

</>
);

}

export default LoginComponent;