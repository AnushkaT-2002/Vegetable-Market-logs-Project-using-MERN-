import React, { useState } from "react";
import axios from "axios";

function PricePrediction() {
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [inputData, setInputData] = useState({
    Day: "",
    Month: "",
    Year:"",
  });

  const predictPrice = async () => {
    try {
      const response = await axios.post("/predict-price", inputData);
      setPredictedPrice(response.data.predictedPrice);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Vegetable Price Prediction</h2>
      <label>
       Day:
        <input
          type="text"
          value={inputData.Day}
          onChange={(e) => setInputData({ ...inputData, Day: e.target.value })}
        />
      </label>
      <br />
      <label>
        Month:
        <input
          type="text"
          value={inputData.Month}
          onChange={(e) => setInputData({ ...inputData, Month: e.target.value })}
        />
      </label>
      <label>
       Year:
        <input
          type="text"
          value={inputData.Year}
          onChange={(e) => setInputData({ ...inputData, Year: e.target.value })}
        />
      </label>
      <br />
      <button onClick={predictPrice}>Predict Price</button>
      <br />
      {predictedPrice !== null && <p>Predicted Price: Rs {predictedPrice}</p>}
    </div>
  );
}

export default PricePrediction;
