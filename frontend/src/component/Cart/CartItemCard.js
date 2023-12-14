import React from 'react';
import "./CartItemCard.css";
import { Link } from "react-router-dom";
import { removeItemsFromCart } from '../../actions/cartAction';
const CartItemCard = ({item,deleteCartItems}) => {
  return (
    <div className='CartItemCard'>
        <img src={item.image} alt='ssa'/>
        <div >
       <Link to={`/product/${item.product}`}>  <span style={{fontSize:"15px"}}>{item.name}</span></Link>
            <span style={{fontSize:"15px"}}>{`Price:₹${item.price}`}</span>
            <p onClick={()=>deleteCartItems(item.product)}  style={{fontSize:"15px"}}>Remove</p>
        </div>
    </div>
  );
};

export default CartItemCard
