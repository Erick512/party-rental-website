import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className='wrapper'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Layout