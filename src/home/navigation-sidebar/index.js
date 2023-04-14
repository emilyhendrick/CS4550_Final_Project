import React from "react";

const NavigationSidebar = (
    {
        active = 'home'
    }
) => {
    return (
        <div className="list-group">
            <a href='#' className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                Home
            </a>
            <a href='#' className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                Profile
            </a>
            <a href='#' className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Log In
            </a>
            <a href='#' className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Sign Up
            </a>
            <a href='#' className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Review Feed
            </a>
            <a href='restaurant' className={`list-group-item
                    ${active === 'restaurants'?'active':''}`}>
                Restaurants
            </a>
        </div>
    );
};
export default NavigationSidebar;



