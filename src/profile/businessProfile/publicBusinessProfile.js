import React from "react";
import BusinessReviewComponent from "./businessReviewComponent";

const PublicBusinessProfileComponent = (
    {
      userProfile = {
        "name": "Test User",
        "profilePic": "tesla.png",
        "address": "100 Boston St, Boston MA, 02222",
        "bio": "Small business",
      }
    }
) => {
  // const tuitArray = useSelector(state => state.tuits)

  return (
      <div>
        <div className={"col-12 ms-0 mt-3 mb-3"}>
          <img src={userProfile.profilePic} className=" img-fluid mb-2" style={{objectFit: "cover", width: "100%", height: 300}}/>
          <h3 className={"m-0 fw-bold"}>{userProfile.name}</h3>
          <p className={"m-0"}>{userProfile.address}</p>
        </div>
        <div className={"mb-3"}>{userProfile.bio}</div>
        <div>
          <p className="fw-bold m-1">Reviews</p>
          <div className={"list-group"}>
            <BusinessReviewComponent review={{
              userName: "UserName 1",
              userReview: "i love this place",
              date: "10/10/10"
            }}/>
            <br/>
          </div>
        </div>
      </div>
  );
};

export default PublicBusinessProfileComponent;