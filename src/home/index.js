import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";


function Home() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-8 col-xl-8"
                 style={{"position": "relative"}}>

                <ExploreComponent/>


            </div>
            <br/>
            {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
            {/*</div>*/}
        </div>
    );
}

export default Home
