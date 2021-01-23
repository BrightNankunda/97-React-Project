import React, { Component } from 'react';
 
class AddTodo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});;

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }
    

    
    render() { 
        return (
            <div className="container">
                <form className="d-flex pt-2" onSubmit={this.onSubmit}>
                <div className="form-group col-11 ">
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange} className="form-control"  autoComplete="off" placeholder="Add new task..."/>
                </div>
                    <div className="col-1">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            
            </div>
        );
    }
}
 
export default AddTodo;