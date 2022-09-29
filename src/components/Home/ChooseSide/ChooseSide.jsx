import React from 'react'
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider'
import styles from './ChooseSide.module.css'

const ChooseSide = () => {
  const isTheme = useTheme()

  return (
    <>
      {isTheme.theme}
      <button onClick={() => isTheme.change(THEME_LIGHT)}>THEME_LIGHT</button>
      <button onClick={() => isTheme.change(THEME_DARK)}>THEME_DARK</button>
      <button onClick={() => isTheme.change(THEME_NEITRAL)}>THEME_NEITRAL</button>
    </>
  )
}

ChooseSide.propTypes = {
  
}

export default ChooseSide