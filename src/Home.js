import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

function Home() {
    return(
        <div>
            <header className="App-header">
                <h1>Alyssa Padayhag</h1>
            </header>
            <p>
                <a href="https://www.linkedin.com/in/alyssa-padayhag/"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/AlyssaPadayhag"><i class="fa-brands fa-github"></i></a>
                <a href="./files/resume.pdf" target="_blank">Resume</a>
            </p>
        <div className="main-div">
            <AboutMe />
            <Skills />
            <Projects />
        </div>
        </div>
    );
}

export default Home;