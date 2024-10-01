import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const CartItemCheck = ({cartItem}) => {
  let [name, setName] = useState(null);
  let [price, setPrice] = useState(0);
  let [image, setImage] = useState(null);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    let result = products.find((p) => p.id === parseInt(cartItem.ProductId));
    setName(result.name);
    setPrice(result.price);
    setImage(result.image);
  }, [cartItem, products]);

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