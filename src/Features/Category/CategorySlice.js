import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const categoriesFetch = createAsyncThunk(
    "categories/categoriesFetch",
    async () => {
        try{
            const response = await fetch('http://localhost:3000/api/categories');
            if(!response.ok){
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            console.log(json);
            return json;

        }catch(error){
            console.error(error.message);
        }
    }
)

const CategorySlice = createSlice({
    name: 'categories',
    initialState: {
        isLoading: false,
        categories: [],
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(categoriesFetch.pending, (state, action) => {
          state.isLoading = true;
          state.error = null;
        });
        builder.addCase(categoriesFetch.fulfilled, (state, action) => {
          state.isLoading = false;
          state.categories = action.payload;
          state.error = null;
        });
        builder.addCase(categoriesFetch.rejected, (state, action) => {
          state.isLoading = false;
          state.categories = [];
          state.error = action.error.message;
        });
      },
});

export default CategorySlice.reducer;