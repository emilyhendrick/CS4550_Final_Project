import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetails } from "./yelp-service";

function YelpRestaurantDetails() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
            const result = await getRestaurantDetails(id);
            console.log(id);
            setRestaurant(result);
        };
        fetchRestaurant();
    }, [id]);

    return (

        <div>
            {restaurant && (
                <div>
                    <h1>{restaurant.name}</h1>
                    <p>Rating: {restaurant.rating}</p>
                    <p>Phone: {restaurant.phone}</p>
                    <p>Address: {restaurant.location.display_address.join(", ")}</p>
                    <img src={restaurant.image_url} alt={restaurant.name} />
                </div>
            )}
        </div>
    );
}

export default YelpRestaurantDetails;

