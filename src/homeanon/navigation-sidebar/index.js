import React from "react";

const NavigationSidebar = (
    {
        active = 'home'
    }
) => {
    return (
        <div className="list-group">
            <a href='#' className="list-group-item">Tuiter</a>
            <a href='#' className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                Home
            </a>
            <a href='#' className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                Explore
            </a>
            <a href='#' className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a href='#' className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </a>
            <a href='#' className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a href='#' className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </a>
            <a href='#' className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </a>
            <a href={"#"} className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;



