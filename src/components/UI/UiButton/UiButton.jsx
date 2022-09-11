import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import '../index.css';
import styles from './UiButton.module.css'

const UiButton = ({ 
  text, 
  onClick, 
  disabled, 
  theme='light',
  classes
}) => {
  return (
    <button 
      className={cn(styles.btn, styles[theme], classes)}
      onClick={onClick} 
      disabled={disabled}>
      {text}
    </button>
  )
}

UiButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  classes: PropTypes.string,
}

export default UiButton