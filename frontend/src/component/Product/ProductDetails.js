import React, { Fragment, useEffect,useState } from 'react';
import "./ProductDetails.css";
import { useSelector,useDispatch } from 'react-redux';
import { getProductDetails } from '../../actions/productAction';
import MetaData from '../layout/MetaData';
import {addItemsToCart} from "../../actions/cartAction";



const ProductDetails = ({ match }) => {
    const dispatch = useDispatch();
    const {product} = useSelector((state)=>state.productDetails);
    
 const [quantity,setQuantity]=useState(1);
 const increaseQuantity=()=>{
  if(product.Stock<=quantity)
  return;
  const qty=quantity+1;
  setQuantity(qty);
 };
 const decreaseQuantity=()=>{
  if(1>=quantity) 
  return;
  const qty=quantity-1;
  setQuantity(qty);
 };

 const addToCartHandler=()=>{
  dispatch(addItemsToCart(match.params.id,quantity));
  alert("Item added to Cart");
};

    useEffect(()=>{
        dispatch(getProductDetails(match.params.id))
    },[dispatch,match.params.id]);
    

   


  return (
  <Fragment>
    <div className='ProductDetails' >
        <div >
            
    {product.images  && product.images.map((item,i) => (
        <img style={{height:"80%",width:"60%"}}
        key={item.url}
        src={item.url}
        alt={`${i} Slide`}
    />
    ))
    }
        </div>
        <div style={{border:"2px solid black" ,height:"500px",width:"1000px",backgroundColor:"white"}}>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
            
              <div className="detailsBlock-3">
                <h1>{`₹${product.price} per kg`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity}/>

                  <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button onClick={addToCartHandler} style={{fontSize:"15px"}} >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              
            </div>
          </div>


  
  </Fragment>
);
};

export default ProductDetails;
