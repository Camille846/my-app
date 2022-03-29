import React, { useState } from 'react';
import Tasks from './Components/tasks';
import './App.css'

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
    }
  ]);
  return (
    <>
      <div className='container'>
        <Tasks />
      </div>
    </>
  )
}
export default App;