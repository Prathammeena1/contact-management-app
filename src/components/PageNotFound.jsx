import React from 'react'
import { useLocation } from 'react-router-dom'

const PageNotFound = () => {
    const {pathname} = useLocation()
  return (
    <div className='flex justify-center items-center w-full h-full text-center'>
        <div>
        <h1 className='text-[3vw]'>Page Not Found!</h1>
        <span>Requested URL <span className='text-blue-500 border-b border-blue-500'>{pathname}</span> not found.</span>
        </div>
    </div>
  )
}

export default PageNotFound