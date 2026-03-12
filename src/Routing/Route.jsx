import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../HomeComponent/Home/Home'

const Route = () => {
     const router = createBrowserRouter([
        {
            path:'/',
            element:<Home/>
        }
    ])
  return (
   
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default Route
