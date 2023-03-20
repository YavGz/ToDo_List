import React from 'react';
// import './App.css';
import './index.css';
import { TodoCounter } from './TodoCounter.js'
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import { ReactuseState } from 'react';



const defaultTodos = [
  { text: 'Cortar cebolla', completed: true}, 
  { text: 'Terminar esta clase', completed: true},
  { text: 'Terminar este curso', completed: false},
  { text: 'Aprender a tocar el piano', completed: false},
  { text: 'Montar una App para GTD', completed: false}
];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [SearchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = []

  if (!SearchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = SearchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  // const [counterValue , setCounterValue] = React.useState();
  
  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchValue={SearchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map( todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed} 
          />
          ) )} 
      </TodoList>
      <CreateTodoButton/>


    </React.Fragment>
  );
}

export default App;
