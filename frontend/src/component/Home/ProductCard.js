
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  return (
    
  <Link className="productCard" to={`/product/${product._id}`}>
    {product.images && product.images.length > 0 && (
    <img src={product.images[0].url} alt={product.name}/>
    )}
    <p style={{fontWeight:"bold",color:"black",fontSize:"25px"}}>{product.name}</p>
    <span style={{color:"red",fontWeight:"bold",fontSize:"20px"}}>{`₹${product.price} per kg`}</span>
    
  </Link>
  
  );
};

export default ProductCard;
