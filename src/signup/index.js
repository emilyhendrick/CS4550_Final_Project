import React, { useState } from "react";
import * as userService from "../services/users-service";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function SignUpComponent() {
  const [user, setUser] = useState({
    username: "alice22",
    password: "alice",
    firstName: "Alice",
    lastName: "Wonderland",
    email: "alice123@gmail.com",
    profilePic: "",
    createdOn: Date.now,
    userRole: "Personal",
  });
  const navigate = useNavigate();
  const register = async () => {
    await userService.register(user);
    navigate("/profile");
  };
return(
<>
<form>
  <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
   <label for="fname"><b>First Name</b></label>
        <input type="text" className="form-control" placeholder="Enter First Name" name="fname" value={user.firstName}
                                                                                                        onChange={(e) => setUser({ ...user, firstName: e.target.value })} required/>
   <label for="lname"><b>First Name</b></label>
        <input type="text" className="form-control" placeholder="Enter Last Name" name="lname" value={user.lastName}
                                                                                                        onChange={(e) => setUser({ ...user, lastName: e.target.value })} required/>

    <label for="email"><b>Email</b></label>
    <input type="text" className="form-control" placeholder="Enter Email" name="email" value={user.email}
                                                                                         onChange={(e) => setUser({ ...user, email: e.target.value })} required/>

       <label for="uname"><b>Username</b></label>
        <input type="text" className="form-control" placeholder="Enter Username" name="uname" value={user.username}
                                                                                                        onChange={(e) => setUser({ ...user, username: e.target.value })} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" className="form-control" placeholder="Enter Password" name="psw"   value={user.password}
                                                                                                  onChange={(e) => setUser({ ...user, password: e.target.value })} required/>


<input type="radio" value="Personal"
      name="radio-role" id="radio-personal" onChange={(e) => setUser({ ...user, userRole: e.target.value })} required/>
<label for="radio-personal">Personal</label><br/>
<input type="radio" value="Business"
      name="radio-role" id="radio-business" onChange={(e) => setUser({ ...user, userRole: e.target.value })} required/>
<label for="radio-business">Business</label><br/>
<input type="radio" value="Admin"
      name="radio-role" id="radio-admin" onChange={(e) => setUser({ ...user, userRole: e.target.value })} required/>
<label for="radio-admin">Admin</label><br/>

<br/>

    <label>
      <input type="checkbox" checked="checked" name="remember" style={{marginBottom: "15px"}}/> Remember me
    </label>


    <p>By creating an account you agree to our <a href="#" style={{color: "dodgerblue"}}>Terms & Privacy</a>.</p>

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" onClick={register}  className="signupbtn">Sign Up</button>
    </div>

  </div>
  </form>
</>
);


}

export default SignUpComponent;