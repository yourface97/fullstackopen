import { useEffect, useState } from 'react';
import peopleService from './services/people'
import Header from './components/Header';
import Form from './components/Form';
import Persons from './components/Persons';
import Input from './components/Input';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    peopleService
      .getAll()
      .then(initialPeople => setPersons(initialPeople));
  },[])

  const addPerson = (e) => {
    e.preventDefault();
    
    const newPersonObject = {
      name: newName,
      number: newPhone,
    }

    if(persons.map(person => person.name).includes(newName)){
      const personExists = persons.find(person => person.name === newName);
      if(personExists.number === newPhone){
        alert(`${newName} is already in the phonebook with number ${newPhone}`);
        setNewPhone('');
      }
      else{
        if(window.confirm(`Change ${newName}'s number to: ${newPhone}?`)){
          const updatedPersonExists = {...personExists, number: newPhone}
          peopleService
            .update(personExists.id, updatedPersonExists)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.name !== returnedPerson.name ? person : returnedPerson))
              setNewName('')
              setNewPhone('')
            })
        }
      }
    }
    else{
      peopleService
        .create(newPersonObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewPhone('');
        })
    }
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
      <Persons persons={persons} filter={newFilter} setPersons={setPersons}/>
    </div>
  );
}

export default App;
