import React from "react";
import PostSummaryList from "../post-summary-list";
import WhoToFollowList from "../who-to-follow-list";
import RecentReview from "../most-recent-review";
import YelpRestaurantDetails from "../../yelp/yelp-restaurant-details";
import YelpSearchScreen from "../../yelp/yelp-search";
import {loginThunk, logoutThunk} from "../../services/user-thunks";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import "./index.css";
import {useState} from "react";

const ExploreComponent = () => {
    const user = useState({
        username: "testUser",
        password: "password",
        firstName: "Test",
        lastName: "User",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk(user));
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };

    return(
        <>
            <div className="row">
                {/*<div className="col-9 position-relative">*/}
                {/*    <input placeholder="Search Restaurant"*/}
                {/*           className="form-control rounded-pill ps-5"/>*/}
                {/*    <i className="bi bi-search position-absolute*/}
                {/*       wd-nudge-up"></i>*/}
                {/*</div>*/}
                <div className="col-2" align="right">
                {/*    <button type="submit" className="btn btn-primary">Log in</button> &thinsp;*/}
                {/*    <button type="submit" className="btn btn-danger">Log Out</button>*/}
                    <button type="submit" onClick={handleLogin}>Login</button>
                </div>
            </div>
            <YelpSearchScreen/>
            <YelpRestaurantDetails/>
            {/*<h3 align="center">Recent review about your business</h3>*/}
            {/*<RecentReview/>*/}
            <h3 align="center">Categories</h3>

            <WhoToFollowList/>
            <br/>

            <div className="position-relative mb-2">
                <img src="/images/bosrestaurant.jpg" className="w-100" alt='Starship'/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    Explore restaurants in your area</h1>
            </div>
            <br/>
            <h3 align="center">Recent Reviews</h3>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;

