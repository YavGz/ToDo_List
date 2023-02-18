import React from "react";
import './TodoCounter.css';

function TodoCounter() {
  return (
    <React.Fragment>
      <h1 className="todoCounter_title">Bienvenido de vuelta, Usuario</h1>
      <h2 className="todoCounter">Has completado 2 de 3 TODOs</h2>
    </React.Fragment>
  );
};

export { TodoCounter };