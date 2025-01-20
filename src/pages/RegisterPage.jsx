import React from 'react'
import {RegisterForm ,Footer} from '../components/index.component'


const RegisterPage = () => {
  localStorage.removeItem('token')
  return (
    <>
        <RegisterForm/>
        <Footer/>
    </>
  )
}

export default RegisterPage