import React, {useState, useEffect} from "react";
import {createReview} from "./review-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams}
  from "react-router-dom";
import * as reviewService from "../services/review-service";
import {createReviewThunk} from "../services/review-thunk";
import {logoutThunk, profileThunk} from "../services/user-thunks";
import * as userService from "../services/users-service";

const WhatsHappening = () => {
 const {username} = useParams();
 const [profile, setProfile] = useState({});
 let [whatsHappening, setWhatsHappening] = useState('');
 let [userRating, setUserRating] = useState(1);
  const dispatch = useDispatch();
  let [review, setReview] = useState({
          review: "",
          rating: 1,
          reviewer: username,
          profilePic: "https://wallpapers.com/images/hd/aesthetic-profile-picture-pjnvodm0tj798j1q.jpg",
          createdOn: Date.now(),
          restaurantName: username,
  });


 const reviewClickHandler = async () => {
    const newReview = {
      review: whatsHappening,
      rating: userRating,
      reviewer: profile.username,
      profilePic: "https://wallpapers.com/images/hd/aesthetic-profile-picture-pjnvodm0tj798j1q.jpg",
      createdOn: Date.now(),
      restaurantName: "Thorntons",
    }
    dispatch(createReview(review));
    await reviewService.createReview(review);
   console.log(whatsHappening);
 }


 return (
 <>
 <form>
   <div className="row">
     <div className="col-auto">
       <img src="/images/user.jpg" width={60}/>
     </div>
     <div className="col-11">
       <textarea value={review.review} placeholder="Leave A Review?"
               className="form-control border-0"
               onChange={(event) => setReview({...review, review: event.target.value})}>
       </textarea>
       <h4>Rating:</h4>
        <div>
          <input type="radio" value="Personal"
                name="radio-rating" id="radio-one" onChange={(e) => setReview({...review, rating: 1})} required/>
          <label for="radio-one">One</label><br/>
          <input type="radio" value="Business"
                name="radio-rating" id="radio-two" onChange={(e) => setReview({...review, rating: 2})} required/>
          <label for="radio-two">Two</label><br/>

          <input type="radio" value="Personal"
                name="radio-rating" id="radio-three" onChange={(e) => setReview({...review, rating: 3})} required/>
          <label for="radio-three">Three</label><br/>
          <input type="radio" value="Business"
                name="radio-rating" id="radio-four" onChange={(e) => setReview({...review, rating: 4})} required/>
          <label for="radio-four">Four</label><br/>
          <input type="radio" value="Personal"
                name="radio-rating" id="radio-five" onChange={(e) => setReview({...review, rating: 5})} required/>
          <label for="radio-five">Five</label><br/>
       </div>

       <div>
         <button type="submit" className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
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
   </form>
   </>
 );
}
export default WhatsHappening;