import React, {useState, useRef, useEffect} from 'react';
import SecondTodoList from './SecondTodoList';


const LOCAL_STORAGE_KEY = 'todoApp.todos';

function SecondTodo() {
    const [todos, setTodos] =  useState([]);
    const todoNameRef = useRef()

    function ToggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id)
        
        todo.completed = !todo.completed;
        console.log(todo)
        setTodos(newTodos)
    }

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function handleAddTodo(e) {
        const name = todoNameRef.current.value;
        if(name === '') return;
        setTodos(prevTodos => {
            return [...prevTodos, {id: Math.ceil(Math.random() * 1000), name: name, completed: false}];
        })
        todoNameRef.current.value = ''
        console.log(name)
        
        
    }

    function handleClearTodos() {
        const newTodos = todos.filter(todo => !todo.completed)
        setTodos(newTodos)
    }
    return (
        <div className="container toddo bg-light pb-2 rounded mt-2">
            <h2 className="text-center">Todo App By 97</h2>
            <input type="text" ref={todoNameRef} /*onKeyUp={handleAddTodo}*/ className="form-control shadow-sm"/>
            <SecondTodoList todos={todos} onToggleTodo={ToggleTodo}/>
            <div className="my-2 d-flex justify-content-around">
            <button onClick={handleAddTodo} className="btn btn-success" type="submit">Add Task</button>
            <button onClick={handleClearTodos} className="btn btn-success" >Clear Completed</button>
            </div>
            <div className="bg-primary rounded">
                <h4 className="text-white text-center py-2">{todos.filter(todo => !todo.completed).length} Task(s) Not Completed</h4>
            </div>
        </div>
    )
}
 
export default SecondTodo ;