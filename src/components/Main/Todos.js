import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
//import 'bootstrap/dist/css/bootstrap.min.css';;
 
class Todos extends Component {
    
    render() {
        
        return (
            <div className="container">
                
                {this.props.todos.map(todo => (
                    
                    <TodoItem key={todo.id} todo={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete}/> 
                ))}
                   
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
 
export default Todos;