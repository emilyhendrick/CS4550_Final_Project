import React from "react";
import {Link} from "react-router-dom";

const UserReviewComponent = (
    {
      review = {
        restaurantName: "Restaurant Name 1",
        userReview: "i love this place",
        date: "10/10/10"
      }
    }
) => {
  return(
      <li className="list-group-item" style={{borderRadius: 5}}>
          <div className={"row justify-content-between pe-2"}>
            <a href={`/profile/${review.restaurantName}`} className={"col-6 fw-bold link-underline link-underline-opacity-0"}>{review.restaurantName}</a>
            <div className={"col-6 text-end p-0"}>{review.date}</div>
          </div>
          <div className="col-12">{review.userReview}</div>
      </li>
  );
};

export default UserReviewComponent;