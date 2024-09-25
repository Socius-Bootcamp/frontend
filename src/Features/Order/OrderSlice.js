import { createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react'

export const createOrder = createAsyncThunk("order/createOrder", async (data) => {
    try{
      const response = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers:{Accept:"application/json","Content-Type":"application/json"},
        body: JSON.stringify({
          UserId:3,
          date: new Date(),
          qty: quantity,
          ProductId:data.cartItem.ProductId
        }),
      });
      if(!response.ok){
          throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json;
  
      }catch(error){
          console.error(error.message);
      }
})


const OrderSlice = createSlice({
    name: 'order',
    initialState: {
        isLoading: false,
        OrderItems: [],
        total:0,
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        //Cart
        builder.addCase(cartFetch.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        });
        builder.addCase(cartFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.CartItems = action.payload.CartItems;
        state.total = action.payload.total;
        state.error = null;
        });
        builder.addCase(cartFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.CartItems = [];
        state.error = action.error.message;
        });
    },
});

export default OrderSlice