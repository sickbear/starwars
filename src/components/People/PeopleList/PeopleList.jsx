import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './PeopleList.module.css'

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.container}>
      {people.map(({id, name, img}) => 
        <li className={styles.item} key={id}>
          <Link className={styles.link} to={`/people/${id}`}>
            <img className={styles.img} src={img} alt={name} />
            <p>{name}</p>
          </Link>
        </li>
      )}
    </ul>
  )
}

PeopleList.propTypes = {
  people: PropTypes.array
}

export default PeopleList
