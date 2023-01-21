const Person = ({person, deleteNum}) => {
    return(
      <>
      {person.name}: {person.number}
      <button onClick={deleteNum}>Delete</button><br />
      </>
    )
}

export default Person;