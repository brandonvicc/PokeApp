// src/slices/index.js
import { combineReducers } from 'redux';
import currentIdReducer from './currentId/currentIdSlice'; // Adjust path if needed
// Import other reducers here as needed

const rootReducer = combineReducers({
    currentId: currentIdReducer,
    // Add other reducers here
});

export default rootReducer;