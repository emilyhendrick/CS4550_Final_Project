
import "./login.css";
import * as userService from "../services/users-service";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/user-thunks";
function LoginComponent() {
  const [user, setUser] = useState({
    username: "testUser",
    password: "password",
    firstName: "Test",
    lastName: "User",
  });
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const handleLogin = async () => {
 // try {
    await dispatch(loginThunk(user));
    navigate("/");
 // } catch (e) {
  //  alert(e);
 // }
 };
return(

<>
<h2>Login Form</h2>

  <div className="imgcontainer">
    <img src="/images/user.jpg" alt="Avatar" className="avatar"/>
  </div>

  <div className="container form-group">
    <label for="uname"><b>Username</b></label>
    <input type="text" className="form-control" placeholder="Enter Username" name="uname" value={user.username}   onChange={(e) => setUser({ ...user, username: e.target.value })} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" className="form-control" placeholder="Enter Password" name="psw" value={user.password}
                                                                           onChange={(e) => setUser({ ...user, password: e.target.value })} required/>

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