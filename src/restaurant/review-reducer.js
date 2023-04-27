import { createSlice } from "@reduxjs/toolkit";
import reviews from './reviews.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "nasa.png",
};

const templateReview = {
 "reviewer": "testUser",
 "reviewId": new Date().getTime(),
 "review": "this is a template review",
 "rating": 1,
 "profilePic": "https://wallpapers.com/images/hd/aesthetic-profile-picture-pjnvodm0tj798j1q.jpg",
 "restaurantName": "Pho Basil",
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
    }
  }
 });

export const {createReview, deleteReview, toggleLike} = reviewSlice.actions;
export default reviewSlice.reducer;