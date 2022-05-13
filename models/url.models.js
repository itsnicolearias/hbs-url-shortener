const  mongoose  = require('mongoose')
const { nanoid } = require('nanoid')

const urlSchema = new mongoose.Schema({
    origin: {
        type: String,
        unique: true,
        required: true
    },
    shortURL: {
        type: String,
        unique: true,
        required: true,
        default: nanoid(6)

    }
})

module.exports = mongoose.model('Url', urlSchema)