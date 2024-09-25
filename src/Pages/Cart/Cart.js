import React, { Fragment, useEffect } from 'react'
import TopNavbar from '../../Components/Header/TopNavbar'
import Footer from '../../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CartItemCard from '../../Components/Cart/CartItemCard';
import { clearCart, emptyCart, getTotals } from '../../Features/Cart/CartSlice';

const Cart = () => {
    const cart= useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
      dispatch(getTotals());
    }, [cart, dispatch]);

    const handleClear = (e) => {
      e.preventDefault();
      dispatch(emptyCart());
    };

    const handleBuy = (e) => {
      e.preventDefault();
      navigate("/CartCheckout")
      
    }

    return (
      <Fragment>
          <TopNavbar/>
          <Container>
            <Row>
              {!cart.CartItems.length && (
                <div className="m-auto w-100 text-center my-5">
                <h1 className="text-danger">(0o0) Nothing on the cart yet!</h1>
                <Link to="/" className="text-dark text-decoration-none fs-5">
                  Return to Buy!
                </Link>
              </div>
              )}
              {cart.CartItems.length > 0 && (
                <div className="cart-container">
                  <h2>Shopping Cart</h2>
                  <div className="titles">
                    <h3 className="product-title">Product</h3>
                    <h3 className="price">Price</h3>
                    <h3 className="quantity">Quantity</h3>
                    <h3 className="total">Total</h3>
                  </div>
                  <div className="cart-items">
                    {cart.CartItems.map((cartItem) =>{
                        return (
                          <div key={cartItem.ProductId}>
                            <CartItemCard cartItem={cartItem}/>
                          </div>
                        )
                    })}
                  </div>
                  <div className="cart-summary">
            <button className="clear-btn" onClick={handleClear}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="total">
                <span>Total</span>
                <span className="amount">${cart.total}</span>
              </div>
              <hr/>
              <button onClick={handleBuy}>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <span> Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
                </div>
              )}
            </Row>
          </Container>
            
          <Footer/>
      </Fragment>
    )
}

export default Cart