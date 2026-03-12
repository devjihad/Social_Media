import React from 'react'
import Leftbar from '../LeftSideBar/Leftbar'
import HomeContent from '../HomeContent/HomeContent'

const Home = () => {
  return (
    <div className='container flex gap-8 '>
      <Leftbar />
      <HomeContent/>
    </div>
  )
}

export default Home
