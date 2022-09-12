import React from 'react'
import { Link } from 'react-router-dom'
import Favorite from '@components/Favorite'
import styles from './Header.module.css'

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className=""><Link to="/">Home</Link></li>
          <li className=""><Link to="/people?page=1">People</Link></li>
        </ul>
        <Favorite />
      </div>
    </>
  )
}

export default Header
