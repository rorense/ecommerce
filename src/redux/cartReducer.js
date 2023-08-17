import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adding items to cart functionality
    addToCart: (state, action) => {
        // Checks if the item already exists in cart.
        const item = state.products.find((item)=>item.id === action.payload.id)

        // If it does, increase the quantity.
        if (item) {
            item.quantity += action.payload.quantity;
        } else {
            state.products.push(action.payload);
        }
    },

    // Removing items from cart functionality
    removeItem: (state, action) => {
      state.products = state.products.filter((item)=> item.id !== action.payload)
    },

    // Resetting cart
    resetCart: (state, action) => {
      state.products = [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;