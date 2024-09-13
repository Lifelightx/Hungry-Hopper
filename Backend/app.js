const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = 5000


//middleware
app.use(express.json())
app.use(cors())
//connect to MongoDB
const mongoDb = require('./config/db')
mongoDb()

//api routes
app.use('/api/food', require('./Routes/foodRoute') )
app.use('/image', express.static('uploads'))
app.use('/api/user', require('./Routes/userRoute'))
app.use('/api/cart',require('./Routes/cartRoute'))
app.use('/api/order', require('./Routes/orderRoute'))

app.get('/', (req, res)=>{
    res.send('Welcome')
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})