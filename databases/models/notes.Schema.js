const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({

  Title: {
    type: String,
    required: true
  },
  Body: {
    type: String,
    required: true
  }

})

const noteModel = mongoose.model('Nota', noteSchema)

module.exports = noteModel
