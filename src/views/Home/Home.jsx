import React from 'react'
import ChooseSide from '@components/Home/ChooseSide'
import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <h1 className="title">Choose your side</h1>
      <ChooseSide />
    </>
  )
}

export default Home