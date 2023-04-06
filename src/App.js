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

function App() {
  return (
      <div className="row mt-2">
        <div className="col-10 col-md-10 col-sm-7 col-xs-6" style={{"position": "relative"}}>
          <RestaurantComponent />
        </div>
      </div>
  );
}

export default App;
