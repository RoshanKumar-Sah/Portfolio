import { createSlice } from '@reduxjs/toolkit'

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        value: null
    },
    reducers: {
        "setSinglePortfolio": (state, action) => {
            state.value = action.payload
        },
        "closeSinglePortfolio": (state) => {
            state.value = null
        }
    }
})

// Action creators are generated for each case reducer function
export const { setSinglePortfolio, closeSinglePortfolio } = portfolioSlice.actions

export default portfolioSlice.reducer