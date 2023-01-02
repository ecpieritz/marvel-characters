import React from 'react'
import { Banner } from './components/Banner'
import CardList from './components/CardList'
import Carousel from './components/Carousel'
import Mastercad from './components/Mastercard'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Carousel />
      <CardList />
      <Mastercad />
      <Newsletter />
    </>
  )
}

export default App
