import React from 'react'

const Header = () => {
  return (
    <div className='bg-emerald-800  flex items-center justify-between px-1 text-white'>
      <h1 className='text-2xl'>Rachit Jain</h1>
      <div className='flex gap-8 p-4'>
      <h3 >About</h3>
      <h3>Home</h3>
      <h3>Contact</h3>
      <h3>Projects</h3>
      
      </div>
    </div>
  )
}

export default Header
