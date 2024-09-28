import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentId: 1
}

const currentIdSlice = createSlice({
    name: 'currentId',
    initialState,
    reducers: {
        incrementId: (state) => {
            state.currentId += 1
        },
        decrementId: (state) => {
            state.currentId -= 1
        }
    }
})

export const { incrementId, decrementId } = currentIdSlice.actions
export default currentIdSlice.reducer