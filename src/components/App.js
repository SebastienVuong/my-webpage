import React, { Component } from 'react';
import { Link } from 'react-router';
import JavaScriptGame from './modals/JavaScriptGame';
import './App.css';

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

  render() {
    return (
        <div className="App">
            <div className="top-menu">
                <div className="profile">
                    <div className="profile-picture-box">
                        <img 
                            src='https://scontent.fxds1-1.fna.fbcdn.net/v/t31.0-8/s960x960/1523869_10152139973903832_673763161_o.jpg?oh=933ce07eae14f08069ae9ce3ee4d7f79&oe=59AC78E1' 
                            className='profile-picture'
                        />
                    </div>
                    <div className="profile-links">
                        <div className="linkedin-link">
                            <i className="fa fa-linkedin-square fa-5x" aria-hidden="true"></i>
                        </div>
                        <div className="github-link">
                            <i className="fa fa-github-square fa-5x" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="App-bar">
                    <div className="Main-buttons">
                        <div className="Main-button">
                            <Link to="/aboutme" className="top-button">
                                <div className="hex-button">
                                    <p className="Main-button-text">About Me</p>
                                </div>
                            </Link>
                        </div>
                        <div className="Main-button">
                            <Link to="/languages" className="top-button">
                                <div className="hex-button">
                                    <p className="Main-button-text">Languages</p>
                                </div>
                            </Link>
                        </div>
                        <div className="Main-button">
                            <Link to="/projects" className="top-button">
                                <div className="hex-button">
                                    <p className="Main-button-text">Projects</p>
                                </div>
                            </Link>
                        </div>
                        <div className="Main-button">
                            <Link to="/others" className="top-button">
                                <div className="hex-button">
                                    <p className="Main-button-text">Hobbies</p>
                                </div>
                            </Link>
                        </div>
                        <div className="Main-button">
                            <Link to="/contact" className="top-button">
                                <div className="hex-button">
                                    <p className="Main-button-text">Contact me</p>
                                </div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            {this.props.children}
        </div>
    );
  }
}

export default App;
