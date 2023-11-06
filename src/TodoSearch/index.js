import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";


// Estado de react
function TodoSearch(){

  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return(
    <React.Fragment>
      <div className="todoSearch">
        <input 
          placeholder="Buscar ToDo" 
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </div>
    </React.Fragment>
  );
};

export { TodoSearch };