import React from 'react';
import './ContactUs.css'; // Import your CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-us-container" style={{backgroundImage:'url("https://zeevector.com/wp-content/uploads/Cute-Pastel-Background-768x532.png")'}}>
      <div className="contact-us-content">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to get in touch with us. We're here to help!</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="4" required />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
          <p style={{textAlign:"right"}}>Contact Us at:+91 1615 1271 22</p>
          <p style={{textAlign:"right"}}>E-mail:veggiezee@gmail.com</p>
                
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
