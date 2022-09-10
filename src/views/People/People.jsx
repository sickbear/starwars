import React, { useState, useEffect } from 'react'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResource } from '@utils/network'
import { API_PEOPLE } from '@constants/api'
import { getPeopleId, getPeopleImage } from '@services/getPeopleData'
import PeopleList from '@components/People/PeopleList'
import styles from './People.module.css'

const People = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null)

  const getResource = async (url) => {
    const data = await getApiResource(url)

    if (data) {
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
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
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

export default withErrorApi(People)
