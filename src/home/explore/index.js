import React from "react";
import PostSummaryList from "../post-summary-list";
import WhoToFollowList from "../who-to-follow-list";
import RecentReview from "../most-recent-review";
import YelpRestaurantDetails from "../../yelp/yelp-restaurant-details";
import YelpSearchScreen from "../../yelp/yelp-search";
import {loginThunk, logoutThunk} from "../../services/user-thunks";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
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
    const { currentUser } = useSelector((state) => state.users);
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
        <>
            <div className="row">
                {currentUser ? (
                    <div className="col-2" align="right">
                        <button onClick={() => dispatch(logoutThunk())}>Logout</button>
                    </div>
                ) : (
                    <div className="col-2" align="right">
                        <button onClick={handleLogin}>Login</button>
                    </div>
                )}
            </div>
            <YelpSearchScreen/>
            <YelpRestaurantDetails/>
            {currentUser ? (
                <>
                    <h3 align="center">Your most recent review</h3>
                    <RecentReview />
                </>
            ) : null}
            <h3 align="center">Categories</h3>
            <WhoToFollowList />
            <br />
            <div className="position-relative mb-2">
                <img src="/images/bosrestaurant.jpg" className="w-100" alt="Starship" />
                <h1 className="position-absolute wd-nudge-up text-white">
                    Explore restaurants in your area
                </h1>
            </div>
            <br />
            <h3 align="center">Recent Reviews</h3>
            <PostSummaryList />
        </>
    );
};
export default ExploreComponent;

