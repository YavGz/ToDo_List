import React from 'react';
import './TodoLoading.css'

function TodoLoading(props){

  return(
    <React.Fragment>
      <li className='itemLoading'>
          <span
            className='delete_loading'
          >
          </span>
      </li>
      <li className='itemLoading'>
          <span
            className='delete_loading'
            >
          </span>
      </li>
      <li className='itemLoading'>
          <span
            className='delete_loading'
            >
          </span>
      </li>
    </React.Fragment>
  );
}

export { TodoLoading };