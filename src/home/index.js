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

const store = configureStore({reducer: {who: whoReducer, tuitsData: tuitsReducer}});


function Home() {
    return (
        <Provider store={store}>
        <div className="row mt-2">
            {/*<div className="col-2 col-md-2 col-lg-1 col-xl-2">*/}
            {/*    <NavigationSidebar active="home"/>*/}
            {/*</div>*/}
            <div className="col-12 col-md-12 col-lg-12 col-xl-12"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
             {/*<HomeComponent/>*/}
            </div>

            {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
            {/*    <WhoToFollowList/>*/}
            {/*</div>*/}
        </div>
        </Provider>
    );
}

export default Home
