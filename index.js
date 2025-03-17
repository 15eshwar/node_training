const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/products.routes');
const dotenv =require('dotenv')
dotenv.config()


const app = express()
// A middleware to cvt the json
app.use(express.json())

//routes
app.use('/api/products',productRoute);

app.listen(3000,()=>{
    console.log('The server is running on port 3000');
});

app.get('/', function (req, res) {
  res.send('This is the node response sent')
});

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Connected! to MongoDB sucessfully');
  })
  .catch((err) =>{
    console.log('Connection failed',err);
  })
