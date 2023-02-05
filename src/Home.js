import React from "react";
import pdf from "./files/alyssa_padayhag_resume.pdf";
import BasicTabs from "./BasicTabs";

function Home() {
    return(
        <div>
            <header className="App-header">
                <div className="flex-display">
                    <div className="user one"></div>
                    <div>
                    <h1>Alyssa Padayhag</h1>
                    <h5 className="avail">Full-stack web developer #OpenToWork!</h5>
                    <p>
                <a href="https://www.linkedin.com/in/alyssa-padayhag/" target="_blank" ><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/AlyssaPadayhag" target="_blank" ><i className="fa-brands fa-github"></i></a>
                <a href={pdf} target="_blank" className="resume">Resume</a>
                    </p>
                </div>
                    
                </div>
                
                

            </header>
            <BasicTabs />
        </div>
    );
}

export default Home;