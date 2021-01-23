import React, { Component } from 'react';
import FullStack from '../Projects/fullstack';
import Javascript from '../Projects/Javascript';
import Node from '../Projects/node';
import Laravel from '../Projects/laravel';
import Head from './../Head';
 
class Portfolio extends Component {
    render() { 
        return (
            <div>
                <Head />
                <div>
                    <FullStack />
                    <Javascript />
                    <Node />
                    <Laravel />
                </div>
            </div>
        );
    }
}
 
export default Portfolio;