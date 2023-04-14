import React from "react";
const ResultSummaryItem = (
    {
        results
    }
) => {
    return(

        <li className="list-group-item">

            <div className="row">
                <div className="col-5">
                    <div className="fw-bolder">{results.topic}</div>
                    <div>Category : {results.category}</div>
                    <div>Total reviews : {results.reviews}</div>
                    <div>Address : {results.address}</div>
                </div>
                <div className="col-7">
                    <img width="25%" height="100%" className="float-end rounded-3" src={`/images/${results.image}`} alt={'tesla'}/>
                </div>
            </div>

        </li>
    );
};
export default ResultSummaryItem;