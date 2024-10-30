import {createSlice} from '@reduxjs/toolkit'
const wishlistSlice = createSlice({
  name: 'wishList',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      const exists = state.some((item) => item.id === product.id);
      if (!exists) {
        state.push(product);
      }
    },
    removeFromWishlist: (state, action) => {
      const productId = action.payload.id;
      return state.filter(item => item.id !== productId);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
