import React from "react";
import {useSelector} from "react-redux";

import ReviewItem
  from "./review-item";

const ReviewList = () => {
 const reviewsArray = useSelector(state => state.reviews);

 return(
   <ul className="list-group">
     {
       reviewsArray.map(review =>
         <ReviewItem
           key={review._id} review={review}/> )
     }
   </ul>
 );
};
export default ReviewList;