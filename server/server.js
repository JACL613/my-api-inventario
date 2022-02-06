const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { moongose } = require('../databases/databases.js')
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// middleware
app.use(morgan('dev'))
app.use(express.json())

// routes
app.use(require(path.join(__dirname, '/routes/notes.routes.js')))
app.use(require(path.join(__dirname, '/routes/inventario.routes.js')))

// static file
app.use(express.static(path.join(__dirname, '../App')))

// starting the server
app.listen(app.get('port'), () => {
  console.log('Server Activo en El puerto: ', app.get('port'))
})
