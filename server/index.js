const express = require('express');
const app = express()
const mongoose = require('mongoose');
require('dotenv').config({path: './.env'});
const cors = require('cors')
const authRoute = require('./routes/auth');


app.use(cors())
app.use(express.json());


//connect to mongo db atlas
mongoose.connect(process.env.MONGO_URL,
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false },
).then(() => {
    console.log('DB CONNECTED');
  })
  .catch(console.log('DB NOT CONNECTED'));


//check if backend responding
app.get('/' , (req , res) => {
    return res.status(201).send("Backend Check!")
})

app.use('/user' , authRoute);

//backend running on PORT  7000
const port = process.env.PORT || 7000;
app.listen( port , () => { console.log("server up at " +port);})