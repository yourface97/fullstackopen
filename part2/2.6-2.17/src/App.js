import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas",
      phone: "330-432-1795" }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')  

  const addPerson = (e) => {
    e.preventDefault();
    
    const newPersonObject = {
      name: newName,
      phone: newPhone
    }

    persons.map(person => person.name).includes(newName) ? 
      alert(`${newPersonObject.name} is already added to the phonebook`) : 
      setPersons(persons.concat(newPersonObject));
    
    setNewName('');
    setNewPhone('');
  }

  const phoneInput = (e) => {
    setNewPhone(e.target.value);
    }

  const personInput = (e) => {
    setNewName(e.target.value);
  }

  const inputs = [
    {
      id: 1,
      name: 'Name: ',
      value: newName,
      func: personInput
    },
    {
      id: 2,
      name: 'Phone: ',
      value: newPhone,
      func: phoneInput
    }
  ]
  
  return (
    <div> 
      <Header title="Phonebook" />
      <Form inputs={inputs} onClick={addPerson} />
      <Header title="Numbers" />
      <Persons persons={persons} />
    </div>
  );
}

export default App;
