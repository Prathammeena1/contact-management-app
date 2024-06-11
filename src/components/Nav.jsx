import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='h-full w-[20%] bg-white p-6 rounded-lg'>
        <NavLink to='/' className={(e)=> e.isActive ? 'text-xl font-bold': 'text-xl font-medium'}> <i className="ri-home-fill"></i>  Home</NavLink> <br />
        <NavLink to='/addContact' className={(e)=> e.isActive ? 'text-xl font-bold': 'text-xl font-medium'} >Add Contact</NavLink>
    </nav>
  )
}

export default Nav