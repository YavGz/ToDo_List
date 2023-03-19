import React from 'react';
import './TodoItem.css'

function TodoItem(props){
  const onComplete = () => {
    alert(`completaste el ToDo ${props.text} `)
  }

  const onDelete = () => {
    alert(`Borraste el toDo ${props.text}`)
  }

  return(
      <li className='todoItem'>
          <span
            className={`todoItem_check ${props.completed && 'todoItem_check__active'}`} 
            onClick={onComplete}
          >
          </span>
          <p className={`todoItem_p ${props.completed && 'todoItem_p__completed'}`} >{props.text}</p>
          <span
            className='todoItem_delete'
            onClick={onDelete}
          >
            x
          </span>
      </li>
  );
}

export { TodoItem };