import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className=""><Link to="/">Home</Link></li>
          <li className=""><Link to="/people">People</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header
