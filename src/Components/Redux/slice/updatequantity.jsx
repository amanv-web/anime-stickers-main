import { createSlice } from '@reduxjs/toolkit'
export const updatequantity = createSlice({
    initialState: [],
    name: 'cart',
    reducers: {
      addq(state, action) {
        const alreadyExist = state.find((item) => item.id === action.payload.id);
        if (alreadyExist) {
          alreadyExist.quantity + item.quantity;   
        } else { 
          state.push(action.payload);
        }
      },
      removeq(state, action) {
        return state.filter((item) => item.id !== action.payload);
      },
    },
  });
  
  export const { addq, removeq } = updatequantity.actions;
  
  export default updatequantity.reducer;
  