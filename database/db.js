const mongoose = require('mongoose')
const enviromentConfig = require('./config')


try {
    mongoose.connect(enviromentConfig.mongo.url)
    console.log('DB connected')
} catch (error) {
    console.log(error)
}