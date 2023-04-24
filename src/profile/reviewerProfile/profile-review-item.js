import {Provider, useDispatch} from "react-redux";
import React from "react";
import {Link} from "react-router-dom";
import store from "../../reducers/store";

const ProfileReviewItem = (
    {
      review = {
        reviewer: {type: String, required: true},
        reviewId: {type: String, required: true, unique: true},
        review: {type: String, required: true},
        rating: {type: Number},
        createdOn: {type: Date, default: Date.now},
        profilePic: {type: String},
        restaurantName: {type: String, required: true}
      }
    }) => {

  const dispatch = useDispatch();
  const deleteReviewHandler = (id) => {
    // dispatch(deleteReview(id));
  }

  const reviewStars = () => {
    if (review.rating.valueOf() === 1) {
      return (
          <div>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star"></i>
            <i className="col-1 noPadding bi bi-star"></i>
            <i className="col-1 noPadding bi bi-star"></i>
            <i className="col-1 noPadding bi bi-star"></i>
          </div>
      );
    } else if (review.rating.valueOf() === 2) {
      return (
          <div>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star"></i>
            <i className="col-1 noPadding bi bi-star"></i>
            <i className="col-1 noPadding bi bi-star"></i>
          </div>
      );
    } else if (review.rating.valueOf() === 3) {
      return (
          <div>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star"></i>
            <i className="col-1 noPadding bi bi-star"></i>
          </div>
      );
    } else if (review.rating.valueOf() === 4) {
      return (
          <div>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star"></i>
          </div>
      );
    } else if (review.rating.valueOf() === 5) {
      return (
          <div>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star-fill"></i>
            <i className="col-1 noPadding bi bi-star-fill"></i>
          </div>
      );
    }
  }
  return (
      <Provider store={store}>
        <div className="list-group-item mb-2"
             style={{border: "1px solid LightGrey", borderRadius: 5}}>
          <div className={"m-3"}>
            <div className="row">
              <Link className={"col pb-0 mb-2"}
                    to={`/restaurant/${review.restaurantName}`} style={{
                color: "dodgerblue",
                textDecoration: "none"
              }}><strong>{review.restaurantName}</strong></Link>
              <p className="col text-end pb-0 mb-2">{review.createdOn}</p>
            </div>
            {reviewStars()}
            <p className={"pb-0 mt-2"}>{review.review}</p>
          </div>
        </div>
      </Provider>
  )
}
export default ProfileReviewItem;