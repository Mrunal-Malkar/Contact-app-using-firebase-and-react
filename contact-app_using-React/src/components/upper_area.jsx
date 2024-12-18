import React from 'react'
import "./upper_area.css"

const Upper_area = () => {
  return (
    <div className='w-full flex justify-center'>
    <div className='w-11/12 mt-3 rounded-xl bg-white h-24 flex justify-between align-middle'>
      <div className='firebaseimgholder self-center w-1/4 h-3/4'>
      </div>
      <div className='w-3/4 h-3/4 text-3xl md:text-5xl font-semibold pt-1 self-center flex align-middle mt-3 justify-start sm:text-4xl'>
      <p className='m-1 md:m-0'>Firebase Contact App</p>
      </div>
    </div>
    </div>
  )
}

export default Upper_area
