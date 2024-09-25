import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import TopNavbar from '../../Components/Header/TopNavbar';
import Footer from '../../Components/Footer/Footer';
import CartCheckoutForm from '../../Components/Cart/CartCheckoutForm';
import CartCheckouts from '../../Components/Cart/CartItemCheck';
import CartItemCard from '../../Components/Cart/CartItemCard';
import CartItemCheck from '../../Components/Cart/CartItemCheck';

const CartCheckout = () => {
    const cart= useSelector((state) => state.cart);
    return (
        <Fragment>
            <TopNavbar/>
            <h1 className='text-center mt-5'>Cart Check Out</h1>
            <div className='row mx-5' style={{"marginBottom": "3rem"}}>
                <div className='col-12 col-lg-6 mt-5'>
                    <Card>
                        <Card.Body>
                            <div className="cart-container" style={{"padding":0}}>
                            <div className="titles">
                                <h5 className="product-title">Product</h5>
                                <h5 className="price">Price</h5>
                                <h5 className="quantity">Quantity</h5>
                                <h5 className="total">Total</h5>
                            </div>
                            {cart.CartItems && cart.CartItems.map((cartItem) =>{

                                return (
                                    <div key={cartItem.ProductId}>
                                        <CartItemCheck  cartItem={cartItem}/>
                                    </div>
                                )
                            })}
                            </div>
                            <div className="cart-checkout">
                            <div className="total">
                                <span>Total price of the Order:</span>
                                <span className="amount">${cart.total}</span>
                            </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-lg-6 mt-5 order-lg-1 order-0' data-bs-theme="dark">
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-center'>Order Shipping Data</Card.Title>
                            <CartCheckoutForm  />                       
                            </Card.Body>
                    </Card>
                </div>
                
            </div>
            
            <Footer/>
        </Fragment>
        
    );
};


export default CartCheckout