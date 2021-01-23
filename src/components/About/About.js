import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 
class About extends Component {
    render() { 
        return (
            <div className="row mt-3 mx-auto container">
            <div className="d-flex justify-content-center bg-dark rounded">
                <div className="m-3 bg-light rounded">
                    <h2 className="text-success text-center p-3">Full Name: Nankunda Bright</h2>
                    <h4 className="text-primary border-bottom border-primary text-center">Experience</h4>
                    <p className="text-center">Full stack developer currently working with <a target="blank" href="https://www.jast-tech.com">Jast-tech</a> with adequate expreince in Javascript, Laravel, Vue.js, Node.js, React.js, PHP. This is evidenced in the following projects. </p>
                    <a target="blank" href="https://97-Homu-properties.netlify.app" className="text-center">Full Stack Laravel-Vue.js Project</a><br/>
                    <a target="blank" href="https://97-clock.netlify.app" className="text-center">Clock in Java Script</a><br></br>
                    <a target="blank" href="https://97-calculator.netlify.app" className="text-center">Calculator in Java Script</a><br/>
                    <a target="blank" href="https://97-snake.netlify.app" className="text-center">Snake in Java Script</a><br/>
                    <a target="blank" href="https://97-color-picker.netlify.app" className="text-center">Color Picker in Java Script</a><br/>
                    <a target="blank" href="https://97-multiple-quiz.netlify.app" className="text-center">Multiple Quiz in Java Script</a><br/>
                    <a target="blank" href="https://97-calculator.netlify.app" className="text-center">Calculator in Vue.js</a><br/>
                    <a target="blank" href="https://97-typing-game.netlify.app" className="text-center">Typing Game in Vue.js</a><br/>
                    <a target="blank" href="https://97-classic-foods.netlify.app" className="text-center">Full Stack Node.js-Reactjs Project</a><br/>
                
                </div>
                <div className="list-group m-3 bg-light col-lg-3">
                    <li className="list-group-item">Laravel</li>
                    <li className="list-group-item">Vue.js</li>
                    <li className="list-group-item">React.js</li>
                    <li className="list-group-item">Node.js</li>
                    <li className="list-group-item">JavaScript</li>
                    <li className="list-group-item">MySQL</li>
                    <li className="list-group-item">MongoDb</li>
                    <li className="list-group-item">PHP</li>
                </div>
            </div>
                
            </div>
        );
    }
}
 
export default About;