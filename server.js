const express = require('express')
const app = express()
const port = process.env.PORT || 7000
const mongoose = require('mongoose')
const {MONGOURI} = require('./config/database')
const path = require('path') 

mongoose
.connect(MONGOURI
    // {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true

// }
)
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.log(err));

require("./models/user")
require("./models/post")

app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/post"))
app.use(require("./routes/user"))

app.get("/",(req,res)=>{
    res.send("Hello World")
})

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'))
    
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(port,()=>{
    console.log("Server is Running at PORT :",port)
})