import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Form from './components/Form';
import Persons from './components/Persons';
import Input from './components/Input';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((res) => {
        setPersons(res.data);
        console.log(res.data);
      })
  },[])

  const addPerson = (e) => {
    e.preventDefault();
    
    const newPersonObject = {
      name: newName,
      number: newPhone,
      id: persons.length+1
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
