import { createSlice } from '@reduxjs/toolkit'

export const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        value: null
    },
    reducers: {
        "setSingleService": (state, action) => {
            state.value = action.payload
        },
        "closeSingleService": (state) => {
            state.value = null
        }
    }
})

// Action creators are generated for each case reducer function
export const { setSingleService, closeSingleService } = serviceSlice.actions

export default serviceSlice.reducer