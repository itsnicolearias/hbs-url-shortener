const mongoose = require('mongoose')


const URI = process.env.MONGODB_URI

try {
    mongoose.connect(URI)
    console.log('DB connected')
} catch (error) {
    console.log(error)
}