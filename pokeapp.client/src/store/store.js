import { configureStore } from '@reduxjs/toolkit'
//import currentIdReducer from '../features/currentId/currentIdSlice'
import rootReducer from '../features/combineSlice'

export const store = configureStore({
    reducer: rootReducer
})