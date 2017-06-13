import React, { Component } from 'react';
// import JavaScriptGame from '../modals/JavaScriptGame';
import './AboutMe.css';

class AboutMe extends Component {
    
    // constructor() {
    //     super();
    // }
    
    componentDidMount = () => {
        this.props.onHomepage(false);
    }
    
    componentWillUnmount = () => {
        this.props.onHomepage(true);
    }

    render() {
        return (
            <div className="about-me-body">
                <div className="nav-bar-container">
                    <div className="nav-bar">
                        <button className="nav-button">
                            My philosophy
                        </button>
                        <button className="nav-button">
                            Education
                        </button>
                        <button className="nav-button">
                            Past experience
                        </button>
                        <button className="nav-button">
                            Other professional experience
                        </button>
                        <button className="nav-button">
                            Projects and awards
                        </button>
                    </div>
                </div>
                <div className="main-content gradientback">
                    <div>
                        Quomodo cecidisti de caelo Lucifer, qui mane oriebaris? Corruisti in terram, qui vulnerabas gentes?
                    </div>
                    <div className="content-section">
                        <div className="section-title">
                            ## PHILOSOPHY
                            <div className="section-entry">
                                In coding, just like in life, we should not limit ourselves to what we know we can do. 
                                Instead, we should dreaam of how we want it to be. From that point, we can start to look for the means to achieve that ideal vision.
                            </div>
                        </div>
                        <div className="section-title">
                            ## EDUCATION
                        </div>
                        <div className="section-entry">
                            DecodeMTL : April 2017 - May 2017 <br/>
                            <span className="entry-description"> 
                                <pre>Full-Stack Web Development Course</pre> 
                            </span>
                        </div>
                        <div className="section-entry">
                            École Polytechnique : August 2009 - April 2015 <br/>
                            <span className="entry-description"> 
                                <pre>B.Eng in Mechanical Engineering, Analysis & Design orientation (as student-athlete)</pre> 
                            </span>
                        </div>
                    </div>
                    <div className="content-section">
                        <div className="section-title">
                            ## PAST EXPERIENCE
                        </div>
                        <div className="section-entry">
                            Dialogue Technologies – Clinic Management System
                            <span className="entry-description"> 
                                <pre>Full-Stack project consisting in an app for patients to book appointments with specialists</pre>
                            </span>
                        </div>
                        <div className="section-entry">
                            École Polytechnique : August 2009 - April 2015 <br/>
                            Mechanical Engineering Baccalaureate (as student-athlete)
                        </div>
                    </div>
                    <div className="content-section">
                        <div className="section-title">
                            ## PAST EXPERIENCE
                        </div>
                        <div className="section-entry">
                            DecodeMTL : April 2017 - May 2017 <br/>
                            Full-Stack Web Development Immersive
                        </div>
                        <div className="section-entry">
                            École Polytechnique : August 2009 - April 2015 <br/>
                            Mechanical Engineering Baccalaureate (as student-athlete)
                        </div>
                    </div>
                    <div className="content-section">
                        <div className="section-title">
                            ## PAST EXPERIENCE
                        </div>
                        <div className="section-entry">
                            DecodeMTL : April 2017 - May 2017 <br/>
                            Full-Stack Web Development Immersive
                        </div>
                        <div className="section-entry">
                            École Polytechnique : August 2009 - April 2015 <br/>
                            Mechanical Engineering Baccalaureate (as student-athlete)
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
