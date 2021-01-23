import React, { Component } from 'react'

export default class clickable extends Component {
    constructor() {
        super();
        this.state = {
            user: "Bright ", age: '',
        }
        this.bright = this.bright.bind(this)
        this.two = this.two.bind(this)
    }
    bright(e) {
        let isMoving = false

        this.setState({age: 23})
        this.setState({user: "Nintey Seven"})
        setTimeout(this.two, 3000)
        
        console.log(e.target.innerText)
    }
    two(){
        this.setState({user: ''})
        const name = "Nankunda"
        this.setState(state => {
            state.user = name
            console.log(state.user);
            console.log(state.age)
        })
    }

    render() {
        let clickableTitle = 'Nankunda Bright'

        const languages = [
            "Php",
            "Laravel",
            "Node",
            "Java script",
            "Vue",
            "React",
            "CSS"
        ]
        return (
            
            <div className="comment">
                {clickableTitle}
                {languages.map(language => {
                    return (<h1 key="language" style= {{background: 'red'}}>{language.toUpperCase()}</h1>)
                })}
                <h5>{this.props.yap}</h5>
                <h3 onClick={this.bright}>{this.state.user} {this.state.age}</h3>
            </div>
        )
    }
}
