import React, { Component } from 'react';
 
class Changed extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            counter: 0,
            names: ["bright", "nintey"]
              
        }
        this.setUser = this.setUser.bind(this);
        this.setConter = this.setConter.bind(this);
        this.reduce = this.reduce.bind(this)
    }
    setUser(e) {
        this.setState({user: e.target.value})
        
    }
    setConter() {
        this.setState({counter: this.state.counter + 1})
    }
    formatCount() {
        const {counter} = this.state;
        return counter === 0 ? 'ZERO' : counter
    }
    reduce() {
        this.setState({counter: this.state.counter -1})
    }
    renderNames() {
        if(this.state.names.length === 0) {
            return 'There are no Names'
        } else {
            return this.state.names.map(name =>(<li key={name}>{name}</li>) )
        }
    }
    styles = {

        background: "red"
    }
        
    
    render() { 
        let classes = "boderRadius: '10px', background: 'red'"
        
        return (
            <div>
            <input defaultValue={1} onChange={this.setUser} />
            <div>{this.state.user}</div>
                Bright
                <h1 style={{fontSize: 40}}>{this.formatCount()}</h1>
                <button style= {this.classes} onClick={this.setConter}>Increment</button>
                <button style={{background: "blue"}} onClick={this.reduce}>Decrement</button>
                <div>
                {this.renderNames()}
                    
                </div>
            </div>
        );
    }
}
 
export default Changed;