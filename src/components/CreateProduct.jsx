/* eslint-disable no-undef */
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function CreateProduct (props) {
  const [productUrl, setProductUrl] = useState()
  // const previewProducto = () => {
  //   return(
  //     <div className='card'>
  //       <img src={value1} className='card-img-top' />
  //       <div className='card-header'>
  //           <h4 >Producto Nuevo</h4>
  //       </div>
  //       <div className='card-body'>
  //           <h5 className='card-title'>Descripcion del Producto: </h5>
  //           <p className='card-text'>{}</p>
  //       </div>

  //     </div>
  //   )
  // }
  const evaluar = () => {
    const imagen = document.getElementById('input_imagen')
    const select = document.getElementById('input_select')
    const marca = document.getElementById('input_marca')
    const precio = document.getElementById('input_precio')
    const descripcion = document.getElementById('input_descripcion')
    const venta = document.getElementById('input_venta')
    const disponible = document.getElementById('input_disponibles')
    if (!imagen || !select || !marca || !precio || !descripcion || !venta || !disponible) {
      return false
    } else {
      return true
    }
  }
  const EventChangeFile = (e) => {
    const file = document.getElementById('input_imagen')
    const img = document.getElementById('img_view')
    const icon = document.getElementById('icon-sello')
    file.addEventListener('change', (e) => {
      console.log(e.target.name)
      const archivo = file.files[0]
      const ruta = URL.createObjectURL(archivo)
      console.log(archivo)
      console.log(ruta)
      img.src = ruta
      img.style.display = 'block'
      icon.style.display = 'none'
      document.getElementById('img_name').innerHTML = archivo.name
      setProductUrl(ruta)
      console.log('url ; ', productUrl)
    })
  }
  const resetForm = () => {
    const img = document.getElementById('img_view')
    const icon = document.getElementById('icon-sello')

    document.getElementById('input_imagen').value = ''
    document.getElementById('input_select').value = 'Selecciona una Categoria'
    document.getElementById('input_marca').value = ''
    document.getElementById('input_precio').value = ''
    document.getElementById('input_descripcion').value = ''
    document.getElementById('input_venta').value = 0
    document.getElementById('input_disponibles').value = ''

    document.getElementById('img_name').innerHTML = 'Escoge una Imagen'
    icon.style.display = 'block'
    img.style.display = 'none'
  }
  const enviarFormulario = (event) => {
    const $form = document.querySelector('#my-form-data')

    $form.addEventListener('submit', (e) => {
      console.log('estos son los inputs ')
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      fetch('/queryProducto', {
        method: 'POST',
        body: formData

      }).then(res => res.json())
        .catch(error => console.log(error.message))
        .then(res => {
          Swal.fire({
            title: 'Acepted: Save',
            text: 'Se Guardo el producto'
          })
          console.log(res)
        })
      resetForm()
    })
  }

  const EventChangeForm = (e) => {
    evaluar()
    if (evaluar === true) {
      enviarFormulario()
    } else {
      console.log('Error reller el formulario')
    }
    e.preventDefault()
  }

  return (
    <div className='card sombra-cards mt-4' style={{ maxWidth: 500 }}>
      <div className='card-header text-left'>
        <button onClick={props.handleClose} className='btn btn-danger '>
          <span className='bi bi-backspace-fill' />
        </button>
        <div className='mx-2'>
          <h2>Create new product</h2>
        </div>
      </div>
      <div className='card-body'>
        <form onKeyDown={EventChangeForm} onSubmit={EventChangeForm} id='my-form-data' className='card text-center' method='post' enctype='multipart/form-data'>

          <img id='img_view' className='card-img-top' alt='' />
          <label for='input_imagen'>
            <span className='bi bi-card-image' id='icon-sello' />
            <h3 id='img_name'>Escoge una Imagen</h3>
          </label>
          <input onClick={EventChangeFile} type='file' className='form-control my-2' placeholder='Seleccione una imagen' name='imagen' id='input_imagen' />
          <div className='input-group flex-nowrap my-2'>

            <select name='categoria' id='input_select' className='form-select'>
              <option selected>Selecciona una categoria</option>
              <option value='Electrodomesticos'>Electrodomesticos</option>
              <option value='Ropa'>Ropa</option>
              <option value='Veiculos y Accesorios'>Veiculos y Accesorios</option>
            </select>

          </div>

          <div className='form-floating mb-3'>
            <input type='number' name='precio' className='form-control' id='input_precio' placeholder='$100' />
            <label for='PrecioInput'>Precio Producto:</label>
          </div>

          <div className='form-floating mb-3'>
            <input type='text' name='marca' className='form-control' id='input_marca' placeholder='Generic' />
            <label for='marcaInput'>Marca del Producto:</label>
          </div>
          <div className='form-floating mb-3'>
            <textarea style={{ maxHeight: 100, minHeight: 100 }} className='form-control' name='descripcion' id='input_descripcion' placeholder='Descripcion del producto' />
            <label for='descripcionInput'>Descripcion del producto:</label>
          </div>
          <div className='form-floating mb-3'>
            <input type='Number' className='form-control' name='venta' id='input_venta' defaultValue='0' />
            <label for='ventaInput'>Ventas de producto:</label>
          </div>
          <div className='form-floating mb-3'>
            <input type='Number' className='form-control' name='disponibles' id='input_disponibles' placeholder='0' />
            <label for='disponiblesInput'>Cantidad de producto disponibles:</label>
          </div>

          <button type='submit' onClick={enviarFormulario} className='btn btn-dark'>Create Producto</button>
        </form>
      </div>
    </div>
  )
}
