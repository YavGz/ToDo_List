import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton (props){
    /*const onAlert = () => {
        alert('Aquí se deberia abrir el modal')
    Metodo dos}*/

    const onclickButton = (msg) => {
        alert(msg);
    } /*Metodo para llamar a la funcion alert de manera dinamica con diferentes mensajes*/

    return(
        <button
            className='createTodo'
            // onClick={ () =>  console.log('click')} Metodo simple
            /* onClick={ onAlert } Metodo dos (mas limpio)*/
            onClick={ () => onclickButton('Aqui deberia abrir el modal') }
            >
                +
        </button>
    );
}

/* todos los metodos que inician con "on" nos falicitan la implementacion
de un eventListener (eventos) Es necesario usar CamellCase.
Para manejar los eventos hay que mandarle una funcion sin ejecutar al evento */

export { CreateTodoButton };
