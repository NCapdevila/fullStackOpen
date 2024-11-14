import Person from "./Person"

const PersonsToShow = ({newFilter, persons}) =>{

    const personsToShow = newFilter ? persons.filter(person => person.name.toLowerCase() === newFilter.toLowerCase()) : persons
        return(
            <>
            {personsToShow.map(person => (
                <div key={person.id}>
                    <Person person={person}/>
                </div>))}
            </>
        )
}

export default PersonsToShow