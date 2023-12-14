import './App.css';
import { useEffect,useState } from 'react';
import Header2 from "./component/Header2/Header2.js";
import Header from "./component/layout/Header/Header.js";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Green1 from "./component/Green1/Green1.js";
import Vegetables from "./component/Vegetables/Vegetables.js";
import Fruits from "./component/Fruits/Fruits.js";
import Exotics from "./component/Exotics/Exotics.js";
import Seasonals from "./component/Seasonals/Seasonals.js";
import LoginSignUp from './component/User/LoginSignUp.js';
import Register from './component/Register/Register.js';
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ProtectedRoute from './component/Route/ProtectedRoute';
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from 'axios';
import Payment from "./component/Cart/Payment";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from "./component/Cart/OrderSuccess"; 
import  myOrders from './component/Order/MyOrders';
import ContactUs from "./component/ContactUs/ContactUs";
import AboutUs from "./component/AboutUs/AboutUs";
import FuturePrice from "./component/FuturePrice/FuturePrice.js"

function App() {

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(()=>{
    getStripeApiKey();
  });
  return (
    <Router>
      <Header2/>
    <Header/>
    <Route exact path="/"component={Home}/>
    <Route exact path="/product/:id"component={ProductDetails}/>
    <Route exact path="/vegetables"component={Vegetables}/>
    <Route exact path="/green" component={Green1}/>
    <Route exact path="/fruits"component={Fruits}/>
    <Route exact path="/exotics"component={Exotics}/>
    <Route exact path="/seasonals"component={Seasonals}/>
    <Route exact path="/login" component={LoginSignUp}/>
    <Route exact path="/register" component={Register}/>
  <Route exact path="/cart" component={Cart}/>
    <Route exact path="/contact" component={ContactUs}/>
    <Route exact path="/about" component={AboutUs}/>
    <Route exact path="/predicts" component={FuturePrice}/>

    <ProtectedRoute exact path="/shipping" component={Shipping}/>
    <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder}/>
  
    {stripeApiKey && (
    <Elements stripe={loadStripe(stripeApiKey)}>
    <ProtectedRoute exact path="/process/payment" component={Payment}/>
    </Elements>
    )}

<ProtectedRoute exact path="/success" component={OrderSuccess}/>
<ProtectedRoute exact path="/orders" component={myOrders}/>
    <Footer/>
    </Router>
  );
}

export default App;
