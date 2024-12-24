import { collection, deleteDoc, doc } from 'firebase/firestore';
import React,{useContext, useState} from 'react'
import { db } from '../config/firebase';
import Modal_update from './modal-update';
import Modalupdatecontext from './modalupdateContext';

const Contact_card = ({ list }) => {
// let isEditOpen=false;

  const[isEditOpen,setIsEditOpen]=useState(false);

  const handleEdit = (list)=>{
    setIsEditOpen(true);
  }

  const handleDelete = async (id) => {
    try {
      const contactref = await doc(db, "contacts", id);
      await deleteDoc(contactref);
    } catch (error) {
      console.log(`document deleting error: ${error}`)
    }
  }
  
  return (
    
      <Modalupdatecontext.Provider value={{list,isEditOpen,setIsEditOpen}}>
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
          <i class="fa-regular fa-pen-to-square md:text-4xl self-center text-3xl" onClick={()=>{handleEdit(list)}}></i>
          <i class="fa-solid fa-trash md:text-4xl self-center text-blue-700 text-3xl" onClick={() => { handleDelete(list.id) }}></i>
        </div>
      </div>
      {isEditOpen && <Modal_update list={list} />}
    </div>
     </Modalupdatecontext.Provider>
  )
}

export default Contact_card
