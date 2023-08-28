import React from "react";
import "./TodoSearch.css"

// Estado de react
function TodoSearch({searchValue, setSearchValue}){

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
}

export { TodoSearch };