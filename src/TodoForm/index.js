import React from "react";
import './index.css'

function TodoForm() {
  return (
    <form>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Terminar de escribir un TODO"
      />
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button--cancel">Cancelar</button>
        <button className="TodoForm-button--add">Añadir</button>
      </div>
    </form>
  )
}

export { TodoForm }