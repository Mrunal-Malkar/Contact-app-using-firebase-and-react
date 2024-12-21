// import React, { useState,useContext} from 'react'
// import { ModalContext } from './modalcontext';

// const Modal = () => {

//     const {isOpen,setIsOpen}=useContext(ModalContext);

//     return (
//             <div className='bg-white p-1 flex justify-start h-[300px] w-[700px] flex-col align-'>
//                 <div className='h-[20%] bg-gray-400'>Add new contact
//                 <button onClick={()=>{setIsOpen(false)}}>close?</button>
//                 </div>
//                 <div className='h-[60%] bg-yellow-300'>yoyo</div>
//                 <div className='h-[20%] bg-blue-300'>add</div>
//             </div>
//     )
// }

// export default Modal








import React, { useContext } from 'react';
import { ModalContext } from './modalcontext';

const Modal = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <div className="bg-white p-1 rounded-md flex justify-start h-[300px] w-5/6 md:max-w-max-[700px] flex-col">
      
      <div className="h-[20%] flex items-center justify-between px- border-b-2 border-b-gray-400">
        <h1 className='text-3xl w-[90%] font-bold'>Add new contact</h1>
        <div onClick={() => setIsOpen(false)} className='bg-red-500 px-2 rounded-md'><i class="fa-solid text-3xl fa-xmark"></i></div>
      </div>

      <div className="h-[60%] bg-white">
      <div className='flex flex-col gap-2 justify-start h-[100%]'>

        <div className='flex flex-col h-1/2'>
        <label for="name" className='self-center md:text-2xl font-semibold'>Name</label>
        <input placeholder='Enter your NAME' type="text" className=' ps-4 border-2 border-gray-400 bg-gray-100 w-[80%] self-center rounded-md h-[50%]' id="name"/>
        </div>
        <div className='flex flex-col h-1/2'>
          <label for="email" className='self-center md:text-2xl font-semibold'>Email</label>
          <input type="email" placeholder='Enter your Gmail' className='bg-gray-100 ps-4 border-2 border-gray-400  w-[80%] self-center rounded-md h-[50%]' id="email"/>
        </div>

      </div>
      </div>
      
      <div className="h-[20%]">
        <div className='flex justify-center h-full align-middle'>
          <button className='bg-gray-300 rounded-md align-middle h-full py-1 font-semibold px-4 text-blue-900 text-xl md:text-2xl'>Add</button>
        </div>
      </div>
    
    </div>
  );
};

export default Modal;
