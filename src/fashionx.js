import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './main';
 
class Fashionx extends Component {
    render() { 
        return (
            <div className="wrapper">
                <div className="grid-container">
                    
                    <Header/>
                    
                    <Main />

                    <Footer/>
                    
                </div>
                
            </div>
        );
    }
}
 
export default Fashionx;