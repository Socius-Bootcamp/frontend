import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addQty, minusQty, removeFromCart } from '../../Redux/Cart/CartSlice';

const CartItemCheck = ({cartItem}) => {
  let [name, setName] = useState(null);
  let [price, setPrice] = useState(0);
  let [stock, setStock] = useState(null);
  let [image, setImage] = useState(null);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    let result = products.find((p) => p.id === parseInt(cartItem.ProductId));
    setName(result.name);
    setPrice(result.price);
    setImage(result.image);
    setStock(result.stock);
  }, [cartItem, products]);

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(cartItem));
  };

  const handleAddQty = (e) => {
    e.preventDefault();
    if(cartItem.qty<stock){
      dispatch(addQty(cartItem));
    }
  };

  const handleMinusQty = (e) => {
    e.preventDefault();
    if(cartItem.qty>1){
      dispatch(minusQty(cartItem));
    }
  };



  return (
    <div className="cart-item" >
      <div className="cart-product">
        <img src={`../img/products/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
        </div>
      </div>
      <div className="cart-product-price">${price}</div>
      <div>

        <div className="count">{cartItem.qty}</div>
   
      </div>
      <div className="cart-product-total-price">
        ${cartItem.price * cartItem.qty}
      </div>
    </div>
      
  )
}

export default CartItemCheck