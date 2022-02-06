const mongoose = require('mongoose')
const { Schema } = mongoose

const itemSchema = new Schema({
  urlImgProdcuto: {
    type: String,
    require: true
  },
  marcaProducto: {
    type: String,
    require: true
  },
  precioProducto: {
    type: Number,
    require: true
  },
  categoria: {
    type: String,
    require: true
  },
  descripcions: {
    type: String,
    require: true
  },
  cantidadVendida: {
    type: Number,
    requiire: true,
    default: 0

  },
  cantidadDisponible: {
    type: Number,
    require: true,
    default: 0

  }

})
const productModel = mongoose.model('producto', itemSchema)
module.exports = productModel
