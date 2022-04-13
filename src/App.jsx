import React, { useState } from 'react';
import Tasks from './Components/tasks';
import AddTask from './Components/AddTask';
import './App.css';

const App = () =>{
  const [tasks, setTasks] = useState([
    {
      id:'1',
      title: 'Aprender React',
      completed: false,
    },
    {
      id:'2',
      title: 'Ler livro',
      completed: true,
    },
    {
      id:'3',
      title: 'Praticar yoga',
      completed: false,
    },
    {
      id:'4',
      title: 'Tomar chá',
      completed: false,
    },
    {
      id:'5',
      title: 'Dormir',
      completed: false,
    },
    {
      id:'6',
      title: 'Ir no cabeleireiro',
      completed: false,
    },
    {
      id:'7',
      title: 'Ir no esteticista',
      completed: false,
    },
    {
      id:'8',
      title: 'Ir para a balada',
      completed: false,
    },
    {
      id:'9',
      title: 'Chamar o motorista',
      completed: false,
    },
    {
      id:'10',
      title: 'Final de semana, ir para a casa de praia',
      completed: false,
    }
  ]);
  return (
    <>
      <div className='container'>
        <AddTask />
        <Tasks  tasks = {tasks} />
      </div>
    </>
  )
}
export default App;
