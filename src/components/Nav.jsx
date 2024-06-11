import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='h-full w-[20%] bg-white p-6 rounded-lg'>
        <Link to='/'>Home</Link> <br />
        <Link to='/addContact'>Add Contact</Link>
    </nav>
  )
}

export default Nav