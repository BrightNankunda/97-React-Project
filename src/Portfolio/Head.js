import React, { Component } from 'react';
 
class Head extends Component {
    render() { 
        return (
            <div className="head">
            <div className="head-nav" >
                <nav className="d-flex bg-primary">
                    <h2 className="text-center">Nankunda Bright</h2>
                    <div className=" d-flex ml-auto">
                        <h4 className="mx-2 my-auto">React</h4>
                        <h4 className="mx-2 my-auto">Node</h4>
                        <h4 className="mx-2 my-auto">Laravel</h4>
                    </div>
                </nav>
            </div>
                
                <div className="text-center">
                    <h1 className="p-5">Full Stack Developer</h1>
                </div>
            </div>
        );
    }
}
 
export default Head;