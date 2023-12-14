import React, { Fragment, useEffect } from 'react';
import "./Seasonals.css";
import {useSelector,useDispatch} from "react-redux";
import {clearErrors,getProduct} from "../../actions/productAction"; 
import ProductCard from "../Home/ProductCard";


const Seasonals=()=>{
  const dispatch=useDispatch();
  const {products,error,productsCount}=useSelector(
    (state)=>state.products
  );
useEffect(()=>{
  dispatch(getProduct());
},[dispatch]);
return <Fragment>
  <div className='back2'>
  <h2 className="productsHeading">Seasonals</h2>
  <div className="Veggies">
    {products && 
    products.map((product)=>(
      <ProductCard key={product._id} product={product}/>
    ))}
    </div>
    </div>
</Fragment>
};

export default Seasonals;



