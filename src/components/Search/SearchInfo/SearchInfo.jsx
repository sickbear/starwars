import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './SearchInfo.module.css'

const SearchInfo = ({ people }) => (
  <>
    {people.length 
      ? (
        <ul className={styles.wrapper}>
          {people.map(({ id, name, img }) => 
            <li key={id} className={styles.item}>
              <Link to={`/people/${id}`}>
                <img className={styles.img} src={img} alt={name} />
                <p className={styles.name}>{name}</p>
              </Link>
            </li>
          )}
        </ul>
      )
      : <h3 className={styles.info}>No Results</h3>

    }
  </>
)

SearchInfo.propTypes = {
  people: PropTypes.array
}

export default SearchInfo