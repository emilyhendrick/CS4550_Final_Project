import { createAsyncThunk } from "@reduxjs/toolkit";
import * as reviewService from "./review-service";

export const createReviewThunk = createAsyncThunk("/reviews", async (review, thunkAPI) => await reviewService.createReview(review));