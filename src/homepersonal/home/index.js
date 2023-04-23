import React from "react";
import TuitsList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4 align="center">Write a Review</h4>
            <WhatsHappening/>
            <h4 align="center">Recent Reviews</h4>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;

