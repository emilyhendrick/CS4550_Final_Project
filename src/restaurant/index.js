import React, {useEffect, useState} from "react";
import WhatsHappening from "./whats-happening";

import {Link, useNavigate, useParams}
  from "react-router-dom";
import NavigationSidebar
  from "../navigationSidebar";

import ReviewList from "./review-list";
import ReviewItem
  from "./review-item";
import reviewReducer from "./review-reducer";

import {configureStore}
  from '@reduxjs/toolkit';
import {Provider, useDispatch, useSelector} from "react-redux";
import {
  findReviewsByRestaurant,
  findReviewsByUsername,
  findUserByRestaurantName
} from "../services/users-service";
import {logoutThunk, profileThunk} from "../services/user-thunks";
import * as userService from "../services/users-service";
import ProfileReviewItem from "../profile/reviewerProfile/profile-review-item";


const store = configureStore(
    {reducer: {reviews: reviewReducer}});

const RestaurantComponent = () => {
  const {username} = useParams();
  const {currentUser} = useSelector((state) => state.users);
  const [profile, setProfile] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = username;
  const [searchResults, setSearchResults] = useState([]);
  const searchForReviews = async () => {
    const results = await findReviewsByRestaurant(searchTerm);
    setSearchResults(results);
    console.log(searchResults);
  };
  useEffect(() => {
    if (searchTerm) {
      searchForReviews();
    }
  }, [searchTerm, searchResults]);

  const getProfile = async () => {
    const action = await dispatch(profileThunk());
    console.log(action);
    setProfile(action.payload);
  };
  const getUserByUsername = async () => {
    const user = await userService.findUserByRestaurantName(username);
    console.log(user);
    setProfile(user);
  };


  useEffect(() => {
    if (username) {
      getUserByUsername();
    } else {
      getProfile();
    }
  }, []);
  console.log(username);
  console.log(profile);

  return (
      <Provider store={store}>
        <div>
          <div className="mt-2">
            <div style={{"position": "relative"}}>
              <div className="position-relative mb-2">
                <img src={profile.profilePic} className="w-100"/>
              </div>
                <h3 className="mt-1 mb-1"><strong>{profile.businessName}</strong></h3>
                <p className="mb-1" style={{color: "grey"}}>{profile.businessAddress}</p>
              <p className="mb-4">hello this text area is the restaurant
                summary text this will describe the food and any other
                relevant restaurant info like signature dishes etc.</p>
              <hr style={{borderColor: "grey"}}/>
              {currentUser && (
                  <WhatsHappening/>
              )}
              {searchResults.map(result => (
                  <ReviewItem key={result._id} review={result}/>
              ))}
            </div>
          </div>
        </div>
      </Provider>

  );
};
export default RestaurantComponent;