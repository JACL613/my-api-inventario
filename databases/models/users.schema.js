const mongoose = require('mongoose ')
const { Schema } = mongoose

const userSchema = new Schema({
  nombreUsuario: {
    type: 'String',
    require: true
  },
  passworHash: {
    type: 'String',
    require: true
  },
  fechaNacimiento: {
    type: 'Date',
    require: true
  }
})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel
