from flask import Flask,request,jsonify;
import pickle
import numpy as np

app=Flask(__name__)

# Load your trained model
with open('model.pkl', 'rb') as model_file:
    regressor = pickle.load(model_file)

# Function to predict price based on input data
def predict_price(Day,Month,Year):
    try:
       
        
        input_data =(Day,Month,Year)

        # Predict the price for a new input
        predicted_price = regressor.predict(input_data)

        # Return the predicted price
        return predicted_price[0]  # Assuming the prediction is a single value
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    import sys

    if len(sys.argv) != 3:
        print("Usage: python price_prediction.py <vegetable_name> <date>")
        sys.exit(1)

    vegetable = sys.argv[1]
    date = sys.argv[2]
    prediction = predict_price()
    print("Predicted price:", prediction)
