import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RouteMain = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default RouteMain
