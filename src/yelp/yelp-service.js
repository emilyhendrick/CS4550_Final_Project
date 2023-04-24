import axios from "axios";
export const YELP_API = "https://api.yelp.com/v3/businesses";
export const YELP_KEY = process.env.REACT_APP_YELP_API_KEY;
export const LOCAL_RESTAURANT_API = "http://localhost:4000/api/restaurant";
export const CORS_LINK = 'https://cors-anywhere.herokuapp.com/';

// **** IMPORTANT ****
// For access to the Yelp API via axios, visit https://cors-anywhere.herokuapp.com/corsdemo
// Click the button to request temporary access and then it should work

const api = axios.create({
    withCredentials: true,
});

export const searchRestaurants = async (location, term) => {
    // change the limit to however many we want to display, rn it's 10
    const response = await axios.get(
        `${CORS_LINK}${YELP_API}/search?term=${term}&sort_by=best_match&limit=10&location=${location}`,
        { headers: { Authorization: `Bearer ${YELP_KEY}` } }
    );
    const json = await response.data;
    return json.businesses;
};

export const getRestaurantDetails = async (restaurantId) => {
    console.log("restaurantId:", restaurantId);
    console.log("Request URL:", `${CORS_LINK}${YELP_API}/${restaurantId}`);
    const response = await axios.get(
        `${CORS_LINK}${YELP_API}/${restaurantId}`,
    { headers: { Authorization: `Bearer ${YELP_KEY}` } }
    );
    const json = await response.data;
    return json;
};

// pull search results from business in our local db
export const getLocalRestaurants = async (query) => {
    const response = await api.get(`${LOCAL_RESTAURANT_API}/${query}`);
    return response.data;
};