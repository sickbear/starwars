import React, { useEffect, useState } from 'react'
import { makeConcurrentRequest } from '@utils/network'
import PropTypes from 'prop-types'
import styles from './PersonFilms.module.css'

const PersonFilms = ({ films }) => {
  const [filmsNames, setFilmsName] = useState([])

  useEffect(() => {
    (async () => {
      const responce = await makeConcurrentRequest(films)
      
      setFilmsName(responce)
    })()
  }, [])

  return (
    <div>
      <ul>
        {filmsNames.sort().map(({title, episode_id}) => 
          <li key={episode_id}>
            <span>Episode {episode_id}</span>
            <span> : </span>
            <span>{title}</span>
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
