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

              <div className={"row ms-2 mt-2"}>
                <div className={"col-2 col-md-2 col-lg-2 col-xl-2 ms-2 list-group "}>
                  <Link to="/home" className={"list-group-item"}><i
                      className="bi bi-house-fill"></i> Home</Link>
                  <Link to="profile" className={"list-group-item"}><i
                      className="bi bi-person-fill "></i> Profile</Link>
                  <Link to="register"
                        className={"list-group-item"}><i
                      className="bi bi-patch-plus-fill "></i> Register</Link>
                  <Link to="login" className={"list-group-item"}><i
                      className="bi bi-door-open-fill "></i> Login</Link>
                </div>
                <div className={"col ms-2 me-2"} style={{"position": "relative"}}>
                  <Routes>
                    <Route path="/" element={<LoginComponent/>}/>
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
