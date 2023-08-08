import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  stxAddress_testnet:'',
}

export const collectionSlice = createSlice({
    name: 'acrusInfo',
    initialState,
    reducers: {
      setStxAddress_testnet: (state, action) => {
        state.stxAddress_testnet = action.payload;
      },
    },
  })

export const { setStxAddress_testnet } = collectionSlice.actions

export default collectionSlice.reducer