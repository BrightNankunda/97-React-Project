import React, { Component } from 'react';
import Counter from './counter';
import Footer from './footer';
 
class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 1},
            {id: 3, value: 2},
            {id: 4, value: 0}
        ]
    }

    constructor(props) {
        super(props)
        console.log('App - constructor');
    }

    componentDidMount() {
        console.log('App - Mounted');
    }

    handleDelete = (id) => {
        
            const counters = this.state.counters.filter(counter => counter.id !== id);
            this.setState({counters});
        
        console.log(id);
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })

        this.setState({counters})
    }
    render() { 
        console.log('App - Rendered')
        return (
            <div className="container">
                <div className="reset d-flex justify-content-center mt-2">
                    <button onClick={this.handleReset} className="btn btn-primary">Reset</button>
                </div>
                <div>
                {this.state.counters.map(counter =>(
                 <Counter key={counter.id} value={counter.value} 
                 onIncrement={this.handleIncrement} 
                 onDecrement={this.handleDecrement} 
                 onDelete={this.handleDelete} 
                 counter={counter}/>
                    
                ) )}
                </div>
                <Footer counters={this.state.counters}/>
            </div>
        );
    }

    
}
 
export default Counters;