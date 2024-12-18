import React, { useEffect, useState } from 'react'
import "./contact-area.css"
import { collection, getDocs, doc } from "firebase/firestore"
import { db } from "../config/firebase.js";


const Contacts_area = () => {

  const [clist, setclist] = useState([{ name: "sampleName", id: "01" }]);


  const fetchdata = async () => {
    try {
      const contactref = await collection(db, "contacts");
      const contactsnap = await getDocs(contactref);
      const contactlist = await contactsnap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }
      )
      setclist(contactlist)
      // console.log("this is flist",flist)
      console.log("this is contactlist", contactlist);
      console.log("this is clist", clist);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchdata();
  }, [])


  return (
    <div className="h-screen w-full flex justify-center">
      <div className="bg-white hello flex flex-col mx-auto h-full w-11/12">
        {/* map from here */}
        {clist.map(list => {
          return(
          <div className="w-11/12 h-1/6 mt-3 bg-[#FFEAAE] rounded-lg flex self-center">
            <div className='h-full border-l-indigo-700 w-2/12 flex justify-center align-middle' >
              <i class="fa-regular fa-address-book text-6xl text-orange-600 inline self-center"></i>
            </div>
            <div className='h-full ms-2 bg-[#FFEAAE] w-7/12 flex align-middle justify-start'>
              <div className='flex align-middle justify-center flex-col'>
                <h1 className='text-3xl'>{list.name}</h1>
                {console.log(list)}
                {console.log(list.name)}
                {console.log(list.id)}
                {console.log(list.email)}
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
        )})}
        {/* this is the end of contact div */}
      </div>
    </div>
  )
}

export default Contacts_area
