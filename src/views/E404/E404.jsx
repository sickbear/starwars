import React from 'react'
import { useLocation } from 'react-router'
import spaceship from './img/spaceship.png'
import styles from './E404.module.css'

const E404 = () => {
  const location = useLocation()

  return (
    <>
      <img src={spaceship} className={styles.img} alt="Error 404" />
      <h1 className={styles.h1}>404</h1>
      <p className={styles.info}>No match for {location.pathname}</p>
    </>
  )
}

export default E404