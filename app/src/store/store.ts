import { configureStore } from '@reduxjs/toolkit'
import phonesReducer from '../reducers/phones'
export const store = configureStore({
  reducer: {
    phones: phonesReducer,
  },
})
