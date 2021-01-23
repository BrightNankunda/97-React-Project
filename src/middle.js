import React, { Component } from 'react';
 
class Middle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: '',
            num: 'John'
        }
        this.onChange = this.onChange.bind(this);
        this.onChan = this.onChan.bind(this)
    }
    onChange(e) {
        this.setState({projects: e.target.value})
    }
    onChan(e) {
        this.setState({num: e.target.value})
    }
    render() { 
        return (
            <div>
                <h1>Middle</h1>
                <input value={this.state.projects} onChange={this.onChange} />
                <input defaultValue={this.state.num} onChange={this.onChan} />
                <h2>{this.state.projects}</h2>
                <h1>{this.state.num}</h1>
                {this.props.name}
                {this.props.children}
            </div>
        );
    }
}
 
export default Middle;