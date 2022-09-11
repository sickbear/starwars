import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import UiButton from '@ui/UiButton'
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
    <div className={styles.container}>
      <Link to={`/people/?page=${counter - 1}`}>
        <UiButton text="Previous" onClick={handleChangePrev} disabled={!prev} />
      </Link>
      <Link to={`/people/?page=${counter + 1}`}>
        <UiButton text="Next" onClick={handleChangeNext} disabled={!next} />
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