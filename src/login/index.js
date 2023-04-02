import React from "react";
import "./login.css";

const LoginComponent = () => {
return(

<>
<h2>Login Form</h2>

<form action="/action_page.php" method="post">
  <div className="imgcontainer">
    <img src="/images/user.jpg" alt="Avatar" className="avatar"/>
  </div>

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div className="container" >
    <button type="button" className="cancelbtn" style={{backgroundColor: + "#f1f1f1"}}>Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
</>
);


}

export default LoginComponent;