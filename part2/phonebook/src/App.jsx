import { useState } from "react"


function App() {
const [persons, setPersons]=useState([])
const [newName, setNewName]=useState('')
const [newPhone, setNewPhone]=useState('')
const [newFilter, setNewFilter]=useState('')

const addName = (event) => {
  event.preventDefault()
  console.log('Clicked', event.target);

  if(persons.some(person => person.name === newName)){
    alert(`${newName} is already added to phonebook`)
    return;
  }
  
  const newPerson = {
    name : newName,
    phone: newPhone,
    id: persons.length + 1
  }
  setPersons([...persons, newPerson])
  setNewName('')
  setNewPhone('')


  
}
const handleNameChange = (event) => {
  setNewName(event.target.value)
}

const handlePhoneChange = (event) =>{
  setNewPhone(event.target.value)
}

const handleFilterChange = (event) => {
  setNewFilter(event.target.value)
}

const personsToShow = newFilter ? persons.filter(person => person.name.toLowerCase() === newFilter.toLowerCase()) : persons

  return (
    <>
      <h2>PhoneBook</h2>
      <div>
        Filter Name : <input value={newFilter} onChange={handleFilterChange}/>
      </div>
      <h2>Add Name</h2>
      <form onSubmit={addName}>
        <div>
          Name : <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Phone : <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person => (
        <div key={person.id}>
          <p>{person.name} : {person.phone}</p>
        </div>))}
    </>
  )
}

export default App
