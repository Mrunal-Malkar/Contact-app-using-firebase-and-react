import React from 'react'

const Contact_card = ({list}) => {
  return (
    <div className="w-11/12 h-1/6 mt-4 bg-[#FFEAAE] rounded-lg flex self-center">
    <div className='h-full border-l-indigo-700 w-2/12 flex justify-center align-middle' >
      <i class="fa-regular fa-address-book text-6xl text-orange-600 inline self-center"></i>
    </div>
    <div className='h-full ms-2 bg-[#FFEAAE] w-7/12 flex align-middle justify-start'>
      <div className='flex align-middle justify-center flex-col'>
        <h1 className='text-3xl'>{list.name}</h1>
        <p className='text-xl'>{list.email}</p>
      </div>
    </div>
    <div className='h-full bg-[#FFEAAE] w-3/12 flex align-middle justify-center'>
      <div className='flex align-middle justify-between w-2/3'>
        <i class="fa-regular fa-pen-to-square md:text-4xl self-center text-3xl"></i>
        <i class="fa-solid fa-trash md:text-4xl self-center text-blue-700 text-3xl"></i>
      </div>
    </div>
  </div>
  )
}

export default Contact_card
