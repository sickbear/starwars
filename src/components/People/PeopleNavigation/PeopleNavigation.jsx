import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({
  getResource,
  prev,
  next,
  counter
}) => {
  const handleChangeNext = () => getResource(next)
  const handleChangePrev = () => getResource(prev)

  return (
    <div>
      <Link to={`/people/?page=${counter - 1}`}>
        <button onClick={handleChangePrev} disabled={!prev}>Previous</button>
      </Link>
      <Link to={`/people/?page=${counter + 1}`}>
        <button onClick={handleChangeNext} disabled={!next}>Next</button>
      </Link>
    </div>
  )
}

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prev: PropTypes.string,
  next: PropTypes.string,
  counter: PropTypes.number,
}

export default PeopleNavigation