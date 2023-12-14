import React, { useState } from 'react';
import './future.css';

const FuturePrice = () => {
  const [vegetable, setVegetable] = useState('');
  const [date, setDate] = useState('');
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handlePredictClick = () => {
    // Create a lookup table for vegetable price ranges
    const priceRanges = {
      potato: [26, 30],
      onion: [38, 45],
      brinjal: [26, 34],
      ladyfinger: [30, 34],
      mushroom: [70, 80],
      garlic: [240, 260],
      ginger:[150,165],
      banana: [58, 62],
      spinach:[14,15],
      Lemon: [56, 62],
      orange:[50,60],
      apple:[60,70],
      greenchilly:[80,90],
      tomato:[43,47]
    };

    // Get the price range based on the vegetable name (default to 0-1 if not found)
    const [minPrice, maxPrice] = priceRanges[vegetable.toLowerCase()] || [0, 1];

    // Generate a random price within the specified range
    const randomPrice = Math.random() * (maxPrice - minPrice) + minPrice;
    setPredictedPrice(randomPrice.toFixed(2));
  };

  return (
    <div className='future' style={{backgroundImage:'url("https://zeevector.com/wp-content/uploads/Cute-Pastel-Background-768x532.png")',backgroundSize:"cover"}}>
      <h2 className='ho' style={{fontSize:"40px",paddingTop:"30px"}}>Price Predictor</h2>
      <div>
        <label className='lab' >
          Vegetable Name:
          <input
            type="text"
            value={vegetable}
            onChange={(e) => setVegetable(e.target.value)}
            className='inp'
            style={{width:"330px",marginBottom:"-60px"}}
          />
        </label>
      </div>
      <div>
        <label className='lab' style={{marginTop:"30px",marginLeft:"640px"}}>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='inp'
            style={{marginBottom:"70px"}}
          />
        </label>
      </div>
      <div>
        <button onClick={handlePredictClick} className='bu' >Predict</button>
      </div>
      {predictedPrice !== null && (
        <p className='po'>
          Predicted price is (per kg): ₹{predictedPrice}
        </p>
      )}
    </div>
  );
};

export default FuturePrice;