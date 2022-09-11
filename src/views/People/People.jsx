import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import PeopleList from '@components/People/PeopleList'
import PeopleNavigation from '@components/People/PeopleNavigation'
import { getApiResource } from '@utils/network'
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData'
import { API_PEOPLE } from '@constants/api'
import { useQueryParams } from '@hooks/useQueryParams'
import styles from './People.module.css'

const People = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null)
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)
  const [counterPage, setCounterPage] = useState(1)

  const query = useQueryParams()
  const queryPage = query.get('page')


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
      setPrevPage(data.previous)
      setNextPage(data.next)
      setCounterPage(getPeoplePageId(url))
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE + queryPage)
  }, [])

  return (
    <>
      <PeopleNavigation 
        getResource={getResource}
        prev={prevPage}
        next={nextPage} 
        counter={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  )
}

PeopleList.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(People)
