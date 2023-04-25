import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const NavigationSidebar = ({
  active = 'explore'
}) => {
  const {currentUser} = useSelector((state) => state.users);

  return (
        <div className={"col-2 col-md-2 col-lg-2 col-xl-2 list-group"}>
          <Link to="/home" className={"list-group-item"}><i
              className="bi bi-house-fill"></i> Home</Link>
          {currentUser && (
          <Link to="profile" className={"list-group-item"}><i
              className="bi bi-person-fill "></i> Profile</Link>)}
          <Link to="register"
                className={"list-group-item"}><i
              className="bi bi-patch-plus-fill "></i> Register</Link>
          {!currentUser &&
              (<Link to="login" className={"list-group-item"}><i
              className="bi bi-door-open-fill "></i> Login</Link>)}

        </div>
  );
};

export default NavigationSidebar;