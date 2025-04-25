const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://raidmefti:darkcrazymak@cluster0.dtypp.mongodb.net/myTest")