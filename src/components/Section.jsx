import React from 'react'

const Section =({children}) => {
  return (
    <div className='w-full flex justify-between' >
      {children}
    </div>
  )
}

export {Section}