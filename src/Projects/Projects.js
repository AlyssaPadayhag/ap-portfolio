import React from "react";
import { Link } from "react-router-dom";
import "./projects.scss";

function Projects() {
    return(
        <div className="content-box">
            <h3>Projects</h3>
            <Link className="nav-style" to="/notes" target="_blank"> Notes </Link>
        </div>
    );
}

export default Projects;