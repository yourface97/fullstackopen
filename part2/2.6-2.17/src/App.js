import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" }
  ])

  const [newName, setNewName] = useState('')

  const addPerson = (e) => {
    e.preventDefault();
    
    const newPersonObject = {
      name: newName
    }

    persons.map(person => person.name).includes(newName) ? 
      alert(`${newPersonObject.name} is already added to the phonebook`) : 
      setPersons(persons.concat(newPersonObject));
    
    setNewName('');
  }

  const personInput = (e) => {
    setNewName(e.target.value);
  }

  return (
    <div> 
      <Header title="Phonebook" />
      <Form onChange={personInput} onClick={addPerson} value={newName}/>
      <Header title="Numbers" />
      <Persons persons={persons} />
    </div>
  );
}

export default App;
