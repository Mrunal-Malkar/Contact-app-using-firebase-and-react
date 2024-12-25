import React, { useContext, useEffect, useState,useRef} from 'react'
import "./contact-area.css"
import { collection, getDocs, doc } from "firebase/firestore"
import { db } from "../config/firebase.js";
import Contact_card from './contact-card.jsx';
import Modal from "./Modal";
import { ModalContext } from './modalcontext.jsx';
import { ToastContainer,toast} from 'react-toastify';
// import { searchbar } from './search-area.jsx';

const Contacts_area = () => {

  const [clist, setclist] = useState([{ name: "sampleName", id: "01" }]);
  const {isOpen, setIsOpen} = useContext(ModalContext);
  // const searchbar=useRef(ModalContext);

  const fetchdata = async () => {
    try {
      const contactref = await collection(db, "contacts");
      const contactsnap = await getDocs(contactref);
      // console.log(searchbar.current.value);
      const contactlist = await contactsnap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }
    )
      setclist(contactlist)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchdata();
  }, [clist])


  return (
    <div>
    <div className="h-screen w-full flex justify-center">
      <ToastContainer/>
      <div className="hello flex flex-col mx-auto h-full w-full md:w-11/12">
        {/* map from here */}
        {clist.length>0?(clist.map(list => {
          return (
            <Contact_card list={list} key={list.id} />
          )
        })):(
          <div className='flex self-center items-center justify-center h-[50%] w-full md:w-[25%] p-2'>
            <div className='m-auto ms-8 flex flex-row w-full h-2/6 justify-between'>
            <div className='w-1/4 h-full flex items-center justify-center text-6xl me-6 text-white'>
            <i class="fa-regular fa-user"></i>
            </div>
            <div className='w-3/4 h-full flex items-center justify-center text-orange-400 text-4xl'>
              <h2><span className='text-orange-600'>No</span> Contacts <span className='text-orange-600'>Found!</span></h2>
            </div>
            </div>
          </div>
        )}
        {/* this is the end of contact div */}
      </div>
    </div>
    {/* /* this is Modal area */}

    
      <Modal/>

  </div>
  )
}

export default Contacts_area