///Dependdencies
const express = require('express');
const cors = require('cors');
require('./DBConnection/connection');
require('dotenv').config();



const app = express();
const PORT  = process.env.PORT


///Express Middleware
app.use(cors());
app.use(express.json());

//Endpoints 

app.use('/users', require('./routes/user'));
app.use('/exercise', require('./routes/exercise'));


///Listening the server
app.listen(PORT, () => {
    console.log("Server is Up : "+PORT);
})
