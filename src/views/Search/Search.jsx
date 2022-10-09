import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResource } from '@utils/network'
import { API_SEARCH } from '@constants/api'
import { getPeopleId, getPeopleImage } from '@services/getPeopleData'
import UiInput from '@ui/UiInput'
import SearchInfo from '@components/Search/SearchInfo'
import styles from './Search.module.css'


const Search = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('')
  const [people, setPeople] = useState([])

  const getResponse = async param => {
    const res = await getApiResource(API_SEARCH + param)

    if (res) {
      const peopleList = res.results.map(({ name, url}) => {
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
    getResponse('')
  }, [])

  const debouncedGetResponse = useCallback(
    debounce(value => getResponse(value), 500),
    []
  )
  
  const handleInputChange = value => {
    setInputSearchValue(value)
    debouncedGetResponse(value)
  }

  return (
    <>
      <h1 className="title">Search</h1>

      <UiInput 
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input character's name"
        classes={styles.search}
      />

      <SearchInfo people={people} />
    </>
  )
}

Search.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(Search)