import React from "react";

// import './App.css';
import './index.css';
import { TodoCounter } from '../TodoCounter/index.js'
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
// import { ReactuseState } from 'react';


function AppUI({
  totalTodos,
  completedTodos,
  SearchValue,
  setSearchValue,
  searchedTodos,
  completeTodos,
  deleteTodos,
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
        {searchedTodos.map( todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodos(todo.text)}
          onDelete={() => deleteTodos(todo.text)}
          />
          ) )} 
      </TodoList>
      <CreateTodoButton/>

    </React.Fragment>
  );
};
export { AppUI }