import { createSlice } from "@reduxjs/toolkit";
import reviews from './reviews.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "nasa.png",
};

const templateReview = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}


const reviewSlice = createSlice({
 name: 'reviews',
 initialState: reviews,
  reducers: {
     deleteReview(state, action) {
       const index = state
          .findIndex(review =>
             review._id === action.payload);
       state.splice(index, 1);
     },

    createReview(state, action) {
      state.unshift({
        ...action.payload,
        ...templateReview,
        _id: (new Date()).getTime(),
      })
    },
    toggleLike(state, action) {
     const review = state.find((review) =>
           review._id === action.payload._id);
             review.liked = !review.liked;
             if(review.liked) {
                 review.likes = review.likes + 1;
             } else {
             review.likes = review.likes - 1;
             }
    }
  }
 });

export const {createReview, deleteReview, toggleLike} = reviewSlice.actions;
export default reviewSlice.reducer;