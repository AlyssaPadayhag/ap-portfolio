import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

function Home() {
    return(
        <div>
            <header className="App-header">
                <h1>Alyssa Padayhag</h1>
            <p>
                <a href="https://www.linkedin.com/in/alyssa-padayhag/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/AlyssaPadayhag" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="./files/resume-alyssa-padayhag-2023.pdf" download><i className="fa-regular fa-file-pdf"></i></a>
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