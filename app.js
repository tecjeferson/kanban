const express = require('express')
const app = express()
const PORT = process.env.port || 3000
const router = require("./routes/index")
const path = require('path')


app.use('/', router)
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.listen(PORT, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Server running at PORT: " + PORT)
    }
})