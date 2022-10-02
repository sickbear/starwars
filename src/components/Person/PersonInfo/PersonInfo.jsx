import React from 'react'
import PropTypes from 'prop-types'
import styles from './PersonInfo.module.css'

const PersonInfo = ({ info }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {info.map(({title, data}) => (
            data && (
              <li key={title}>
                <span>{title}:</span> {data}
              </li>
            )
          ))}
        </ul>
      </div>
    </>
  )
}

PersonInfo.propTypes = {
  info: PropTypes.array
}

export default PersonInfo
