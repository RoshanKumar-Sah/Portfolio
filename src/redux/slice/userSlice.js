import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: true,
    value: null
  },
  reducers: {
    "setUser": (state, action) => {
      state.value = action.payload
      state.isLoading = false
    },
    "logout": (state) => {
      state.value = null
      localStorage.removeItem("PortToken")
    },
    "stopLoading": (state) => {
      state.isLoading = false
    },

    "startLoading": (state) => {
      state.isLoading = true
    }

  }
})

// Action creators are generated for each case reducer function
export const { setUser, logout, stopLoading, startLoading } = userSlice.actions

export default userSlice.reducer