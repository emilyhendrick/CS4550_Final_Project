import './App.css';
// import ProfileComponent from './profile/reviewerProfile/personal-profile'
// import NavigationSidebar from "./navigationSidebar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import BusinessProfileComponent
//   from "./profile/businessProfile/businessProfile";
// import PersonalProfileComponent
//   from "./profile/reviewerProfile/personal-profile";
// import LoginComponent from "./login/index";
// import SignUpComponent from "./signup/index";
import RestaurantComponent from "./restaurant/index";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home";
import ResultSummaryList from "./home/results";



function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index
                           element={<Home/>}/>
                    <Route path="/restaurant"
                           element={<RestaurantComponent/>}/>
                    <Route path="/result"
                           element={<ResultSummaryList/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    );
}



export default App;


