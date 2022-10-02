import React from 'react'
import iconLoader from './img/loader.svg'
import styles from './UiLoading.module.css'

const UiLoading = () => {
  return <img className={styles.loader} src={iconLoader} alt="Loading..." />
}

export default UiLoading