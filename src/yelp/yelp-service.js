import axios from "axios";
export const YELP_API = "https://api.yelp.com/v3";
export const YELP_KEY = process.env.REACT_APP_YELP_API_KEY;

const api = axios.create({
    baseURL: YELP_API,
    headers: {
        Authorization: `Bearer ${YELP_KEY}`,
    },
});

export const searchRestaurants = async (location, term) => {
    const response = await api.get("/businesses/search", {
        params: {
            location: location,
            term: term,
        },
    });
    const json = await response.data;
    return json.businesses;
};

export const getRestaurantDetails = async (restaurantId) => {
    const response = await api.get(`/businesses/${restaurantId}`);
    const json = await response.data;
    return json;
};
