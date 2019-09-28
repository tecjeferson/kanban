const express = require('express')
const app = express()
const router = require("./routes/index")
const path = require('path')
const erroHandler = require('./handlers/errorHandler')
const mongoose = require('mongoose')
const PORT = process.env.port || 3000
require('dotenv').config({ path: 'variables.env' })



app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', router)
app.use(erroHandler.notFound)


//Connection to database
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise
mongoose.connection.on('error', (error) => {
    console.error("ERRO: " + error.message)
})


//carregando todos os models
require('./models/Task')



app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server running at PORT: " + PORT)
    }
})