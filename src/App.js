import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter.js'
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  { text: 'Cortar cebolla', completed: false}, 
  { text: 'Terminar este curso', completed: false}, 
];


function App() {
  return (
    <React.Fragment>
      <TodoCounter/>

      <TodoSearch/>
      <input placeholder='cebolla'/>
      <TodoList>
        {todos.map( todo => (
          <TodoItem key={todo.text} text={todo.text } />
          ) )} 
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}

export default App;
