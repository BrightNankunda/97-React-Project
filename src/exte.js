import React, { Component } from 'react';
export default class Exte extends Component {
constructor(props) {
super(props);
this.state = {
toggle: true
};
// This is to bind context when passing onClick as a callback
this.onClick = this.onClick.bind(this);
}
onClick() {
console.log('Bright')
}
render() {
return (
<div onClick={this.onClick}>
Hello, {this.props.name}! I am a Bright.
<br />

</div>
);
}
}

//export default Exte;