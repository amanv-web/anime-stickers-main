import { createSlice } from '@reduxjs/toolkit'
export const addcart = createSlice({
  initialState: [],
  name: 'cart',
  reducers: {
    add(state, action) {
      const alreadyExist = state.find((item) => item.id === action.payload.id);
      if (alreadyExist) {
        alreadyExist.quantity + action.payload.quantity;   
      } else { 
        state.push(action.payload);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const product = state.find(product => product.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
  }},
}});

export const { add, remove ,updateQuantity  } = addcart.actions;

export default addcart.reducer;
