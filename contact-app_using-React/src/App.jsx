import { useState } from 'react'
import './App.css'
import Upper_area from './components/upper_area'
import Search_area from './components/search-area'
import Contacts_area from './components/contacts-area'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Upper_area/>
  <Search_area/>
  <Contacts_area/>
    </>
  )
}

export default App
