const express=require("express");
const app= express();
const cookieParser=require("cookie-parser");
const errorMiddleware=require("./middleware/error");
const dotenv=require("dotenv");
const cors=require("cors");
const bodyParser=require("body-parser");
const {spawn} = require("child_process");
const pickle=require("pickle");

//const port=process.env.PORT || 7000;
//config
dotenv.config({path:"backend/config/config.env"});


app.use(express.json());
app.use(cookieParser());
//Route imports

const product=require("./routes/productRoute");
const user=require("./routes/userRoute");
const order=require("./routes/orderRoute");
const payment=require("./routes/paymentRoute");

/*let regressor;

try{
    const modelFile=fs.readFileSync("model.pkl");
    regressor=pickle.loads(modelFile);

}
catch(error){
    console.error(`error loading the model :`,error);
    process.exit(1);
}
*/

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);


//Middleware for errors
app.use(errorMiddleware);
app.use(cors());
app.use(bodyParser.json());

// New route for price prediction
app.post("/predict-price", async (req, res) => {
    const { Day,Month,Year} = req.body;
  
    // Call your Python script with the provided inputs
    const pythonProcess = spawn("python", ["prediction/price_prediction.py", Day,Month,Year]);
  
    pythonProcess.stdout.on("data", (data) => {
      const predictedPrice = parseFloat(data.toString().trim());
      res.json({ predictedPrice });
    });
  
    pythonProcess.stderr.on("data", (data) => {
      console.error(`Python error: ${data}`);
      res.status(500).json({ error: "An error occurred while predicting the price." });
    });
  });
  
 // Start the server
  //app.listen(port, () => {
    //console.log(`Server is running on port ${port}`);
  //});


module.exports=app;