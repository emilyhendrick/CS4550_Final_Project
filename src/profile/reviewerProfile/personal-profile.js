import React from "react";
import PublicProfileComponent from "./public-profile";

// edit profile component to be moved behind button click
import EditProfileComponent from "./editProfileComponent";

const PersonalProfileComponent = (
    {
      userProfile = {
        "name": "Test User",
        "profilePic": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        "handle": "test101011",
        "bio": "hello! this is my bio",
        "email": "testUserEmail000@gmail.com",
        "password": "password"
      }
    }
) => {
  // const tuitArray = useSelector(state => state.tuits)

  return(
      <div className={"row"}>
        <div className={"col-10"}>
          <PublicProfileComponent userProfile={userProfile}/>
          <hr className="solid m-0" style={{borderColor: "black"}}/>
          <br/>
          <EditProfileComponent userProfile={userProfile}/>
        </div>
        <div className={"col-2 mt-3"}>
          <button type="button" className="btn btn-secondary">Manage Account</button>
        </div>
      </div>

  );
};

export default PersonalProfileComponent;