import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Nankunda Bright's Todos</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?<br></br>
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul className="list">
      <li>Bright</li>
        {this.props.items.map(item => ( 
          <li key={item.id}>{item.text}</li>
         ))}
      </ul>
    );
  }
}

// export default class todo extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {items: [], text: ''}
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }
    // render() {
    //     return (
    //         <div>
    //             <h3>TODO APP</h3>
    //             {/* <TodoList items= {this.state.items} /> */}
    //             <form onSubmit={this.handleSubmit}>
    //                 <input id="new-todo" value={this.state.text} onChange={this.handleChange}/>
    //                 <button>Add #</button>
    //             </form>
    //         </div>
    //     )
    // }
    // handleSubmit(e) {
    //     e.preventDefault();
    //     if(this.state.text.length === 0) {
    //         return
    //     }
    //     console.log('submitted')
    // };
    // handleChange(e) {
        // this.setState({text: this.e.target.value})
    // };
    // class TodoList extends Component {
    //     render() {
    //         return (
    //             <div>
    //                 <ul>
    //                     <li key={item.id}>{item.text}</li>
    //                 </ul>
    //             </div>
    //         )
    //     }
    // }
// }
