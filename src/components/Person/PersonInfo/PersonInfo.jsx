import React from 'react'
import PropTypes from 'prop-types'
import styles from './PersonInfo.module.css'

const PersonInfo = ({ info }) => {
  return (
    <>
      <div>
        <ul>
          {info.map(({title, data}) => (
            data && (
              <li key={title}>
                <span>{title}: {data}</span>
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
