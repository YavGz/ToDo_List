import React from "react";

// import './App.css';
import './index.css';
import { TodoCounter } from '../TodoCounter/index.js'
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from "../TodoLoading";
// import { ReactuseState } from 'react';


function AppUI({
  // props de componentes
  loading,
  error,
  totalTodos,
  completedTodos,
  SearchValue,  
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
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
        {/* reenderizado de Array con sus metodos y propiedades */}
        {/* cada elemento del array debe tener una key unica */}
        {loading && <TodoLoading/>}
        {error && <p className="error">Ha ocurrido un error! Recarga la pagina</p>}
        {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO!</p> }
        {searchedTodos.map( todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
          ) )} 
      </TodoList>
      <CreateTodoButton/>

    </React.Fragment>
  );
};
export { AppUI }