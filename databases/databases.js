const mongoose = require('mongoose')
// const productModel = require('./models/items.schema.js')
const noteModel = require('./models/notes.schema.js')
const URI = 'mongodb://localhost/db-inventario'

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: false

})
  .then(db => console.log('base de datos conectada'))
  .catch(err => console.error(err))

async function QueryNote (Value1, Value2) {
  const note = await noteModel.find({ _id: Value1 })
  return note
}

async function QueryNotes (Value1, Value2) {
  const notes = await noteModel.find()
  return notes
}

async function CreateNote (Value1, Value2) {
  await noteModel.insertMany({ Title: Value1, Body: Value2 })
  const notes = await noteModel.find({ Title: Value1 })
  return notes
}
async function UpdateNote (Value1, Value2) {
  const note = await noteModel.findByIdAndUpdate(Value1, Value2)
}

module.exports = { CreateNote, QueryNotes, QueryNote, UpdateNote }
