import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import PersonInfo from '@components/Person/PersonInfo'
import PersonPhoto from '@components/Person/PersonPhoto'
import { useParams } from 'react-router-dom';
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResource } from '@utils/network'
import { API_PERSON } from '@constants/api'
import { getPeopleImage } from '@services/getPeopleData'
import styles from './Person.module.css'

const Person = ({ setErrorApi }) => {
  const { id } = useParams()
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)

  useEffect(() => {
    (async () => {
      const data = await getApiResource(`${API_PERSON}/${id}/`)
      
      if (data) {
        setPersonInfo([
          {title: 'Height', data: data.height},
          {title: 'Mass', data: data.mass},
          {title: 'Gender', data: data.gender},
          {title: 'Birth Year', data: data.birth_year},
        ])
        setPersonName(data.name)
        setPersonPhoto(getPeopleImage(id))
        setErrorApi(false)
      } else {
        setErrorApi(true)
      }
    })()
  }, [])

  return (
    <>
      <div>
        <h1>{personName}</h1>
        <PersonPhoto
          photo={personPhoto}
          name={personName} />
        {personInfo && <PersonInfo info={personInfo} />}
      </div>
    </>
  )
}

Person.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(Person)