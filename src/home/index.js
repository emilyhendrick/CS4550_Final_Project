import React from "react";
// import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
// import {Routes, Route} from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeComponent from "./home";
import ExploreComponent from "./explore";
import store from "../reducers/store";

// const store = configureStore({reducer: {who: whoReducer, tuitsData: tuitsReducer}});


function Home() {
    return (
        <Provider store={store}>
        <div className="row mt-2">
            <div className=""
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
        </div>
        </Provider>
    );
}

export default Home
