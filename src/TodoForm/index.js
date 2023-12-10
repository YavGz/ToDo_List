import React from "react";
import './index.css'

function TodoForm() {
  return (
    <form>
      <div>
        <label>Escribe tu nuevo TODO</label>
        <textarea
          placeholder="Terminar de escribir un TODO"
        />
      </div>
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button--cancel TodoForm-button" type="button">Cancelar</button>
        <button className="TodoForm-button--add TodoForm-button" type="button">Añadir</button>
      </div>
    </form>
  )
}

export { TodoForm }