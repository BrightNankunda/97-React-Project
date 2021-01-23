import React, { Component } from 'react'

export default class todog extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.click = this.click.bind(this);
    }
    render() {
        return (
            <div>
                <h2 onClick={this.click}>Nankunda Bright Todos This Year</h2>
                <div>
                    <TodoList items={this.state.items} />
                </div>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" id="new-todo" onChange={this.handleChange} value={this.state.text}/>
                </div>
                    <div>
                        <button>Create #{this.state.items.length}</button>
                    </div>
                </form>
            </div>
        )
    }
    handleChange(e) {
        this.setState({text: e.target.value})
        console.log(this.state);
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        }
        const it = ["brightk", true, 1 , "bhfg"];

        this.setState(state => ({
            items: state.items.concat(newItem),
            //items: state.items.concat("bright").concat("god").concat(...it),//.concat(newItem),
            text: " "
        }))

        console.log(newItem)
    }
    click(e) {
        console.log(e.target.innerText.length);
        console.log(e.target.innerText[0]);
        console.log(e.target.textContent);
        const te = e.target.textContent
        te.slice(0, -1);
        console.log(te)
        
    }
}
class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id} className="list">{item.text}</li>
                ))}
            </ul>
        )
    }
}
