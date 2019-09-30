//carregando todos os models
require('./models/Task')
const express = require('express')
const app = express()
const cookieParse = require('cookie-parser')
const session = require('express-session')
const flash = require('express-flash')
const helpers = require('./helpers')

const router = require("./routes/index")
const path = require('path')
const erroHandler = require('./handlers/errorHandler')
const mongoose = require('mongoose')
const PORT = process.env.port || 3000
require('dotenv').config({ path: 'variables.env' })


const passport = require('passport')
const localStrategy = require('passport-local').Strategy



app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//gerando um hash para o cookie
app.use(cookieParse(process.env.SECRET))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    res.locals.h = helpers;
    res.locals.flashes = req.flash();
    res.locals.user = req.user
    next();
})


//model processo de login
const User = require('./models/User')
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use('/', router)
app.use(erroHandler.notFound)

//Connection to database
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise
mongoose.connection.on('error', (error) => {
    console.error("ERRO: " + error.message)
})








app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server running at PORT: " + PORT)
    }
})