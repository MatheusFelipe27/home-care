import React from 'react'
import './Login.scss'
import three from './../../assets/three.png'

const Login = () => {
  return (
    <>
        <div className='mainLogin'>
          <div className='logo'>
            <img className='logoImg' src={three} alt='3 estrelas' />
            <span className='owner'>Matheus</span>
            <span className='company'>Home Care</span>
          </div>
        </div>

        <div className='profileChoice'>
          <span>Selecione seu perfil abaixo para acessar a sua conta:</span>
          <div className='loginButton'>
            <button className='client'> Responsável</button>
            <button className='worker'> Profissional</button>
          </div>
        </div>
    </>
  )
}

export default Login