import React from "react";
import "./aboutme.scss";

function AboutMe() {
    return (
        <div className="child-div">
            <h2>About Me</h2>
            <div className="user one"></div>
            <h3 className="avail">I am #OpenToWork!</h3>
            <p>
                Hello! I am a full stack web developer with 3+ years of collective web dev experience.
                I am also a recent grad from <a href="https://www.thinkful.com/bootcamp/web-development/">Thinkful's</a> intensive software engineering flex program.
            </p>
        </div>
    );
}

export default AboutMe;