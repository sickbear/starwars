import React from 'react'
import PropTypes from 'prop-types'
import styles from './PersonPhoto.module.css'

const PersonPhoto = ({ photo, name }) => {
  return (
    <>
      <img src={photo} alt={name} />
    </>
  )
}

PersonPhoto.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
}

export default PersonPhoto