const express = require("express");
require("dotenv").config();

const app = express()

app.get("/test", (req, res) => {
    res.json("hello world")
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})