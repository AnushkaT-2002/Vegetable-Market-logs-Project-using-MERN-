import React, { Fragment, useEffect } from 'react';
import "./Vegetables.css";
import {useSelector,useDispatch} from "react-redux";
import {clearErrors,getProduct} from "../../actions/productAction"; 
import ProductCard from "../Home/ProductCard";


const Vegetables=()=>{
  const dispatch=useDispatch();
  const {products,error,productsCount}=useSelector(
    (state)=>state.products
  );
useEffect(()=>{
  dispatch(getProduct());
},[dispatch]);
return <Fragment>
  <div className='back2'>
  <h2 className="productsHeading">Daily Veggies</h2>
  <div className="Veggies">
    {products && 
    products.slice(0,16).map((product)=>(
      <ProductCard key={product._id} product={product}/>
    ))}
    </div>
    </div>
</Fragment>
};

export default Vegetables;


