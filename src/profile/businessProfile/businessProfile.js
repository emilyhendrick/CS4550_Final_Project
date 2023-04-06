import React from "react";

// edit profile component to be moved behind button click
import PublicBusinessProfileComponent from "./publicBusinessProfile";
import EditBusinessProfileComponent from "./editBusinessProfile";

const BusinessProfileComponent = (
    {
      userProfile = {
        "name": "Business Name",
        "profilePic": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        "handle": "test101011",
        "bio": "Small business Small business Small business Small business",
        "address": "100 Boston St, Boston MA, 02222",
        "email": "testUserEmail000@gmail.com",
        "password": "password"
      }
    }
) => {
  // const tuitArray = useSelector(state => state.tuits)

  return(
      <div className={"row"}>
        <div className={"col-10"}>
          <PublicBusinessProfileComponent userProfile={userProfile}/>
          <hr className="solid m-0" style={{borderColor: "black"}}/>
          <br/>
          <EditBusinessProfileComponent userProfile={userProfile}/>
        </div>
        <div className={"col-2 mt-3"}>
          <button type="button" className="btn btn-secondary">Manage Account</button>
        </div>
      </div>

  );
};

export default BusinessProfileComponent;