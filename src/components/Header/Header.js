import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
    
        return (
            <div className="d-flex w-100 bg-dark" style={headerStyle}>
                <h3 className="text-center text-white">React 97</h3>
                <div className="d-flex ml-auto">
                
                <Link to="/" className="nav-link active text-white hover">Home</Link>
                <Link to="/todo" className="nav-link text-white">Task Manager</Link>
                <Link to="/counter" className="nav-link text-white">Counter</Link>
                <Link to="/series" className="nav-link text-white">Series</Link> 
                <Link to="/about" className="nav-link text-white">About 97</Link>
            
                </div>
            </div>
        );
    
}


const headerStyle = {
    padding: '5px'
}
 
export default Header;