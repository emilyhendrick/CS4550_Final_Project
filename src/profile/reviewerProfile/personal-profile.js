import React, {useEffect, useState} from "react";
import PublicProfileComponent from "./public-profile";

// edit profile component to be moved behind button click
import EditProfileComponent from "./editProfileComponent";
import {useNavigate, useParams} from "react-router-dom";
import * as userService from "../../services/users-service";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk, profileThunk} from "../../services/user-thunks";

const PersonalProfileComponent = (
    {
      userProfile = {
        "name": "Test User",
        "profilePic": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        "username": "test101011",
        "bio": "hello! this is my bio",
        "email": "testUserEmail000@gmail.com",
        "password": "password"
      }
    }
) => {
  const { username } = useParams();
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getProfile = async () => {
    const action = await dispatch(profileThunk());
    setProfile(action.payload);
  };
  const getUserByUsername = async () => {
    const user = await userService.findUserByUsername(username);
    setProfile(user);
  };
  const logout = async () => {
    await dispatch(logoutThunk());
    navigate("/login");
  };
  useEffect(() => {
    if (username) {
      getUserByUsername();
    } else {
      getProfile();
    }
  }, []);

  return(
      <div className={"row"}>
        <div className={"col-10"}>
          <p>Username: {username}</p>
          <PublicProfileComponent userProfile={profile}/>
          <hr className="solid m-0" style={{borderColor: "black"}}/>
          <br/>
          <div>
            {profile && (
                <div>
                  <label>Username</label>
                  {currentUser && (
                      <input
                          type="text"
                          className="form-control"
                          value={profile.username}
                          onChange={(e) =>
                              setProfile({ ...profile, username: e.target.value })
                          }
                      />
                  )}
                  {!currentUser && <p>{profile.username}</p>}
                  <label>First Name</label>
                  {currentUser && (
                      <input
                          type="text"
                          className="form-control"
                          value={profile.firstName}
                          onChange={(e) =>
                              setProfile({ ...profile, firstName: e.target.value })
                          }
                      />
                  )}
                  {!currentUser && <p>{profile.firstName}</p>}
                </div>
            )}
            {currentUser && (
                <button onClick={() => logout()} className="btn btn-danger">
                  Logout
                </button>
            )}
          </div>
        </div>
        <div className={"col-2 mt-3"}>
          <button type="button" className="btn btn-secondary">Manage Account</button>
        </div>
      </div>

  );
};

export default PersonalProfileComponent;