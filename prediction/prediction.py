import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import pickle
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler


# Load data
data = pd.read_csv("VeggieData.csv")

# Prepare data
X = data[["Day", "Month", "Year"]].values
Y = data["Price"].values.reshape(-1, 1)

# Split data into training and testing sets
x_train, x_test, y_train, y_test = train_test_split(X, Y, train_size=0.8, shuffle=True, random_state=1)

# Initialize and train the DecisionTreeRegressor
regressor = RandomForestRegressor(min_samples_split=3, max_depth=3)
regressor.fit(x_train, y_train)

# Make predictions on the test set
y_predict = regressor.predict(x_test)

# Calculate RMSE (Root Mean Squared Error)
rmse = np.sqrt(mean_squared_error(y_test, y_predict))
print("Root Mean Squared Error:", rmse)

# Save the trained model
pickle.dump(regressor, open('model.pkl', 'wb'))

# Predict the price for a new input
new_input = np.array([[29, 8, 2023]])
predicted_price = regressor.predict(new_input)
print("Predicted price of onion is Rs", predicted_price)

