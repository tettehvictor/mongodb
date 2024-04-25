const express= require("express")
const port = 2303
const studentRoute = require("./routes/studentRoute")
const fs = require('fs')
const app = express();
const connectDb = require('./database/db')


connectDb()


app.get('/', (req,res) => {
    res.send('welcome to my page')
})




app.use(studentRoute)
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.listen(port, () => {
    console.log(`server started successfully. click http://localhost:${port} to open webite`)
})