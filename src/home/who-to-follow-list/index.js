import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(

        <ul className="list-group list-group-horizontal">

            {/*<li className="list-group-item">*/}
            {/*</li>*/}
            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who}/>
                )
            }
        </ul>

    );
};

export default WhoToFollowList;