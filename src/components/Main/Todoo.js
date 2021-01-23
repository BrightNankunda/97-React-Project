import React, { Component } from 'react';
import Todos from './Todos';
import Header from '../Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './AddTodo';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import About from '../About/About';
// import App from '../../App';
import SecondToddo from './SecondTodo';
import Counters from './Mosh/counters';
import Movies from './Mosh/movies';
//import { uuid } from 'uuid'; 
 
class Todoo extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Finishing React',
                completed: false
            },
            {
                id: 2,
                title: 'Finishing NodeJs',
                completed: false
            },
            {
                id: 3,
                title: 'Finishing Relationships in Laravel',
                completed: false
            },
            {
                id: 4,
                title: 'Error Handling in Laravel',
                completed: false
            },
            {
                id: 5,
                title: 'Finishing Javascript',
                completed: true
            }
        ]
    };
    delTodo = (id) => {
        // this.setState({
        //     todos: this.state.todos.filter(todo => {
        //             todo.id !== id 
        //         }
        //         return todos;
        //     })
            
        // })
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
        console.log(id);
        
    };

    addTodo = (title) => {
        
        const newTodo = {
            id: Math.round(Math.random() * 100),
            title,
            completed: false
        }
        this.setState({todos: [...this.state.todos, newTodo] })
        
        console.log(title);
        
        
    }
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    //console.log(todo.completed);
                    todo.completed = !todo.completed
                }
                return todo;
            })
            
        })
        
    };
    render() {
        
        return (
            <Router>
            <div>
                <Header/>
                <Route path="/" exact render={props => (
                    <>
                        <AddTodo addTodo={this.addTodo}/>
                        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                    </>
                )} />
                <Route path="/about" component={About}/>
                <Route path="/todo" component={SecondToddo} />
                <Route path="/counter" component={Counters}/>
                <Route path="/series" component={Movies} />
            </div>
            </Router>
        );
    }
}
 
export default Todoo;