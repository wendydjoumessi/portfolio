const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./MiddleWare/errorMiddleware")

const app = express() ;

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyparser.json())

//Routes Middleware
app.use("/api/users",userRoute);


//Routes
app.get("/",(req, res)=>{
  res.send("Home page");
})
//error MiddleWare
app.use(errorHandler);

// connect to DB and start server
const Port = process.env.Port || 5000;

mongoose.connect(process.env.MONGO_URI) .then(() =>{

  app.listen(Port, () =>{
    console.log(`Server Running on port  ${Port}`);    //connecting to the server
  })

})
.catch((err) => console.log(err));