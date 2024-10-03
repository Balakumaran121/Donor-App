import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigatee from '../components/Navigate'

const Layout = () => {
  return (
    <div className="h-screen flex">
        <nav className='w-72 bg-slate-200 p-4'>
            <Navigatee/>
        </nav>
        <main className='flex-grow p-6 '>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout