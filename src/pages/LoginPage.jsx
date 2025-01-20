import React from 'react'
import {LoginForm ,Footer} from '../components/index.component'

const LoginPage = () => {
  localStorage.removeItem('token')
  return (
    <>
        <LoginForm/>
        <Footer/>
    </>
  )
}

export default LoginPage