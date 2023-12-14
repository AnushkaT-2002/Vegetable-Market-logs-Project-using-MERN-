import React from 'react';
import "./Header2.css";
 import img from './logo.png';
import img1 from './cart.jpg'
import { Link } from 'react-router-dom';

const Header2 = () => {
    return (
<header>
    <div className="lefter">
      <div id="logo">
        <a href="#">
          <img alt="image1"
            style={{ height: 90, width: 270, marginLeft: 15, marginTop: 8 }}
            src={img}
          />
        </a>
      </div>
      {/*<div className="location-bar">
        <input type="text" placeholder="Search..." />
    </div>*/}
    </div>
    <nav id="menu">
      <ul>
        <li>
          
          <Link to="/"><button style={{backgroundColor:"#2A5454",color:"white",height:"30px",fontSize:"18px",border:"none"}}>Home</button></Link>
        </li>
        <li>
          <Link to="/about"><button style={{backgroundColor:"#2A5454",color:"white",height:"30px",fontSize:"18px",border:"none"}}>About Us</button></Link>
        </li>
        <li>
          <Link to="/contact"><button style={{backgroundColor:"#2A5454",color:"white",height:"30px",fontSize:"18px",border:"none"}}>Contact Us</button></Link>
        </li>
      </ul>
    </nav>
    <nav id="social-links">
      <ul>
        <li>
          <Link
            style={{
              border: 1,
              padding: "8px 15px 8px 15px",
             
            }}
            to="/login"
          ><button className="diu" style={{color:"white",height:"40px",width:"100px",fontSize:"18px",border:"none" ,backgroundColor: "#2A5454",
          borderRadius: 20,marginLeft:"-75px"}}>Sign Up</button>
          </Link>
        </li>
        <li>
          <Link to="/Cart">
            <img
              src={img1}
              style={{ height: 50, width: 50, borderRadius: 20 }}
            />
          </Link>
        </li>
      </ul>
    </nav>
 
  </header>
    );
        }

        export default Header2;
