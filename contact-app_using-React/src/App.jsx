import { useState } from 'react'
import './App.css'
import Upper_area from './components/upper_area'
import Search_area from './components/search-area'
import Contacts_area from './components/contacts-area'
import { ModalContext } from './components/modalcontext'


function App() {
  const [count, setCount] = useState(0)
  const[isOpen,setIsOpen]=useState(true);
  return (
    <>
  <ModalContext.Provider value={{isOpen,setIsOpen}}>
  <Upper_area/>
  <Search_area/>
  <Contacts_area/>
  </ModalContext.Provider>
    </>
  )
}

export default App
