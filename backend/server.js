require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(cors())
app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen to port
        if(process.env.PORT) {
            app.listen(process.env.PORT, () => {
                console.log('connected to DB and listening for requests on port', process.env.PORT)
            })
        }
        module.exports = app;
    })
    .catch((err) => {
        console.log(err)
    })

