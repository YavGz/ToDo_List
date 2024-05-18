import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoList.css";

function TodoList(props){
    const {totalTodos} = React.useContext(TodoContext)
    
    return(
        <section className="todoList">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };