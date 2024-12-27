import React, { useContext, useEffect, useRef } from 'react'
import "./search-area.css"
import { ModalContext } from './modalcontext'

const Search_area = () => {

  const { setIsOpen } = useContext(ModalContext);
  const {input,setInput } = useContext(ModalContext);

  const searchbar = useRef();

  const show = () => {
    if (searchbar.current.value != 0) {
      const userinput = searchbar.current.value;
      setInput(userinput);
    }
    else{
      setInput("");
    }
  }

  return (
    <div className='mt-8 m-5 h-14 flex justify-between align-middle xl:w-2/4 xl:mx-auto'>
      <div className='h-full w-11/12 md:w-11/12 flex justify-center align-middle'>
        <i class="fa-solid fa-magnifying-glass h-min text-xl mglass text-white"></i>
        <input type="text" placeholder='search contacts' ref={searchbar} onChange={() => { show() }} className='ps-10 w-full border-white rounded-xl border-2 bg-gray-700 text-white' />
      </div>
      <div className='h-full w-1/12 flex justify-center align-middle rounded-3xl bg-white ms-2'>
        <i onClick={() => { setIsOpen(true) }} class="fa-solid fa-plus text-3xl m-auto"></i>
      </div>
    </div>
  )
}

export default Search_area