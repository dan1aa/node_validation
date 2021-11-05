const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    age: Number,
    password: String
})

module.exports = model('user', userSchema)