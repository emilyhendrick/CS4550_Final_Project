import React from "react";
import resultsArray from './results.json'
import ResultSummaryItem from "./result-summary-item";
import NavigationSidebar from "../navigation-sidebar";

const ResultSummaryList = () => {
    return(
        <div><div className="list-group">
            <div className="row">
                <div className="col-2">
                    <NavigationSidebar active="restaurants"/>
                </div>


            <div className="col-10">
        <ul className="list-group">
            <div className="row">
                <div className="col-9 position-relative">
                    <input placeholder="Search Restaurant"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-primary">Log in</button> &thinsp;
                    <button type="submit" className="btn btn-danger">Sign up</button>
                </div>
            </div>
            <br/>
            <h3> Results for "Restaurants near Boston"</h3>
            {
                resultsArray.map(results =>
                    <ResultSummaryItem
                        key={results._id} results={results}/> )
            }
        </ul>
            </div>
            </div>
        </div>
        </div>
    );
};
export default ResultSummaryList;