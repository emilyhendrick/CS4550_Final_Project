import React from "react";
import postsArray from './posts.json';
import PostSummaryItem
    from "./post-summary-item";
import ProfileReviewItem
    from "../../profile/reviewerProfile/profile-review-item";
import ReviewItem from "../../restaurant/review-item";

const PostSummaryList = () => {
    return(
        <div>
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} review={post}/> )
            }
        </div>
    );
};
export default PostSummaryList;

