const mongoose = require('mongoose')
const connectDb = () => {
    return mongoose.connect('mongodb+srv://victortetteh520:tetteh@cluster0.apps721.mongodb.net/')
    .then(() => {
        console.log('db connected sucessfully')
    })
    .catch((err) => {
        console.log(err)
    })
}





module.exports = connectDb