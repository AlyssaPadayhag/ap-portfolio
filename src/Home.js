import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import pdf from "./files/resume-alyssa-padayhag-2023.pdf";

function Home() {
    return(
        <div>
            <header className="App-header">
                <h1>Alyssa Padayhag</h1>
            <p>
                <a href="https://www.linkedin.com/in/alyssa-padayhag/" target="_blank" className="hvr-pulse-shrink"><i className="fa-brands fa-linkedin-in hvr-icon"></i></a>
                <a href="https://github.com/AlyssaPadayhag" target="_blank" className="hvr-pulse-shrink"><i className="fa-brands fa-github hvr-icon"></i></a>
                <a href={pdf} target="_blank" className="hvr-pulse-shrink"><i className="fa-regular fa-file-pdf hvr-icon"></i></a>
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