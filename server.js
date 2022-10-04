// DEPENDENCIES
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// CONFIGURATION
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => { console.log('connected to mongo: ', 
process.env.MONGO_URI) }
)
// ROUTES
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/books', require('./controllers/books_controller.js'))

app.get('/books/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

app.listen(process.env.PORT)

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })