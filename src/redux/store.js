import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import modeSlice from './slice/modeSlice'

export default configureStore({
  reducer: {
    "user": userSlice,
    "mode": modeSlice
  }
})