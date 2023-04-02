import {useDispatch} from "react-redux";
import React from "react";
import './review.css';

import ReviewStat from "./review-stats";

import {deleteReview, createReview}
 from "./review-reducer";


const ReviewItem = (
 {
   review = {
   "_id": 234,
   "topic": "Space",
   "userName": "SpaceX",
    "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    "time": "2h",
    "image": "space.png",
    "liked": true,
    "replies": 123,
    "retuits": 432,
    "likes": 2345,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

   }
 }) => {

 const dispatch = useDispatch();
 const deleteReviewHandler = (id) => {
   dispatch(deleteReview(id));
 }

return(
 <li className="list-group-item">
   <div className="row">
     <div className="col-auto">
       <img width={50}
            className="float-end rounded-circle"
            src={`/images/${review.image}`}/>
     </div>

     <i className="col-1">{review.topic}</i>
     <i className="col-1 bi bi-patch-check-fill"></i>
     <i className="col-1">@{review.userName}</i>
     <i className="col-2">{review.time}</i>
     <i className="col-1 noPadding bi bi-star-fill"></i>
     <i className="col-1 noPadding bi bi-star-fill"></i>
     <i className="col-1 noPadding bi bi-star-fill"></i>
     <i className="col-1 noPadding bi bi-star-half"></i>
     <i className="col-1 noPadding bi bi-star"></i>
     <i className="col-1">4.5/5 </i>
      </div>
           <i className="col-auto">{review.tuit}</i>
              <ReviewStat
              key={review._id} review={review}/>
        </li>
 )
}
export default ReviewItem;