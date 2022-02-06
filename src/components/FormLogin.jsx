import React from 'react'

export default function FormLogin (props) {
  return (
    <div className='container  card sombra-cards mt-4 py-2' style={{ maxWidth: '50%' }}>
      <div className='card-header text-center'>
        <button className='btn btn-danger float-start'>
          <span className='bi bi-backspace-fill' />
        </button>
        <h2>Login</h2>
      </div>
      <form className='text-center'>
        <div className='card-body'>
          <div className='form-floating mb-3'>
            <input type='text' name='nameUser' className='form-control' id='nameUserInput' placeholder='Nombre de usuario' />
            <label for='nameUserInput'>Nombre de usuario:</label>
          </div>
          <div className='form-floating mb-3'>
            <input type='password' name='password' className='form-control' id='passwordInput' />
            <label for='passwordInput'>Contraseña:</label>
          </div>
        </div>
        <div className='card-footer'>
          <button type='submit' className='btn btn-danger'>
            enviar
          </button>
        </div>
      </form>

    </div>
  )
}
