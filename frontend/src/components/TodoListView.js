import TodoItem from './Todo'
import React from 'react'

const TodoView = (props) => {
  return (
    <div>
        <ul>
            {props.todoList.map(todo => <TodoItem todo={todo} />)}
        </ul>
    </div>
  )
}

export default TodoView