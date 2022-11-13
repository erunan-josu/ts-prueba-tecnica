import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = Phone[]

const initialState: InitialState = []

export const phoneSlice = createSlice({
  name: 'phones',
  initialState: initialState,
  reducers: {
    initPhones: (state, action: PayloadAction<Phone[]>) => action.payload,
  },
})

export const { initPhones } = phoneSlice.actions
export default phoneSlice.reducer
