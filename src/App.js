import './App.css';
import Labs from "./labs";
// import HelloWorld from "./labs/a6/hello-world";
import HomeAnon from "./homeanon";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
// import Assignment7 from "./labs/a7";
// import RestaurantComponent from "./restaurant";
import Restaurant from "./restaurant-2";
import HomePersonal from "./homepersonal";
import HomeBusiness from "./homebusiness";
// import Yelp from "./yelp";
import YelpSearchScreen from "./yelp/yelp-search";
import YelpRestaurantDetails from "./yelp/yelp-restaurant-details";


function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route index
                       element={<HomeAnon/>}/>
                <Route path="/homepersonal"
                       element={<HomePersonal/>}/>
                {/*<Route path="/yelp/search/*"*/}
                {/*       element={<Yelp/>}/> // render a home component that will get the results*/}
                <Route
                    path="/yelp/restaurant/:id"
                    element={<YelpRestaurantDetails/>}
                />
                <Route path="/yelp/search" element={<YelpSearchScreen/>} />
                <Route
                    path="/yelp/search/:searchTerm"
                    element={<YelpSearchScreen/>}
                />
                <Route path="/homebusiness"
                       element={<HomeBusiness/>}/>
                <Route path="/restaurant"
                       element={<Restaurant/>}/>
            </Routes>
        </div>
      </BrowserRouter>

  );
}
export default App;




