import { createSlice } from '@reduxjs/toolkit'
export const addcart = createSlice({
  initialState: [],
  name: 'cart',
  reducers: {
    add(state, action) {
      const alreadyExist = state.find((item) => item.id === action.payload.id);
      if (alreadyExist) {
        alreadyExist.quantity + item.quantity;   
      } else { 
        state.push(action.payload);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = addcart.actions;

export default addcart.reducer;
