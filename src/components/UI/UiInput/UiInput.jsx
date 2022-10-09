import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import icon from './img/cancel.svg'
import '../index.css';
import styles from './UiInput.module.css'

const UiInput = ({ 
  value,
  handleInputChange,
  placeholder,
  classes,
}) => (
  <div className={cn(styles.wrapper, classes)}>
    <input 
      text="text"
      value={value}
      onChange={(e) => handleInputChange(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
    />
    <img 
      onClick={() => value && handleInputChange('')}
      src={icon}
      className={cn(styles.clear, !value && styles.disabled)}
      alt="Clear"
    />
  </div>
)

UiInput.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
}

export default UiInput