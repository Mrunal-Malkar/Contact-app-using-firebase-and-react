import React, { useState } from 'react'
import './App.css'
import Upper_area from './components/upper_area'
import Search_area from './components/search-area'
import Contacts_area from './components/contacts-area'
import { ModalContext } from './components/modalcontext'



function App() {

  const [count, setCount] = useState(0)
  const [clist, setclist] = useState([{ name: "sampleName", id: "01" }]);
  const[isOpen,setIsOpen]=useState(false);
  const[input,setInput]=useState("");

  return (
    <>
  <ModalContext.Provider value={{isOpen,setIsOpen,clist,setclist,input,setInput}}>
  <Upper_area/>
  <Search_area/>
  <Contacts_area/>
  </ModalContext.Provider>
    </>
  )
}

export default App
