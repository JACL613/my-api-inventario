const { Router } = require('express')
const multer = require('multer')
const path = require('path')
const databases = require('../../databases/databases.js')
const productModel = require('../../databases/models/items.schema.js')
const noteModel = require('../../databases/models/notes.schema.js')
const router = Router()

// const subir = multer({ dest: path.join(__dirname, '../../App/Media') })

// reglas multer Middalwares

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../App/Media'),

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Error En el formato (.png, .jpg and .jpeg) Formatos Aceptados!!!'))
    }
  },

  dest: path.join(__dirname, '../../App/Media')
})

// fin reglas multer Middalwares

router.post('/queryProducto', upload.single('imagen'), async (req, res) => {
  const rutaImg = path.join('./Media/', req.file.filename)
  const objProducto = {
    url: rutaImg,
    categoria: req.body.categoria,
    precio: req.body.precio,
    marca: req.body.marca,
    descripcion: req.body.descripcion,
    venta: req.body.venta,
    disponibles: req.body.disponibles
  }

  const newProduct = await productModel.insertMany({
    urlImgProducto: objProducto.url,
    marcaProducto: objProducto.marca,
    precioProducto: objProducto.precio,
    categoria: objProducto.categoria,
    descripcions: objProducto.descripcion,
    cantidadVendida: objProducto.venta,
    cantidadDisponible: objProducto.disponibles

  })
  const allProducts = await productModel.find()

  console.log(rutaImg)
  console.log(req.file)
  console.log('Se guardo los siguentes datos:' + newProduct)

  res.send(allProducts)
  res.status(200)
})

module.exports = router
