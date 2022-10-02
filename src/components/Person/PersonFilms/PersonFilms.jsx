import React, { useEffect, useState } from 'react'
import { makeConcurrentRequest } from '@utils/network'
import PropTypes from 'prop-types'
import styles from './PersonFilms.module.css'

const PersonFilms = ({ films }) => {
  const [filmsNames, setFilmsName] = useState([])

  useEffect(() => {
    (async () => {
      const responce = await makeConcurrentRequest(films)
      responce.sort((a, b) => {
        if (a.episode_id < b.episode_id) {
          return -1
        }
        if (a.episode_id > b.episode_id) {
          return 1
        }
        return 0;
      })
      
      setFilmsName(responce)
    })()
  }, [])

  return (
    <div>
      <ul className={styles.list}>
        {filmsNames.map(({title, episode_id}) => 
          <li key={episode_id}>
            <span className={styles.episode}>Episode {episode_id}</span>
            <span className={styles.colon}> : </span>
            <span className={styles.title}>{title}</span>
          </li>
        )}
      </ul>
    </div>
  )
}

PersonFilms.propTypes = {
  films: PropTypes.array
}

export default PersonFilms
