import React, {useState} from "react";

import {createReview} from "./review-reducer";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
 const reviewClickHandler = () => {
    const newReview = {
      review: whatsHappening
    }
    dispatch(createReview(newReview));
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