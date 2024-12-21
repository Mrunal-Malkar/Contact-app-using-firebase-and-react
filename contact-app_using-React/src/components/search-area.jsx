import React, {useContext} from 'react'
import "./search-area.css"
import { ModalContext } from './modalcontext'

const Search_area = () => {

  const {isOpen,setIsOpen}=useContext(ModalContext);


  return (
    <div className='mt-8 m-5 h-14 flex justify-between align-middle'>
        <div className='h-full w-full md:w-11/12 flex justify-center align-middle'>
            <i class="fa-solid fa-magnifying-glass h-min text-xl mglass text-white"></i>
            <input type="text"placeholder='search contacts' className='ps-10 w-full border-white rounded-xl border-2 bg-gray-700 text-white'/>
        </div>      
        <div className='h-full w-1/12 flex justify-center align-middle rounded-3xl bg-white ms-2'>
        <i onClick={()=>{setIsOpen(true)}} class="fa-solid fa-plus text-3xl m-auto"></i>
        </div>      
    </div>
  )
}

export default Search_area
