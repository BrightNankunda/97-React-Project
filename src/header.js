import React, { Component } from 'react';
 
class Header extends Component {
    OpenMenu() {
        document.querySelector('.sidebar').classList.add('open')
        
    }

    closeMenu() {
        document.querySelector('.sidebar').classList.remove('open')
    }
    render() { 
        return (
            <div>
            
                <header className="header">
                <div className="menu">
                    <aside className="sidebar">
                    <h3>Order now</h3>
                    <p>Orders</p>
                    <button onClick={this.closeMenu} className="close">&times;</button>
                    
                </aside>
                {/* <div className="openM"></div> */}
                </div>
                
                
                    <div>
                    <nav className="navbar brand">
                        <button onClick={this.OpenMenu} className="brandBtn">&#9776;</button>
                        <a href="" className="text-white mx-2">FashionX</a>
                    </nav>
                        
                    </div>
                    
                    <div className="ml-auto">
                        <nav className="navbar">
                            <a href="" className="text-white mx-2">Orders</a>
                            <a href="" className="text-white mx-2">Sign Up</a>
                            <a href="" className="text-white mx-2">Log In</a>
                        </nav>
                    </div>
            </header>
            
            </div>
        );
    }
}
 
export default Header;