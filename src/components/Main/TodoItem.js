import React, { Component } from 'react';
 
class TodoItem extends Component {
    getStyle = () => {
        if(this.props.todo.completed) {

            return {
                textDecoration: 'line-through',
                color: 'blue',
                
            }
        } else {
            return { 
                textDecoration: 'none'
            }
        }
        // return {
        //     fontSize: this.props.todo.completed ? '1.8em' : '1em'
        // }
        
    }
    
    
    render() { 
        const {id, title} = this.props.todo
        return (
            <div className="todoDiv bg-light ">
                <div className="col-1 inputDiv">
                
                    <input type="checkbox" onChange= {this.props.markComplete.bind(this, id)}/>
                </div>
                <h1 className="col-5 todoItem lead text-center" 
                    style={this.getStyle()}
                    >
                    
                    {title}
                </h1>
                <div className="delDiv col-6">
                <span className="delTodo text-center" onClick={this.props.delTodo.bind(this, id)}>&times;</span>
                </div>
            </div>
        );
    }
}
 
export default TodoItem;