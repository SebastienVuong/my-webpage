import React, { Component } from 'react';
// import JavaScriptGame from '../modals/JavaScriptGame';
import './AboutMe.css';

class AboutMe extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="about-me-body">
                <div className="nav-bar">
                    <div className="nav-button">
                        Education
                    </div>
                    <div className="nav-button">
                        Past experience
                    </div>
                    <div className="nav-button">
                        Projects and awards
                    </div>
                </div>
                <div className="main-content">
                    <p>
                        Quomodo cecidisti de caelo Lucifer, qui mane oriebaris? Corruisti in terram, qui vulnerabas gentes?
                    </p>
                    <div className="content-section">
                        <p className="section-title">
                            EDUCATION
                        </p>
                        <p className="section-entry">
                            DecodeMTL : April 2017 - May 2017 <br/>
                            Web Development Immersive
                        </p>
                        <p className="section-entry">
                            École Polytechnique : August 2009 - April 2015 <br/>
                            Mechanical Engineering Baccalaureate (as student-athlete)
                        </p>
                    </div>
                    <div className="content-section">
                        <p className="section-title">
                            PAST EXPERIENCE
                        </p>
                        <p className="section-entry">
                            DecodeMTL : April 2017 - May 2017 <br/>
                            Full-Stack Web Development Immersive
                        </p>
                        <p className="section-entry">
                            École Polytechnique : August 2009 - April 2015 <br/>
                            Mechanical Engineering Baccalaureate (as student-athlete)
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
