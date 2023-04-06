import React from 'react';
import { AppUI } from './AppUI';



function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1') 
  
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorage)
  }
  
  
  const [todos, setTodos] = React.useState(parsedTodos)
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

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    
    if (!newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = true;
    } else {
      newTodos[todoIndex].completed = false;
    }    
    
    setTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    // el metodo splice nos pide donde empezar a hacer pop y cuantos elementos eliminará
    setTodos(newTodos);
  }
  
  return (
    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    SearchValue={SearchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodos={completeTodos}
    deleteTodos={deleteTodos}
    />
  );
}

export default App;
