import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Features/Product/ProductSlice'
import { setupListeners } from '@reduxjs/toolkit/query';
import CategorySlice from './Features/Category/CategorySlice';
import CartSlice from './Features/Cart/CartSlice';
import OrderSlice from './Features/Order/OrderSlice';

let store = configureStore({
  reducer: {
    products: ProductSlice,
    categories: CategorySlice,
    cart: CartSlice,
    orders: OrderSlice
  },
  initialState:{}
});

setupListeners(store.dispatch);

export default store;