import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetails } from "./yelp-service";

function YelpRestaurantDetails() {
    const { restaurantId } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        async function fetchRestaurantDetails() {
            const restaurantDetails = await getRestaurantDetails(restaurantId);
            setRestaurant(restaurantDetails);
        }

        fetchRestaurantDetails();
    }, [restaurantId]);

    if (!restaurant) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <div className="row">
                <div className="col-sm-4">
                    <img src={restaurant.image_url} />
                </div>
                <div className="col-sm-8">
                    <p>
                        {restaurant.location.address1}
                        <br />
                        {restaurant.location.city}, {restaurant.location.state}{" "}
                        {restaurant.location.zip_code}
                    </p>
                    <p>{restaurant.phone}</p>
                    <p>{restaurant.categories.map((category) => category.title).join(", ")}</p>
                    <p>Rating: {restaurant.rating}</p>
                    <p>{restaurant.review_count} reviews</p>
                    <p>
                        <a href={restaurant.url}>Visit Yelp page</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default YelpRestaurantDetails;