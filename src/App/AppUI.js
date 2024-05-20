import React from "react";

import './index.css';
import { TodoCounter } from '../TodoCounter/index.js'
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm'
import { TodoLoading } from "../TodoLoading";
import { Modal } from "../Modal/index.js";
import { TodoContext } from "../TodoContext";
// import { ReactuseState } from 'react';


function AppUI () {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    searchValue,
  } = React.useContext(TodoContext)

  // console.log(totalTodos);

  let someTodo = searchedTodos.map(todo => todo.text)

  return (
    <React.Fragment>
      
        <TodoCounter/>

        <TodoSearch/>

        <TodoList>
          {/* reenderizado de Array con sus metodos y propiedades */}
          {/* cada elemento del array debe tener una key unica */}
          {loading && <TodoLoading/>}
          {error && <p className="error">Ha ocurrido un error! Recarga la pagina</p>}
          {(!loading && !searchValue && totalTodos === 0) && 
            <p className="Anuncio">Crea tu primer TODO!</p>}
          
          
          {/* falta por crear funcionalidad de no match */}

          {console.log( someTodo)}
          
          {searchedTodos.map( todo => (
            <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
            ))
          }


        </TodoList>
        <CreateTodoButton setOpenModal= {setOpenModal} />
          
          { openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
          
    </React.Fragment>
  );
};
export { AppUI }