import React from "react";
import './index.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const {
    // addTodo,
    setOpenModal,
  } = React.useContext(TodoContext)

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false);
  }


  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Escribe tu nuevo TODO</label>
        <textarea
          placeholder="Terminar de escribir un TODO"
        />
      </div>
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button--cancel TodoForm-button" type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="TodoForm-button--add TodoForm-button" 
          type="button"
          onClick={onSubmit}
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }