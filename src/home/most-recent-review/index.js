import React, {useEffect, useState} from "react";
import postsArray from './posts.json';
import PostSummaryItem
    from "./post-summary-item";
import ProfileReviewItem
    from "../../profile/reviewerProfile/profile-review-item";
import {findReviewsByUsername} from "../../services/users-service";
import {useSelector} from "react-redux";

const RecentReview = () => {
    const {currentUser} = useSelector((state) => state.users);
    const searchTerm = currentUser.username;
    const [searchResults, setSearchResults] = useState([]);
    const searchForReviews = async () => {
        const results = await findReviewsByUsername(searchTerm);
        setSearchResults(results);
        console.log(searchResults);
    };
    useEffect(() => {
        if (searchTerm) {
            searchForReviews();
        }
    }, [searchTerm, searchResults]);


    return(
        <div>
            {
                searchResults.map(post =>
                    <ProfileReviewItem
                        key={post._id} review={post}/> )
            }
        </div>
    );
};
export default RecentReview;

