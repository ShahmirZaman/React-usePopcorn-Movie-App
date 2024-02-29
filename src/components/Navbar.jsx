import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 bg-[#5a37d1] rounded-lg'>
      <div className='text-3xl font-medium text-white'>
        <h1>🍿 usePopcorn</h1>
      </div>
      <div className='w-[400px]'>
        <input 
        className='p-2 w-full rounded-lg bg-[#6e45f1] text-white placeholder:text-white'
        type='text' 
        placeholder='Search movies...'
        
        />
      </div>
      <div className='text-md text-white font-normal'>
        <p>Found 9 top results</p>
      </div>
    </div>
  )
}
