import React from 'react'

export default function OneTodo({todo, onToggleTodo}) {

    function toggleTodoClick() {
        onToggleTodo(todo.id)
    }
    // function getStyle() {
    //     if(todo.completed) {

    //         return {
    //             textDecoration: 'line-through',
    //             color: 'blue',
                
    //         }
    //     } else {
    //         return { 
    //             textDecoration: 'none'
    //         }
    //     }
    //     // return {
    //     //     fontSize: this.props.todo.completed ? '1.8em' : '1em'
    //     // }
        
    // }
    return (
        <div className="onetodo">
        
        <input type="checkbox" className="checkbox px-2" checked={todo.completed} onChange={toggleTodoClick}/>
        <p className="todo-item text-center py-1 px-3">{todo.name}</p>
        
        </div>
    )
    
}
