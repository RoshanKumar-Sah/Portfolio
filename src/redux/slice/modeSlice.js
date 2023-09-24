import { createSlice } from '@reduxjs/toolkit'

export const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    value: null
  },
  reducers: {
    "setmode": (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setmode } = modeSlice.actions

export default modeSlice.reducer