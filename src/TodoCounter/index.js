import React from "react";
import './TodoCounter.css';

function TodoCounter({total, completed}) {
  return (
    <React.Fragment>
      <h1 className="todoCounter_title">
        Bienvenido de vuelta, Usuario
        </h1>
      <h2 className="todoCounter">
        Has completado {completed} de {total} Tareas
        </h2>
    </React.Fragment>
  );
};

export { TodoCounter };