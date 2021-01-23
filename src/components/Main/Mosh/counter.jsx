import React, { Component } from 'react';

 
class Counter extends Component {
    componentDidMount(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
    }
   
    render() { 
       const {onDelete, onIncrement, onDecrement } = this.props;
       console.log('Counters - Rendered');

        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-1">

                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    </div>
                    <div className="col-2">

                    <button onClick={() => onIncrement(this.props.counter)} className="btn btn-primary m-2">Increment</button>
                    </div>

                    <div className="col-2">
                        <button 
                        onClick={() => onDecrement(this.props.counter)} 
                        className="btn btn-warning m-2"
                        disabled={this.props.counter.value === 0 ? 'disabled' : ''}
                        >Decrement</button>
                    </div>
                    <div className="col-2">

                    <button onClick={() => onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
    getBadgeClasses = () => {
        // if(this.state.value == 0) {

        //     return 'badge badge-danger'
        // } else {
        //     return 'badge badge-primary'
        // }
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "danger" : "primary";
        return classes;
    }

    formatCount = () => {
        if(this.props.counter.value == 0) {
            return <h5>zero</h5>
        } else {
            return this.props.counter.value
        }
    }
}
 
export default Counter;