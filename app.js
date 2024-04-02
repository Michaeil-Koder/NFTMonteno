const express = require('express')
const app = express()
require("dotenv").config()
const cors = require("cors")
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "./public")))

app.use("/", (req, res) => {
    res.render("index")
})


app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))