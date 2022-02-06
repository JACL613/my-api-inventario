/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import Swal from 'sweetalert2'

import './Notas'

export default function CreateNotes (props) {
  const [notes, setNotes] = useState([])

  const ChangeEventDescription = (e) => {
    props.setDescripcion(e.target.value)
  }
  const ChangeEventTitle = (e) => {
    props.setTitulo(e.target.value)
  }

  const Peticion = (e) => {
    if (props.ID) {
      const titulo = document.getElementById('Titulo').value
      const body = document.getElementById('Body').value

      document.getElementById('Titulo').value = ''
      document.getElementById('Body').value = ''

      const data = { Title: titulo, Body: body }
      console.log(data)
      console.log(props.ID)
      fetch(`/queryNote/${props.ID}`,
        {
          method: 'PUT',
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
          }

        }
      ).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(res => props.setID(''))
        .then(res => props.accionTN())
    } else {
      const url = '/createNote'
      const titulo = document.getElementById('Titulo').value
      const body = document.getElementById('Body').value

      if (titulo && body) {
        const data = { Titulo: titulo, bodyNote: body }
        document.getElementById('Titulo').value = ''
        document.getElementById('Body').value = ''
        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => { console.log(response); props.accionTN() })
      } else {
        e.preventDefault()
        Swal.fire({
          title: 'Warning: data undefined',
          text: 'Rellena Todos los Campos',
          icon: 'warning',
          iconColor: '#ff0202'
        })
      }
    }
  }

  const prevEvent = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  if (props.ID) {
    return (
      <div className='container'>
        <button className='btn btn-success mx-1 my-1' onClick={props.funcion}> <span className='bi bi-x-circle' /></button>
        <form id='container-createNote' className='container my-2 py-1' onSubmit={prevEvent} style={{ background: 'linear-gradient(0deg, rgba(251,30,32,1) 0%, rgba(29,208,184,1) 81%)' }}>
          <h4 className='d-inline'> Actualizar Nota</h4>
          <div className='container' id='form-grup'>
            <div className='form-floating mb-3'>
              <label for='Titulo'>Titulo de la nota:</label>
              <input onChange={ChangeEventTitle} className='form-control my-2 ' type='text' name='Titulo' id='Titulo' value={props.titulo} />
            </div>
            <textarea onChange={ChangeEventDescription} className='form-control-plaintext bg-white px-1 my-2' type='text' name='Body' id='Body' value={props.descripcion} />
            <div className='container d-flex justify-content-center '><button className='btn btn-success  ' onClick={Peticion} type='submit'>update</button></div>
          </div>
        </form>

      </div>
    )
  } else {
    return (
      <div className='sombra-cards mt-4'>
        <form className='card my-2 py-1' onSubmit={prevEvent}>
          <div className='card-header'>
            <button className='btn btn-danger mx-1 my-1' onClick={props.funcion}> <span className='bi bi-x-circle' /></button>
            <h4 className='d-inline'> Crea una Nota</h4>
          </div>
          <div className='card-body'>
            <input onChange={ChangeEventTitle} className='form-control my-2 ' type='text' name='Titulo' id='Titulo' placeholder='Titulo de la nota' autoFocus />
            <textarea onChange={ChangeEventDescription} className='form-control my-2  plaintext bg-white px-1 my-2' type='text' name='Body' id='Body' placeholder='Escribe la nota...' />
          </div>

          <div className='card-footer d-flex justify-content-center '><button className='btn btn-dark  ' onClick={Peticion}>save</button></div>
        </form>
      </div>
    )
  }
}
