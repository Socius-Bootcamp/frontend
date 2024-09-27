import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import React from 'react'

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"}

export const ordersFetch = createAsyncThunk("orders/ordersFetch", async () => {
    try {
        const user=JSON.parse(localStorage.getItem("token"));//MODIFICAR CON LO DEL AUTH
        
        const { data } = await axios.get("http://localhost:3000/api/orders/"+ user.id, //modificar una vez se pueda enviar el id de otra manera
            {
                headers: headers                
            }
            );
        console.log(data);
        return data;
    } catch (error) {
            console.error(error.name+" on GET all orders: "+error.message+" "+error.code);
    }
})
    

    
export const createOrder = createAsyncThunk("order/createOrder", async (formData) => {
    try {
        const user=JSON.parse(localStorage.getItem("token"));//MODIFICAR CON LO DEL AUTH
        console.log(formData);
        const { data } = await axios.post("http://localhost:3000/api/orders",
            {
              UserId: user.id,
              address1: formData.address1,
              address2: formData.address2,
              province: formData.province,
              city: formData.city,
              country: formData.country
            },
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              }                  
            }
          );
        console.log(data);
        return data;
    } catch (error) {
          console.error(error.name+" on addItem cart: "+error.message+" "+error.code);
    }
})


const OrderSlice = createSlice({
    name: 'orders',
    initialState: {
        isLoading: false,
        Orders: [],
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        //Get Orders from User
        builder.addCase(ordersFetch.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        });
        builder.addCase(ordersFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Orders = action.payload;
        state.error = null;
        });
        builder.addCase(ordersFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.Orders = [];
        state.error = action.error.message;
        });
    },
});

export default OrderSlice.reducer;