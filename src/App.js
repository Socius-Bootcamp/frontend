import { Fragment } from "react";
<<<<<<< HEAD
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
=======
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
>>>>>>> 87ddb550eb80194417eae7759df5a1399e2be311
import Products from "./Pages/Products/Products";
import SpecificCategory from "./Pages/Products/SpecificCategory";
import ShoeManager from "./Pages/Shoes/ShoeManager";
import OrderList from './Pages/Orders/OrderList';
<<<<<<< HEAD
import NotFound from "./Pages/NotFound";
import Login from './Pages/Login/Login'; 

=======

//import './App.css';
>>>>>>> 87ddb550eb80194417eae7759df5a1399e2be311
function App() {
  return (
    <Fragment>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
=======
        <Route path="/" element={<Home />} />
>>>>>>> 87ddb550eb80194417eae7759df5a1399e2be311
        <Route path="/Products" element={<Products />} />
        <Route path="category/:SpecificCategory" element={<SpecificCategory />} />
        <Route path="/shoes" element={<ShoeManager />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
