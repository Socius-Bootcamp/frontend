import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Features/Product/ProductSlice'
import { setupListeners } from '@reduxjs/toolkit/query';
import CategorySlice from './Features/Category/CategorySlice';
import CartSlice from './Features/Cart/CartSlice';

let store = configureStore({
  reducer: {
    products: ProductSlice,
    categories: CategorySlice,
    cart: CartSlice,
  },
  initialState:{}
});

setupListeners(store.dispatch);

export default store;