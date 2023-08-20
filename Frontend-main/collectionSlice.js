import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   stxAddress_testnet:'',
// }

export const collectionSlice = createSlice({
  name: "arcusInfo",
  initialState: {
    stxAddressTestnet: null,
  },
  reducers: {
    setStxAddressTestnet: (state, action) => {
      state.stxAddressTestnet = action.payload;
    },
  },
});

export const { setStxAddress_testnet } = collectionSlice.actions

export const selectStxAddressTestnet = (state) => state.collection.stxAddressTestnet;

export default collectionSlice.reducer
