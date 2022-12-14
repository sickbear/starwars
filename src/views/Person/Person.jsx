import React, { useEffect, useState, Suspense } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import PersonInfo from '@components/Person/PersonInfo'
import PersonPhoto from '@components/Person/PersonPhoto'
import PersonLinkBack from '@components/Person/PersonLinkBack'
import UiLoading from '@ui/UiLoading'
import { useParams } from 'react-router-dom'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResource } from '@utils/network'
import { API_PERSON } from '@constants/api'
import { getPeopleImage } from '@services/getPeopleData'
import styles from './Person.module.css'

const PersonFilms = React.lazy(() => import('@components/Person/PersonFilms'))

const Person = ({ setErrorApi }) => {
  const { id } = useParams()
  const [personId, setPersonId] = useState(null)
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setPersonFilms] = useState(null)
  const [personFavorite, setPersonFavorite] = useState(false)

  const storeData = useSelector(state => state.favoriteReducer)

  useEffect(() => {
    (async () => {
      const data = await getApiResource(`${API_PERSON}/${id}/`)

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

      setPersonId(id)
      
      if (data) {
        setPersonInfo([
          {title: 'Height', data: data.height},
          {title: 'Mass', data: data.mass},
          {title: 'Gender', data: data.gender},
          {title: 'Birth Year', data: data.birth_year},
        ])
        setPersonName(data.name)
        setPersonPhoto(getPeopleImage(id))

        data.films.length > 0 && setPersonFilms(data.films)

        setErrorApi(false)
      } else {
        setErrorApi(true)
      }
    })()
  }, [])

  return (
    <>
      <PersonLinkBack />
      <div>
        <h1 className="title">{personName}</h1>

        <div className={styles.wrapper}>
          <PersonPhoto
            id={personId}
            photo={personPhoto}
            name={personName}
            favorite={personFavorite}
            setFavorite={setPersonFavorite}
          />

          {personInfo && <PersonInfo info={personInfo} />}

          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms films={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  )
}

Person.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(Person)