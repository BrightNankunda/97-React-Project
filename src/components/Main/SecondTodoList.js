import React from 'react'
import SecondOneTodo from './SecondOneTodo'

export default function TodoList({todos, onToggleTodo}) {
    
    return (
        
        todos.map(todo => {
            return <SecondOneTodo key={todo.id} todo={todo} onToggleTodo={onToggleTodo}/>
        })
            
        
    )
}
