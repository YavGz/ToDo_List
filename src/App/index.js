import React from 'react';
import { AppUI } from './AppUI';


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Terminar esta clase', completed: true},
//   { text: 'Terminar este curso', completed: false},
//   { text: 'Aprender a tocar el piano', completed: false},
//   { text: 'Montar una App para GTD', completed: false}
// ];

function useLocalStorage (itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName) 
    let parsedItem;
    
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem)
  } 
  
  const [item, setItem] = React.useState(parsedItem)
  
  function saveItem (newItem) {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ]
};

function App() {  

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
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
    
    saveTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    // el metodo splice nos pide donde empezar a hacer pop y cuantos elementos eliminará
    saveTodos(newTodos);
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
