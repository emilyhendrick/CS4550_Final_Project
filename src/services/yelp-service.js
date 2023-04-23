import axios from "axios";
export const YELP_API = "https://api.yelp.com/v3/businesses";
export const YELP_KEY = process.env.REACT_APP_YELP_KEY;
export const LOCAL_RESTAURANT_API = "http://localhost:4000/api/restaurant";
export const CORS_LINK = 'https://cors-anywhere.herokuapp.com/';

// **** IMPORTANT ****
// For access to the Yelp API via axios, visit https://cors-anywhere.herokuapp.com/corsdemo
// Click the button to request temporary access and then it should work

const api = axios.create({
  withCredentials: true,
});

export const fullTextSearch = async (query) => {
  const response = await axios.get(
      `${CORS_LINK}${YELP_API}/search?term=${query}&sort_by=best_match&limit=20&location=boston`,
      { headers: { Authorization: `Bearer ${YELP_KEY}` } }
  );
  const json = await response.data;
  return json.businesses;
};

export const getRestaurant = async (restaurantId) => {
  const response = await axios.get(
      `${CORS_LINK}${YELP_API}/${restaurantId}`
  );
  const json = await response.data;
  return json;
};

export const getReviews = async (restaurantId) => {
  const response = await axios.get(
      `${CORS_LINK}${YELP_API}/${restaurantId}/reviews?limit=20&sort_by=yelp_sort`
  );
  const json = await response.data;
  return json.reviews;
};

export const getLocalRestaurants = async (query) => {
  const response = await api.get(`${LOCAL_RESTAURANT_API}/${query}`);
  return response.data;
};
