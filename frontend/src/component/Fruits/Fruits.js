import React, { Fragment, useEffect } from 'react';
import "./Fruits.css";
import {useSelector,useDispatch} from "react-redux";
import {clearErrors,getProduct} from "../../actions/productAction"; 
import ProductCard from "../Home/ProductCard";


const Fruits=()=>{
  const dispatch=useDispatch();
  const {products,error,productsCount}=useSelector(
    (state)=>state.products
  );
useEffect(()=>{
  dispatch(getProduct());
},[dispatch]);
return <Fragment>
  <div className='back2'>
  <h2 className="productsHeading">Fruits</h2>
  <div className="Veggies">
    {products && 
    products.slice(24,40).map((product)=>(
      <ProductCard key={product._id} product={product}/>
    ))}
    </div>
    </div>
</Fragment>
};

export default Fruits;



