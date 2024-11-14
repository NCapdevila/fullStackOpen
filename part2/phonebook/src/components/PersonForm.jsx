const PersonForm = ({newName, newPhone, persons, setNewName, setNewPhone, setPersons, handleNameChange, handlePhoneChange}) =>{
    
    const addName = (event) => {
        event.preventDefault()
       
       
      
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

      
    
    return(
        <>
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
        </>
    )
}

export default PersonForm