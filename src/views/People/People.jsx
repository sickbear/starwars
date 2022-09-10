import { useState, useEffect } from 'react'
import { getApiResource } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData'
import PeopleList from '../../components/People/PeopleList'
import styles from './People.module.css'

const People = () => {
  const [people, setPeople] = useState(null)

  const getResource = async (url) => {
    const data = await getApiResource(url)
    const peopleList = data.results.map(({name, url}) => {
      const id = getPeopleId(url)
      const img = getPeopleImage(id)

      return {
        id,
        name,
        img
      }
    })

    setPeople(peopleList)
  }

  useEffect(() => {
    getResource(API_PEOPLE)
  }, [])

  return (
    <>
      {people && <PeopleList people={people} />}
    </>
  )
}

export default People
