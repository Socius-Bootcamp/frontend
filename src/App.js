import { Fragment } from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Products from "./Pages/Products/Products";
import SpecificCategory from "./Pages/Products/SpecificCategory";
import ShoeManager from "./Pages/Shoes/ShoeManager";
import OrderList from './Pages/Orders/OrderList';
import Cart from "./Pages/Cart/Cart";
import ProductDetails from "./Pages/Products/ProductDetails/ProductDetails";
import './App.css';
import CartCheckout from "./Pages/Cart/CartCheckout";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/category/:SpecificCategory" element={<SpecificCategory />} />
        <Route path="/shoes" element={<ShoeManager />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/Product/:id" element={<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/CartCheckout" element={<CartCheckout />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
