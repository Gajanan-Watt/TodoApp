import './App.css';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/actions';
import { Todos } from './components/todos';

const App = () => {
 
  return (
    <div className='App'>
      
      <Todos/>

    </div>
  );
}

export default App;
