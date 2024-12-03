import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    const navigate = useNavigate()
    const handleNotFound=()=>{
        navigate('/login')
    }
  return (
    <div className={styles.notFoundContainer} onClick={handleNotFound}>NotFoundPage</div>
  )
}

export default NotFoundPage