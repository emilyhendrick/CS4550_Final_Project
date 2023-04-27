import React from "react";
import PostSummaryList from "../post-summary-list";
import WhoToFollowList from "../who-to-follow-list";
import RecentReview from "../most-recent-review";
import YelpRestaurantDetails from "../../yelp/yelp-restaurant-details";
import YelpSearchScreen from "../../yelp/yelp-search";
import {loginThunk, logoutThunk} from "../../services/user-thunks";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import "./index.css";
import {useState} from "react";

const ExploreComponent = () => {
  const user = useState({
    username: "testUser",
    password: "password",
    firstName: "Test",
    lastName: "User",
  });
  const {currentUser} = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      await dispatch(loginThunk(user));
      navigate("/login");
    } catch (e) {
      alert(e);
    }
  };

  return (
      <div>
        <YelpSearchScreen/>
        <YelpRestaurantDetails/>
        <hr style={{borderColor: "grey"}}/>
        {currentUser ? (
            <>
              <h3>Your recent reviews</h3>
              <RecentReview/>
              <hr style={{borderColor: "grey"}}/>
            </>
        ) : null}
        <h3>Categories</h3>
        <WhoToFollowList/>
        <br/>
        <div className="position-relative mb-2">
          <img src="/images/bosrestaurant.jpg" className="w-100"
               alt="Starship"/>
          <h1 className="position-absolute wd-nudge-up text-white">
            Explore restaurants in your area
          </h1>
        </div>
        <br/>
        <h3>Recent Reviews</h3>
        <PostSummaryList/>
      </div>
  );
};
export default ExploreComponent;

