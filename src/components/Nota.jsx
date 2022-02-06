/* eslint-disable no-undef */
import React from 'react'
import Swal from 'sweetalert2'

export default function Nota (props) {
  const actualizar = (id, title) => {
    Swal.fire({
      title: 'warning: Update',
      text: `Se Editara la nota: ${title}`,
      icon: 'warning',
      showCancelButton: 'true',
      cancelButtonText: 'Cancelar'
    }).then(res => {
      if (res.value) {
        fetch(`/queryNotes/${id}`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .catch(err => console.log('Error: ' + err))
          .then(res => res.json(res))
          .then(res => {
            console.log(res[0])
            props.setT(res[0].Title)
            props.setD(res[0].Body)
          })
        props.set_ID(id)
        props.accion()
        props.clear()
      }
    })
    console.log('Editando la nota ', id)
  }

  const borrar = (id, title) => {
    Swal.fire({
      title: 'warning: Delete',
      text: `Se borro la nota: ${title}`,
      icon: 'warning',
      showCancelButton: 'true',
      cancelButtonText: 'Cancelar'
    }).then(res => {
      if (res.value) {
        fetch(`/queryNote/${id}`, {
          method: 'DELETE',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json(res))
          .then(res => props._setNotas(res))
      }
    })

    console.log('Borrando la nota ', id)
  }
  return (
    <tr className='row'>

      <td className='col-4  border d-flex justify-content-center'>
        {props.di}
      </td>
      <td className='col-4 border d-flex justify-content-center'>
        undefined
      </td>

      <td className='col-4 border d-flex justify-content-center'>
        {props.title}
      </td>

      <td className='col-6 border d-flex '>
        {props.body}
      </td>
      <td className='col-6 border p-1 d-flex '>
        <div className='container'><button onClick={() => { actualizar(props.di, props.title) }} className=' btn btn-primary'><span className='bi bi-pencil' /></button></div>
        <div className='container'><button onClick={() => { borrar(props.di, props.title) }} className=' btn btn-danger'><span className='bi bi-trash' /></button></div>
      </td>

    </tr>
  )
}
