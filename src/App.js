import React from 'react';
import './App.css';
import './index.css';
import { TodoCounter } from './TodoCounter.js'
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  { text: 'Cortar cebolla', completed: false}, 
  { text: 'Terminar este curso', completed: false},
  { text: 'Aprender a tocar el piano', completed: false},
  { text: 'Montar una App para GTD', completed: false}
];


function App() {
  return (
    <React.Fragment>
      <TodoCounter/>

      <TodoSearch/>
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
