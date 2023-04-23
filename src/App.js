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




function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route index
                       element={<HomeAnon/>}/>
                <Route path="/homepersonal"
                       element={<HomePersonal/>}/>
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




