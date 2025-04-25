const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const user = require('./models/user')
const app = express()
const port = 8080
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://raidmefti:darkcrazymak@cluster0.dtypp.mongodb.net/myTest").then(()=>{
    console.log('connected succesfuly to the database');
})
////  l api qui retourne touts les users
app.get('/users',async (req,res)=>{
     const data = await user.find()
     res.json(data)
})

////// l api qui ajoute un user
app.post('/users', async(req,res)=>{
    const newUser = await user.create(req.body)
    res.json(newUser)
})

app.listen(port , ()=>{
    console.log('server is running at http://localhost:8080');
})