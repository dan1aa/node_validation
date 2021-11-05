const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const mainRoute = require('./routes/main.js')
const registerRoute = require('./routes/registration.js')
const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(mainRoute);
app.use(registerRoute);

(async function() {
    try {
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })


        app.listen(PORT, 
            () => console.log(`server is running on ${PORT}`)
        )
    }
    catch(e) {
        throw new Error(e)
    }
})()