const { Router } = require('express')
const path = require('path')
const router = Router()
const { CreateNote, QueryNotes, QueryNote, UpdateNote } = require('../../databases/databases.js')

// Crear una Nota
router.post('/createNote', async (req, res) => {
  console.log(req.body)
  const title = req.body.Titulo
  const Bodynote = req.body.bodyNote
  const newNote = await CreateNote(title, Bodynote)

  res.send(newNote)
})

// Tomar Todas las Notas
router.get('/queryNotes', async (req, res) => {
  const totalNote = await QueryNotes()
  res.send(totalNote)
})
// Tomar una Nota en especifico
router.get('/queryNotes/:id', async (req, res) => {
  const totalNote = await QueryNote(req.params.id)
  res.json(totalNote)
})
// Actualizar una Nota
router.put('/queryNote/:id', async (req, res) => {
  const { Title, Body } = req.body
  const idNote = req.params.id
  const newNote = { _id: idNote, Title, Body }
  console.log(newNote, idNote)
  const note = await UpdateNote(idNote, newNote)
  console.log(note)
  res.send(note)
})
// Borrar una Nota
router.delete('/queryNote/:id', async (req, res) => {
  await noteModel.findByIdAndRemove(req.params.id)
  const notas = await noteModel.find()
  res.json(notas)
})

module.exports = router
