/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'

import Notass from './Nota'

import './CreateNotes'

import Spinner from 'react-bootstrap/Spinner'

export default function Notas (props) {
  const [notas, setNotas] = useState([])
  let intervalTimeout
  useEffect(() => {
    intervalTimeout = setTimeout(() => {
      fetch('/queryNotes')
        .then(res => res.json())
        .then(data => setNotas(data))
    }, 4000)
    addEventListener('change', () => intervalTimeout)
  }, [props.paramet])

  if (notas.length === 0) {
    return (
      <div className='container    mt-4'>
        <button className='btn btn-danger mx-1 my-1' onClick={props.funcion}> <span className='bi bi-x-circle' /></button>
        <Spinner
          animation='border' role='status'
        >
          <span className='visually-hidden'>Cargando....</span>
        </Spinner>
      </div>
    )
  } else {
    return (
      <div className='container' style={{ overflow: 'hidden' }}>
        <button type='submit' className='btn btn-danger btn-sm-primary   mx-1 my-1' onClick={props.funcion}> <span className='bi bi-x-circle' /></button>
        <table className='table col-12'>
          <div id='scroll' className='container-fluid overflow-auto'>
            <thead className='container-fluid'>
              <div className='container-fluid d-flex justify-content-center'>
                <tr className='row'>
                  <th className='col-12'>Tabla de Notas</th>
                </tr>

              </div>
              <div className=' container d-flex-fill'>
                <tr className='row'>
                  <th className=' col-4 border  d-flex justify-content-center col-md-bg-danger'>#</th>
                  <th className=' col-4 border d-flex bg-primary justify-content-center'>Usuario</th>
                  <th className=' col-4 border d-flex justify-content-center'>Titulo</th>
                  <th className=' col-6 border d-flex justify-content-center'>Notas</th>
                  <th className=' col-6 border d-flex '>Acciones</th>
                </tr>

              </div>
            </thead>
            <tbody className=''>

              {
              notas.map((nota) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className='container'>
                    <Notass
                      clear={() => clearTimeout(intervalTimeout)}
                      key={nota._id}
                      _setNotas={setNotas}
                      setT={props.setTitulo}
                      setD={props.setDescripcion}
                      set_ID={props.setID}
                      _ID={props.ID}
                      accion={props.action}
                      di={nota._id}
                      title={nota.Title}
                      body={nota.Body}
                    />
                  </div>
                )
              })
             }

            </tbody>
          </div>
        </table>

      </div>
    )
  }
}
