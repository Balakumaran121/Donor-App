import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center space-y-10'>
        <h3 className='text-3xl font-bold'>Page Not Found</h3>
        <Link to="/"  className='text-2xl font-semibold'>Go to Home</Link>
    </div>
  )
}

export default PageNotFound