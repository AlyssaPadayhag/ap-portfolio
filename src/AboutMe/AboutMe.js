import React from "react";
import "./aboutme.scss";

function AboutMe() {
    return (
        <div className="about-skills">
            <h2>About Me</h2>
            <p>
                Hello! I am a full stack web developer with 3+ years of collective web dev experience.
                I am also a recent grad from <a href="https://www.thinkful.com/bootcamp/web-development/" target="_blank" className="hvr-pulse-shrink">Thinkful's</a> intensive software engineering flex program.
                Programming has been my biggest passion since I was 11 years old. I hope to be a part of life-changing applications!
            </p>
            <div className="user one"></div>
        </div>
    );
}

export default AboutMe;