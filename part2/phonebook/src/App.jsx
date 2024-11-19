import { useState, useEffect } from "react"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import PersonsToShow from "./components/PersonsToShow"
import axios from 'axios'


function App() {
const [persons, setPersons]=useState([
  
])
const [newName, setNewName]=useState('')
const [newPhone, setNewPhone]=useState('')
const [newFilter, setNewFilter]=useState('')

useEffect(() => {
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('carga de datos ok');
      setPersons(response.data)
    })

}, [])


const handleNameChange = (event) => {
  setNewName(event.target.value)
}

const handlePhoneChange = (event) =>{
  setNewPhone(event.target.value)
}
const handleFilterChange = (event) => {
  setNewFilter(event.target.value)
}



  return (
    <>
      <h2>PhoneBook</h2>
      <Filter  newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h2>Add Name</h2>
      <PersonForm 
      persons={persons} 
      newName={newName} 
      newPhone={newPhone} 
      setNewName={setNewName} 
      setNewPhone={setNewPhone} 
      setPersons={setPersons}
      handleNameChange={handleNameChange}
      handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <PersonsToShow newFilter={newFilter} persons={persons}/>
    </>
  )
}

export default App
