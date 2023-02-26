import React from 'react';
import './TodoItem.css'

function TodoItem(props){
  return(
      <li className='todoItem'>
          <span className={`todoItem_check ${props.completed && 'todoItem_check__active'}`} ></span>
          <p className={`todoItem_p ${props.completed && 'todoItem_p__completed'}`} >{props.text}</p>
          <span className='todoItem_delete'>x</span>
      </li>
  );
}

export { TodoItem };