import React from "react";
import "./TodoSearch.css"

function TodoSearch(){
  return(
    <React.Fragment>
      <div className="todoSearch">
        <input placeholder="Buscar ToDo" />
        <span></span>
      </div>
    </React.Fragment>
  );
}

export { TodoSearch };