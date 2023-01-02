import React from 'react'
import { Banner } from './components/Banner'
import CardList from './components/CardList'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Carousel />
      <CardList />
    </>
  )
}

export default App
