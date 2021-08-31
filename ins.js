const express = require('express');
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");


dotenv.config();


mongoose.connect('mongodb://127.0.0.1:27017/social',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
   
})



// mongoose.connect("mongodb+srv://roshni:Roshni@1@2@cluster0.fx3an.mongodb.net/social?retryWrites=true&w=majority",{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
   
// })
  
  //middleware
  app.use(express.json());
  
  app.use(helmet());
  app.use(morgan("common"));

  app.use("/api/users", userRoute);
  app.use("/api/auth", authRoute);
  app.use("/api/posts",postRoute);
 

app.listen(8800,()=>{
    console.log("backend server is running");
})