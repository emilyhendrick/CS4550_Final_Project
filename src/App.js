import './App.css';
import NavigationSidebar from "./navigationSidebar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PersonalProfileComponent
  from "./profile/reviewerProfile/personal-profile";
import LoginComponent from "./login/index";
import SignUpComponent from "./signup/index";
import RestaurantComponent from "./restaurant/index";
import {Provider} from "react-redux";
import store from "./reducers/store";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import CurrentUserContext from "./reducers/current-user-context";
import React from "react";
import YelpSearchScreen from "./yelp/yelp-search";
import YelpRestaurantDetails from "./yelp/yelp-restaurant-details";
import Home from "./home";

function App() {
  return (
      <div>
        <Provider store={store}>
          <CurrentUserContext>
            <BrowserRouter>

              <div className={"row ms-4 me-4 mt-2"}>
                <NavigationSidebar/>
                <div className={"col-9 col-md-9 col-lg-9 col-xl-9 ms-2"} style={{"position": "relative"}}>
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/restaurant/:username" element={<RestaurantComponent/>}/>
                    <Route path="/register" element={<SignUpComponent/>}/>
                    <Route path="/profile"
                           element={<PersonalProfileComponent/>}/>
                    <Route path="/login" element={<LoginComponent/>}/>
                    <Route path="/profile/:username"
                           element={<PersonalProfileComponent/>}/>
                    <Route path="/home"
                           element={<Home/>}/>
                    <Route
                        path="/yelp/restaurant/:id"
                        element={<YelpRestaurantDetails/>}
                    />
                    <Route path="/yelp/search" element={<YelpSearchScreen/>} />
                    <Route
                        path="/yelp/search/:searchTerm"
                        element={<YelpSearchScreen/>}
                    />
                  </Routes>
                </div>
              </div>
            </BrowserRouter>
          </CurrentUserContext>
        </Provider>
      </div>
  );
}

export default App;
