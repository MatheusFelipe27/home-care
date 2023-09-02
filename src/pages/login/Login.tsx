import React from 'react'
import './Login.scss'
import three from './../../assets/three.png'
import { Link } from 'react-router-dom'

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
            <Link to = '/home'>  <button className='client'> Responsável</button></Link> 
            <Link to= '/home'> <button className='worker'> Profissional</button></Link> 
          </div>
        </div>
    </>
  )
}

export default Login