import { useState } from "react"


function App() {
const [persons, setPersons]=useState([
  {name: 'Ramiro Capdevila',
   id: 1
  },
])
const [newName, setNewName]=useState('')  

const addName = (event) => {
  event.preventDefault()
  console.log('Clicked', event.target);
  const newPerson = {
    name : newName,
    id: persons.length + 1
  }
  setPersons(persons.concat(newPerson))
  setNewName('')


  
}
const handleNameChange = (event) => {
  setNewName(event.target.value)
}

  return (
    <>
      <h2>PhoneBook</h2>
      <form onSubmit={addName}>
        <div>
          Name : <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
    </>
  )
}

export default App
