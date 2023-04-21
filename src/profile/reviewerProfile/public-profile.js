import React from "react";
import UserReviewComponent from "./reviewComponent";

const PublicProfileComponent = (
    {
      userProfile = {
        "name": "Test User",
        "profilePic": "tesla.png",
        "username": "test101011",
        "bio": "hello! this is my bio",
      }
    }
) => {
  // const tuitArray = useSelector(state => state.tuits)

  return (
      <div>
        <div className={"col-10 ms-0 m-3"}>
          <img src={userProfile.profilePic} className="rounded-circle mb-2"
               width="64px" height="64px"/>
          <h3 className={"m-0 fw-bold"}>{userProfile.name}</h3>
          <p className={"m-0"}>@{userProfile.username}</p>
        </div>
        <div className={"mb-3"}>{userProfile.bio}</div>
        <div>
          <p className="fw-bold m-1">Reviews</p>
          <div className={"list-group"}>
            <UserReviewComponent review={{
              restaurantName: "Restaurant Name 1",
              userReview: "i love this place",
              date: "10/10/10"
            }}/>
            <br/>
          </div>
        </div>
      </div>
  );
};

export default PublicProfileComponent;