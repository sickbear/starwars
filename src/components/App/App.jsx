import React from 'react'
import Header from '@components/Header'
import RouterView from '@src/routes'
import styles from './App.module.css'

const App = () => {
  return (
    <>
      <Header />
      <RouterView />
    </>
  )
}

export default App
