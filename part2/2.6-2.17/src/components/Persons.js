import Person from "./Person";
import peopleService from "../services/people"

const Persons = ({persons, filter, setPersons}) => {

  const deleteNum = (id, name) => {
    if(window.confirm(`Delete ${name}?`) === true){
      const personsLeft = persons.filter(person => person.id !== id)

      peopleService
        .remove(id)
        .then(() =>
          setPersons(personsLeft)
        )
    }
  }

  return(
    <>
      {persons
        .filter(person => {
          return filter.length > 0 ? 
            person.name.toUpperCase().substr(0,filter.length) === filter.toUpperCase() :
            person;
        })
        .map(person => <Person key={person.name} person={person} deleteNum={() => deleteNum(person.id, person.name)}/>)
      }
    </>
  )
}

export default Persons;