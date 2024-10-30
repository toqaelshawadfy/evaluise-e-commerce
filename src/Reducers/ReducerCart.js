import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existItem = state.items.find(item => item.id === action.payload.id);
            if (existItem) {
                existItem.quantity += action.payload.quantity;
            } else {
                state.items.push({ ...action.payload, quantity: action.payload.quantity });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});
// Selector to calculate subtotal
export const selectCartSubtotal = (state) => {
    return state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
};
export const selectCartTotal = (state) => {
    const subtotal = selectCartSubtotal(state);
    const tax = subtotal * 0.1; 
    const shipping = 5; 
    return subtotal + tax + shipping;
};
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
