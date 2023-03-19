import React from "react";
import "./TodoSearch.css"

function TodoSearch(){
  const [SearchValue, setSearchValue] = React.useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return(
    <React.Fragment>
      <div className="todoSearch">
        <input 
          placeholder="Buscar ToDo" 
          value={SearchValue}
          onChange={onSearchValueChange}
        />
        <span></span>
      </div>
      <p>{SearchValue}</p>
    </React.Fragment>
  );
}

export { TodoSearch };