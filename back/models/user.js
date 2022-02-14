const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number }
})

// const user = mongoose.model("user", userSchema)
// module.exports = user

module.exports = user = mongoose.model("user", userSchema)