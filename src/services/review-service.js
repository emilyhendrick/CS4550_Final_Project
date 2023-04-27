import axios from 'axios';
const REVIEWS_REST_API_URL = "http://localhost:4000/api/reviews";



 export const createReview = async (review) => {
 const response = await axios.post(`${REVIEWS_REST_API_URL}`, review)
 return response.data;
  };

