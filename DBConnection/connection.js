//Connection String
const mongoose = require('mongoose')
require('dotenv').config()

    mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true}).then(()=> {
        console.log("Connection was extablished");
    }).catch(error => {
        console.log(error)
})

