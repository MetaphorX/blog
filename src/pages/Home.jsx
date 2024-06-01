import React from 'react'
import Banner from '../components/Banner'
import Hot from '../components/Hot'
import Trending from '../components/Trending'
import All from '../components/All'

const Home = () => {
  return (
    <>
        <Banner/>
        <Hot />
        <Trending />
        <All/>
    </>
  )
}

export default Home