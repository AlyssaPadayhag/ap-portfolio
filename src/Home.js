import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import pdf from "./files/alyssa_padayhag_resume.pdf";

function Home() {
    return(
        <div>
            <header className="App-header">
                <h1>Alyssa Padayhag</h1>
                <h5 className="avail">I am a full-stack web developer</h5>
                <h5 className="avail">#OpenToWork!</h5>
            <p>
                <a href="https://www.linkedin.com/in/alyssa-padayhag/" target="_blank" className="hvr-pulse-shrink"><i className="fa-brands fa-linkedin-in hvr-icon"></i></a>
                <a href="https://github.com/AlyssaPadayhag" target="_blank" className="hvr-pulse-shrink"><i className="fa-brands fa-github hvr-icon"></i></a>
                <a href={pdf} target="_blank" className="resume hvr-pulse-shrink">Resume</a>
            </p>
            </header>
        <div className="main-div">
            <AboutMe />
            <Skills />
            <Projects />
        </div>
        </div>
    );
}

export default Home;