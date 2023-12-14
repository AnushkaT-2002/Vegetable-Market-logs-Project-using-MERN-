import React from 'react';
import './AboutUs.css'; // Import your CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container" style={{backgroundImage:'url("https://zeevector.com/wp-content/uploads/Cute-Pastel-Background-768x532.png")'}}>
      <div className="about-us-content">
        <h2 style={{textAlign:"center"}}>About Us</h2>
        <p>Welcome to our vegetable selling website! We are dedicated to providing you with the freshest and finest vegetables sourced directly from local farmers.</p>
        <p>Our mission is to promote healthy eating habits by making organic and locally grown vegetables easily accessible to everyone.</p>
        <p>With a commitment to quality and sustainability, we ensure that each vegetable you receive is packed with nutrients and flavor, straight from the farm to your table.</p>
        <p>Feel free to explore our wide range of vegetables and place your order with confidence. Thank you for supporting local agriculture and choosing us as your trusted vegetable provider!</p>
        <p>Contact us at: <a href="mailto:contact@example.com">veggiezee@gmail.com</a></p>
      </div>
    </div>
  );
}

export default AboutUs;
