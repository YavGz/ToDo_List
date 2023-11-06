import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
  
  const { totalTodos, completedTodos } = React.useContext(TodoContext)
  
  return (
    <React.Fragment>
      <h1 className="todoCounter_title">
        Bienvenido de vuelta, Usuario
        </h1>
      <h2 className="todoCounter">
        Has completado {completedTodos} de {totalTodos} Tareas
        </h2>
    </React.Fragment>
  );
};

export { TodoCounter };