import React, {useState} from "react";
import {createReview} from "./review-reducer";
import {useDispatch} from "react-redux";
import {Link, useNavigate, useParams}
  from "react-router-dom";
import * as reviewService from "../services/review-service";
import {createReviewThunk} from "../services/review-thunk";

const WhatsHappening = () => {
 const {username} = useParams();
 //const {currentUser} = useSelector((state) => state.users);
 let [whatsHappening, setWhatsHappening] = useState('');
 let [userRating, setUserRating] = useState(1);
  const dispatch = useDispatch();
  let [review, setReview] = useState({
          review: "",
          rating: 0,
          reviewer: username,
          profilePic: "https://wallpapers.com/images/hd/aesthetic-profile-picture-pjnvodm0tj798j1q.jpg",
          createdOn: Date.now(),
          restaurantName: "Thorntons",
  })

 const reviewClickHandler = async () => {
    const newReview = {
      review: whatsHappening,
      rating: userRating,
      reviewer: username,
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
       <textarea value={review.whatsHappening} placeholder="Leave A Review?"
               className="form-control border-0"
               onChange={(event) => setReview({...review, review: event.target.value})}>
       </textarea>

       <select>
          <option value={review.userRating} onChange={(event) => setReview({...review, rating: 1})}>1</option>
          <option value={review.userRating} onChange={(event) => setReview({...review, rating: 2})}>2</option>
          <option value={review.userRating} onChange={(event) => setReview({...review, rating: 3})}>3</option>
          <option value={review.userRating} onChange={(event) => setReview({...review, rating: 4})}>4</option>
          <option value={review.userRating} onChange={(event) => setReview({...review, rating: 5})}>5</option>
       </select>
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