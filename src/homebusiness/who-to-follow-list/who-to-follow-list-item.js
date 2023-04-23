import React from "react";
const WhoToFollowListItem = (
    {
        who
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div>
                    <img height={48} src={`${who.avatarIcon}`}/>
                    <div className="fw-bold" align="center">{who.userName}</div>
                    {/*<div>@{who.handle}</div>*/}
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;

