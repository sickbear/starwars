import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PeopleList from '@components/People/PeopleList'
import styles from './Favorite.module.css'

const Favorite = () => {
  const [people, setPeople] = useState([])

  const storeData = useSelector(state => state.favoriteReducer)

  useEffect(() => {
    const arr = Object.entries(storeData)

    if (arr.length) {
      const res = arr.map(item => {
        return {
          id: item[0],
          ...item[1]
        }
      })

      setPeople(res)
    }
  }, [])

  return (
    <>
      <h1 className="title">Favorites</h1>
      {people.length > 0 ?
        <PeopleList people={people} /> :
        <p>No data</p>
      }
      
    </>
  )
}

export default Favorite