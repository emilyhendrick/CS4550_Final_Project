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
import {Provider} from "react-redux";
import {fullTextSearch} from "../services/yelp-service";

const store = configureStore(
    {reducer: {reviews: reviewReducer}});

const RestaurantComponent = () => {

  return (
      <Provider store={store}>
        <div>
          <div className="mt-2">
            <div style={{"position": "relative"}}>
              <div className="position-relative mb-2">
                <img src="/images/longhorn.jpg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                  Longhorn Steakhouse</h1>
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-auto">
                    </div>
                    <i className="col-3">Name: longhorn steakhouse</i>
                    <i className="col-4">Location: 39 walkers brook MA 01867</i>
                  </div>
                  <i className="col-auto">hello this text area is the restaurant
                    summary text this will describe the food and any other
                    relevant resturant info like signature dishes etc.</i>
                </li>
              </ul>
              <WhatsHappening/>
              <ReviewList/>
            </div>
          </div>
        </div>
      </Provider>

  );
};
export default RestaurantComponent;