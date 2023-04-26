import React, {useState} from "react";

import {createReview} from "./review-reducer";
import {useDispatch} from "react-redux";
import {Link, useNavigate, useParams}
  from "react-router-dom";
import * as reviewService from "../services/review-service";
import {createReviews} from "../services/review-thunk";

const WhatsHappening = () => {
 const {username} = useParams();
 let [whatsHappening, setWhatsHappening] = useState('');
 let [userRating, setUserRating] = useState(1);
  const dispatch = useDispatch();
 const reviewClickHandler = async () => {
    const newReview = {
      review: whatsHappening,
      rating: userRating,
      reviewer: username,
      profilePic: "https://wallpapers.com/images/hd/aesthetic-profile-picture-pjnvodm0tj798j1q.jpg",
    }
    //dispatch(createReview(newReview));
    await reviewService.createReview(newReview);
   console.log(whatsHappening);
 }

 return (
   <div className="row">
     <div className="col-auto">
       <img src="/images/user.jpg" width={60}/>
     </div>
     <div className="col-11">
       <textarea value={whatsHappening} placeholder="Leave A Review?"
               className="form-control border-0"
               onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>

       <select>
          <option value={userRating} onChange={(event) => setUserRating(1)}>1</option>
          <option value={userRating} onChange={(event) => setUserRating(2)}>2</option>
          <option value={userRating} onChange={(event) => setUserRating(3)}>3</option>
          <option value={userRating} onChange={(event) => setUserRating(4)}>4</option>
          <option value={userRating} onChange={(event) => setUserRating(5)}>5</option>
       </select>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={reviewClickHandler}>
           Post
         </button>
         <div className="text-primary fs-2">
           <i className="bi bi-card-image me-3"></i>
           <i className="bi bi-filetype-gif me-3"></i>
           <i className="bi bi-bar-chart me-3"></i>
           <i className="bi bi-emoji-smile me-3"></i>
           <i className="bi bi-geo-alt"></i>
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;