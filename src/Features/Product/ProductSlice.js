import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        try{
          const { data } = await axios.get('http://localhost:3000/api/products');
          return data;
        } catch (error) {
          console.error(error.name+" on GET products: "+error.message+" "+error.code);
        }
    }
)

const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        products: [],
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(productsFetch.pending, (state, action) => {
          state.isLoading = true;
          state.error = null;
        });
        builder.addCase(productsFetch.fulfilled, (state, action) => {
          state.isLoading = false;
          state.products = action.payload;
          state.error = null;
        });
        builder.addCase(productsFetch.rejected, (state, action) => {
          state.isLoading = false;
          state.products = [];
          state.error = action.error.message;
        });
      },
});

export default ProductSlice.reducer;