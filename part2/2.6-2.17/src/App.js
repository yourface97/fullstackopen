import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Persons from './components/Persons';
import Input from './components/Input';

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newFilter, setNewFilter] = useState('');

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

  const filterInput = (e) => {
    setNewFilter(e.target.value);
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
      name: 'Number: ',
      value: newPhone,
      func: phoneInput
    }
  ]
  
  return (
    <div> 
      <Header title="Phonebook" />
      <Input name="Filter: " value={newFilter} onChange={filterInput}/>
      <Header title="Add a new" />
      <Form inputs={inputs} onClick={addPerson} />
      <Header title="Numbers" />
      <Persons persons={persons} filter={newFilter}/>
    </div>
  );
}



export default App;
