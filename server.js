// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => { console.log('connected to mongo: ', 
process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(express.json())

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello World!')
})

