import React, { Fragment,useEffect } from 'react';
import { CgMouse } from 'react-icons/all';
import "./Home.css";
import img from './veg.png';
import img1 from './apple.png';
import img2 from './Quality.png';
import img3 from './vegan.png';
import img4 from './orange.png';
import img5 from './tomato.png';
import img6 from './beans.png';
import img7 from './leaf.jpg';
import Product from "./ProductCard";
import "./mango.jpg";
import MetaData from "../layout/MetaData";
import {getProduct} from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux"; 
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ProductCard from './ProductCard';

const product={
    name:"Mango",
    images:"https://tse3.mm.bing.net/th?id=OIP.sLre3LDKzsNRtgKSSsYC8AHaE7&pid=Api&P=0&h=180",
    price:"Rs.200",
    _id:"fruit",
};


const Home = () => {
    const dispatch = useDispatch();
    const {loading,error,products,productsCount}=useSelector(
        (state)=>state.products
    );
   
  
    useEffect(() => {
        dispatch(getProduct());
      },[dispatch]);
    
  

  return (
   <Fragment>

   <MetaData title="veggi-e-zee"/>

    <div className="banner">
        <p style={{fontWeight:"bold",color:"white",transition:"ease-in"}}>Welcome to Veggi-e-zee</p>
        <h1 style={{color:"white"}}>Goodness Delivered to you!!</h1>
        <a href="#container">
            <button style={{fontWeight:"bold"}}>Best Deals<CgMouse/>
            </button>
        </a>

    </div>
   
          <h2 className="homeHeading">Our Top Categories</h2>
 <div className='category'style={{display:"flex"}}>



   
   <button style={{border:"none",borderRadius:"50%",width:150,height:150,boxShadow:"none",backgroundColor:"white",marginLeft:"260px",marginBottom:"100px"}} >
        <Link to="/vegetables">
        <img src={img5} style={{ height: 150, width: 150, marginLeft: 15, marginTop: 8 ,backgroundSize:"cover"}}/>
        </Link>
        <p style={{marginLeft:"39px",fontWeight:"bold"}}>Daily Veggies</p>  </button>

        

        <button style={{border:"none",borderRadius:"50%",width:150,height:150,boxShadow:"none",backgroundColor:"white",marginLeft:"60px",marginBottom:"100px"}} >
        <Link to="/green">
        <img src={img6} style={{ height: 150, width: 150, marginLeft: 15, marginTop: 8 ,backgroundSize:"cover"}}/>
        </Link>
   <p style={{marginLeft:"39px",fontWeight:"bold"}}>Green Veggies</p> </button>



        
    <button style={{border:"none",borderRadius:"50%",width:150,height:150,boxShadow:"none",backgroundColor:"white",marginLeft:"60px",marginBottom:"100px"}} >
        <Link to="/fruits">
        <img src={img1} style={{ height: 150, width: 150, marginLeft: 15, marginTop: 8 ,backgroundSize:"cover"}}/>
        </Link>
        <p style={{marginLeft:"39px",fontWeight:"bold"}}>Fruits</p>  </button>


    <button style={{border:"none",borderRadius:"50%",width:150,height:150,boxShadow:"none",backgroundColor:"white",marginLeft:"60px",marginBottom:"100px"}} >
        <Link to="/exotics">
        <img src={img} style={{ height: 150, width: 150, marginLeft: 15, marginTop: 8 ,backgroundSize:"cover"}}/>
        </Link>
   <p style={{marginLeft:"39px",fontWeight:"bold"}}>Exotics</p> </button>



   <button style={{border:"none",borderRadius:"50%",width:150,height:150,boxShadow:"none",backgroundColor:"white",marginLeft:"60px",marginBottom:"100px"}} >
        <Link to="/seasonals">
        <img src={img4} style={{ height: 150, width: 150, marginLeft: 15, marginTop: 8 ,backgroundSize:"cover"}}/>
        </Link>
        <p style={{marginLeft:"39px",fontWeight:"bold"}}>Seasonals</p>  </button>


        

    
  </div>
  <div style={{backgroundColor:"white"}}>
    <h2 className="homeHeading">Best Deals of the week!!</h2>

    <div className="container" id="container">

    {products && products.slice(0,4).map((product) => 
                <ProductCard key={product._id} product={product} />
              )}
          </div> 
          </div> 

    <div style={{border:"1px solid white",borderRadius:"50px",width:"1400px",height:"600px",marginLeft:"60px",backgroundImage:"url('https://wallpapers.com/images/hd/aesthetic-vegetable-collard-green-on-wooden-table-6n5kx2vwey327exd.jpg')",backgroundSize:"cover"}} >
    
        <h2 style={{marginLeft:"100px", fontFamily: "Roboto", fontSize: "45px", Borderbottom:" 1px solid rgba(21, 21, 21, 0.5)",marginTop:"200px", color: "white"}}>VEGETABLE PRICE PREDICTOR</h2>
        <br></br>
        
        
          <h2 style={{marginLeft:"100px", fontFamily: "Roboto", fontSize: "45px", Borderbottom:" 1px solid rgba(21, 21, 21, 0.5)", color: "white",marginBottom:"30px"}}>Sneak Peek at tomorrow's price on one Click</h2>
          <Link to="/predicts">
        <button style={{border:"none",width:250,height:50,boxShadow:"none",backgroundColor:"#e1c11f",marginLeft:"100px",marginBottom:"10px",borderRadius:"30px",marginTop:"10px"}}  >
        
        <p style={{textAlign:"center",fontWeight:"bolder",fontSize:"25px",color:'darkgreen',fontFamily:"cursive"}}>Predict &nbsp;<span><b>&#62;</b></span></p>
        
          </button>
          </Link>
    </div>


<div>
    <img src={img2} style={{height:"700px",width:"1500px"}}/>
</div>
<div>
    <img src={img3} style={{height:"400px",width:"1200px",marginLeft:"150px"}}/>
</div>
   </Fragment>

  );
};

export default Home;
