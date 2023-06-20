const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const cors = require("cors");
//const userRoute = require("./routes/userRoute");
const errorHandler = require("./MiddleWare/errorMiddleware");
const projectRoutes = require("./routes/projectRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
require('dotenv').config({path:'.env'});
const app = express() ;



//Middleware
// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
// app.use(bodyparser.json())

// //Routes Middleware
// app.use("/api/users",userRoute);


// //Routes
// app.get("/",(req, res)=>{
//   res.send("Home page");
// })
// //error MiddleWare
// app.use(errorHandler);

// // connect to DB and start server
// const Port = process.env.Port || 5000;

// mongoose.connect(process.env.MONGO_URI) .then(() =>{

//   app.listen(Port, () =>{
//     console.log(`Server Running on port  ${Port}`);    //connecting to the server
//   })

// })
// .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.MONGO_URI;

console.log("connecting to the MongoDB Atlas.....");
mongoose
.connect(DB_URI)
.then(() =>{
  console.log("connected to MongoDB Atlas");
  app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => console.log("Error connecting to MongoDB Atlas:",err));

// Reset of your server code goes here...
//Middleware
app.use(express.json());
app.use( (req, res, next) =>{
    console.log(req.path, req.method);
    next();
});
app.use(cors({
  "origin" : ["http://127.0.0.1:3000", "https://wendydjoumessi-portfolio.vercel.app"],
  "methods" : ["GET", "POST", "DELETE", "PATCH"]
}));

// Routes
app.use("/projects",projectRoutes);
app.use("/testimonials",testimonialRoutes);
app.use("/experiences",experienceRoutes);
app.use("/services",serviceRoutes);
app.use("/", (req, res)=>{
  return (
      res.status(200).json({
          message: "Welcome to the Root URL, Please navigate to a valid Endpoint"
      })
  )
})