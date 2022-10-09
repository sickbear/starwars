import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Favorite from '@components/Favorite'
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider'
import imgDroid from './img/droid.svg'
import imgLightsaber from './img/lightsaber.svg'
import imgSpaceStation from './img/space-station.svg'
import styles from './Header.module.css'

const Header = () => {
  const [icon, setIcon] = useState(imgDroid)
  const isTheme = useTheme()

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightsaber)
        break;
      case THEME_DARK:
        setIcon(imgSpaceStation)
        break;
      case THEME_NEITRAL:
        setIcon(imgDroid)
        break;
      default:
        break;
    }
  }, [isTheme])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <img className={styles.logo} src={icon} alt="Star Wars" />
          <ul className={styles.list}>
            <li>
              <NavLink to="/" className={styles.link}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/people?page=1" className={styles.link}>People</NavLink>
            </li>
            <li>
              <NavLink to="/search" className={styles.link}>Search</NavLink>
            </li>
          </ul>
        </div>
        <Favorite />
      </div>
    </>
  )
}

export default Header
