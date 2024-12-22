import React, { useContext, useEffect, useState} from 'react'
import "./contact-area.css"
import { collection, getDocs, doc } from "firebase/firestore"
import { db } from "../config/firebase.js";
import Contact_card from './contact-card.jsx';
import Modal from "./Modal";
import { ModalContext } from './modalcontext.jsx';

const Contacts_area = () => {

  const [clist, setclist] = useState([{ name: "sampleName", id: "01" }]);
  const {isOpen, setIsOpen} = useContext(ModalContext);

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
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchdata();
  }, [])


  return (
    <div>
    <div className="h-screen w-full flex justify-center">
      <div className="hello flex flex-col mx-auto h-full w-full md:w-11/12">
        {/* map from here */}
        {clist.map(list => {
          return (
            <Contact_card list={list} key={list.id} />
          )
        })}
        {/* this is the end of contact div */}
      </div>
    </div>
    {/* /* this is Modal area */}

    
      <Modal/>

  </div>
  )
}

export default Contacts_area



















// import React, { useEffect, useState } from 'react';
// import './contact-area.css';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../config/firebase.js';
// import Contact_card from './contact-card.jsx';
// import Modal from './Modal';
// import { ModalContext } from './modalcontext.jsx';

// const Contacts_area = () => {
//   const [clist, setclist] = useState([{ name: 'sampleName', id: '01' }]);
//   const [isOpen, setIsOpen] = useState(true);

//   const fetchdata = async () => {
//     try {
//       const contactref = collection(db, 'contacts');
//       const contactsnap = await getDocs(contactref);
//       const contactlist = contactsnap.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setclist(contactlist);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   return (
//     <ModalContext.Provider value={{ isOpen, setIsOpen }}>
//       <div>
//         <div className="h-screen w-full flex justify-center">
//           <div className="hello flex flex-col mx-auto h-full w-full md:w-11/12">
//             {clist.map(list => (
//               <Contact_card list={list} key={list.id} />
//             ))}
//           </div>
//         </div>
//         {isOpen && <Modal />}
//       </div>
//     </ModalContext.Provider>
//   );
// };

// export default Contacts_area;