import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {setPersonToFavorite, removePersonToFavorite } from '@store/actions'
import iconFavorite from './img/favorite.svg'
import iconFavoriteActive from './img/favorite-active.svg'
import styles from './PersonPhoto.module.css'

const PersonPhoto = ({ 
  id,
  photo, 
  name,
  favorite,
  setFavorite 
}) => {
  const dispatch = useDispatch()

  const dispatchFavoritePeople = () => {
    if (favorite) {
      dispatch(removePersonToFavorite(id))
      setFavorite(false)
    } else {
      dispatch(setPersonToFavorite({
        [id]: {
          name: name,
          img: photo
        }
      }))
      setFavorite(true)
    }
  }

  return (
    <>
      <div className={styles.img}>
        <img src={photo} alt={name} />
        <button className={styles.favorite} onClick={dispatchFavoritePeople}>
          {
            favorite ? 
              <img src={iconFavoriteActive} alt="Удалить из избранного" /> : 
              <img src={iconFavorite} alt="Добавить в избранное" />
          }
        </button>
      </div>
    </>
  )
}

PersonPhoto.propTypes = {
  id: PropTypes.string,
  photo: PropTypes.string,
  name: PropTypes.string,
  favorite: PropTypes.bool,
  setFavorite: PropTypes.func
}

export default PersonPhoto