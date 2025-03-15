import { createSlice } from '@reduxjs/toolkit'

export const CardSlice = createSlice({
  name: 'Card',
  initialState:[],
  reducers: {
    addItem: (state,action) => {
      let existItem = state.find(item=>item.id===action.payload.id);
      if(existItem){
        existItem.qty += 1;
      }else{
        state.push({ ...action.payload, qty: 1 })
      }
    },
    removeItem: (state,action) => {
      return state.filter((item) => item.id!==action.payload)
    },
    increment: (state,action) => {
      let eItem = state.find(item=>item.id===action.payload.id);
      if(eItem){
        eItem.qty += 1;
      }
    },
    decrement: (state,action) => {
      let eItem = state.find(item=>item.id===action.payload.id);
      if(eItem.qty > 1){
        eItem.qty -= 1;
      }else{
        return state.filter(item => item.id !== action.payload.id);
      }
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, increment, decrement } = CardSlice.actions

export default CardSlice.reducer