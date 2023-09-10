import axios from 'axios'
import React from 'react'





const TodoItem = (props) => {
    
    const deletTodoHandler = (title) => {
        axios.delete(`http://local:8000/api/todo/${title}`).then(res => {
            console.log(res.data)
        })
    }


    return (
        <div>
            <p>
                <span
                    style={{fontWeight:'bold, underline'}}>
                    {props.todo.title}:
                </span> {props.todo.description}

                <button 
                    onClick={ () => {
                        deletTodoHandler(props.todo.title)
                    }}
                    className='btn btn-outline-danger my-2 mx-2'
                    style={{"borderRadius": '50px'}}>X</button>
                <hr></hr>
            </p>
        </div>
    )
}

export default TodoItem