import React from 'react'

const Todos = ({ todos, deleteToDo }) => {
    const todoList = todos.length ? (
        todos.map(todo=>{
            return(
                <div className="list-item" key={todo.id}>
                  <span onClick={()=>{deleteToDo(todo.id)}}>{todo.content}</span>  
                </div>
            )
        })
    ) : (
        <p className="center">no todo's</p>
    )
return (
    <div className="todos list">
        {todoList}
    </div>
)
}

export default Todos;