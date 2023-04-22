import './App.css';
import ProfileComponent from './profile/reviewerProfile/personal-profile'
import NavigationSidebar from "./navigationSidebar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BusinessProfileComponent
  from "./profile/businessProfile/businessProfile";
import PersonalProfileComponent
  from "./profile/reviewerProfile/personal-profile";
import LoginComponent from "./login/index";
import SignUpComponent from "./signup/index";
import RestaurantComponent from "./restaurant/index";
import {Provider} from "react-redux";
import store from "./reducers/store";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import CurrentUserContext from "./reducers/current-user-context";

function App() {
  return (
      <div className="row mt-2">
        <Provider store={store}>
          <CurrentUserContext>
            <BrowserRouter>

              <div className={"list-group"}>
                <Link to="/" className={"list-group-item"}>Home</Link>
                <Link to="register">Register</Link>
                <Link to="profile">Profile</Link>
                // Home page
                // Profile vs login / sign up
              </div>

              <Routes>
                <Route path="/" element={<RestaurantComponent />} />
                <Route path="/register" element={<LoginComponent />} />
                <Route path="/profile" element={<PersonalProfileComponent />} />

                <Route path="/profile/:username" element={<PersonalProfileComponent />} />
              </Routes>
            </BrowserRouter>
          </CurrentUserContext>
        </Provider>
      </div>
  );
}

export default App;
