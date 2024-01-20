import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import modeSlice from './slice/modeSlice'
import portfolioSlice from './slice/portfolioSlice'
import serviceSlice from './slice/serviceSlice'

export default configureStore({
  reducer: {
    "user": userSlice,
    "mode": modeSlice,
    "portfolio": portfolioSlice,
    "service": serviceSlice
  }
})