import Person from "./Person";

const Persons = ({persons, filter}) => {
    return(
      <>
        {persons
          .filter(person => {
            return filter.length > 0 ? 
              person.name.toUpperCase().substr(0,filter.length) === filter.toUpperCase() :
              person;
          })
          .map(person => <Person key={person.name} person={person}/>)
        }
      </>
    )
}

export default Persons;