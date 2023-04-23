import React from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";



const TuitStats = (
    {
        tuit
    }
) => {
    const dispatch = useDispatch();

    return(
        // <li className="list-group-item">
            <div className="row">
                <div className="col-3">
                   <i className="fa fa-regular fa-comment"></i> {tuit.replies}
                </div>
                <div className="col-3">
                        <i className="fa fa-retweet"></i>
                        {tuit.retuits}
                    </div>
                <div className="col-3">

                        Likes: {tuit.likes}
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            likes: tuit.likes + 1
                        }))}
                           className="bi bi-heart-fill me-2 text-danger"></i>

                </div>
                <div className="col-3">
                    <i className="fa fa-regular fa-share"></i>
                </div>
                </div>
        // </li>
    );
};
export default TuitStats;