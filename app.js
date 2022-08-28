const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { post } = require('./src/routes/post');
const PORT = process.env.PORT || 5000

const app = express()
dotenv.config()

// Third-party Middlewares
app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

// Local Middlewares
app.use("/post", post)

// Config Database
mongoose.connect(process.env.MONGODB_URL)
    .then(() => { console.log('Database Connected') })
    .catch(err => { console.log(err) })

// Health Check
app.get("/", (req, res) => {
    res.send("Hello World!")
})
// Listen Server
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${process.env.PORT}`)
})