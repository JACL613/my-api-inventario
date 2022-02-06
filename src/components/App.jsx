/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import React, { useState } from 'react'
import Notas from './Notas'
import NavMenu from './NavMenu'
import Create from './CreateNotes'
import Login from './FormLogin'

import Collapse from 'react-bootstrap/Collapse'
import Producto from './CreateProduct'

import './css/App.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function App (props) {
  const [openCP, setOpenCP] = useState(false)
  const [openTN, setOpenTN] = useState(false)
  const [openCN, setOpenCN] = useState(false)

  // eslint-disable-next-line camelcase
  const [_id, set_id] = useState('')
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')

  const FunctionCP = () => { setOpenCP(!openCP) }
  const FunctionCN = () => { setOpenCN(!openCN), openTN === true ? setOpenTN(!openTN) : setOpenCN(!openCN) }
  const FunctionTN = () => { setOpenTN(!openTN), openCN === true ? setOpenCN(!openCN) : setOpenTN(!openTN) }

  return (
    <div id='App' className=' container-md px-0 bg-light  '>
      <NavMenu accionCP={FunctionCP} accionCN={FunctionCN} accionTN={FunctionTN} />
      <div id='body' className='container'>
        <Collapse in={openCN} dimension='width'>
          <div id='create-notes'>

            <Create setOpencn={() => setOpenCN(true)} setTitulo={setTitle} setDescripcion={setDescription} titulo={title} descripcion={description} setID={set_id} ID={_id} accionTN={FunctionTN} funcion={() => setOpenCN(false)} />
          </div>
        </Collapse>

        <Collapse in={openTN} dimension='width'>

          <div id='table-notes' className='z-index my-3 scroll'>
            <Notas setTitulo={setTitle} setDescripcion={setDescription} setID={set_id} ID={_id} paramet={openTN} funcion={() => setOpenTN(!openTN)} action={FunctionCN} />
          </div>
        </Collapse>

        <div id='create-product' className='container'>
          <Collapse in={openCP} dimension='width'>
            <div>
              <Producto handleClose={() => setOpenCP(!openCP)} />
            </div>
          </Collapse>
        </div>
        <div>
          <Login />
        </div>

      </div>

    </div>
  )
}
