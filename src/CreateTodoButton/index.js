import React from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';

function CreateTodoButton (){
    const {
        setOpenModal
    } = React.useContext(TodoContext)

    return(
        <button
            className='createTodo'
            // onClick={ () =>  console.log('click')} Metodo simple
            /* onClick={ onAlert } Metodo dos (mas limpio)*/
            onClick={ 
                () => {
                    setOpenModal( state => !state)
                } 
            }
        >+</button>
    );
}

/* todos los metodos que inician con "on" nos falicitan la implementacion
de un eventListener (eventos) Es necesario usar CamellCase.
Para manejar los eventos hay que mandarle una funcion sin ejecutar al evento */

export { CreateTodoButton };
