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
                    <img src={restaurant.image_url} alt={restaurant.name} className="w-100" height={"500px"} style={{objectFit : "cover"}} />
                    <h1>{restaurant.name}</h1>
                    <p>Rating: {restaurant.rating}</p>
                    <p>Phone: {restaurant.phone}</p>
                    <p>Address: {restaurant.location.display_address.join(", ")}</p>
                    <hr style={{borderColor: "grey"}}/>
                    <p>No Reviews</p>

                </div>
            )}
        </div>
    );
}

export default YelpRestaurantDetails;

