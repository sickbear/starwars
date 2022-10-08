import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider'
import imgLightSide from './img/light-side.jpg'
import imgDarkSide from './img/dark-side.jpg'
import imgNeitralSide from './img/falcon.jpg'
import styles from './ChooseSide.module.css'

const ChooseSideItem = ({classes, theme, text, img}) => {
  const isTheme = useTheme()
    
  return (
    <button 
      className={cn(styles.item, classes)} 
      onClick={() => isTheme.change(theme)}>
      <p className={styles.text}>{text}</p>
      <img className={styles.img} src={img} alt={text} />
    </button>
  )
}

ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
}

const items = [
  {
    classes: styles.light,
    theme: THEME_LIGHT,
    text: 'Light Side',
    img: imgLightSide
  },
  {
    classes: styles.dark,
    theme: THEME_DARK,
    text: 'Dark Side',
    img: imgDarkSide
  },
  {
    classes: styles.neitral,
    theme: THEME_NEITRAL,
    text: 'I\'m Han Solo',
    img: imgNeitralSide
  }
]

const ChooseSide = () => (
  <div className={styles.wrapper}>
    {items.map(({classes, theme, text, img}, i) => 
      <ChooseSideItem
        key={i}
        classes={classes}
        theme={theme}
        text={text}
        img={img}
      />
    )}
  </div>
)

export default ChooseSide