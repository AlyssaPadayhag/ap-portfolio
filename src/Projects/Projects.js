import React from "react";
import { Link } from "react-router-dom";
import "./projects.scss";

function Projects() {
    return(
        <div className="projects">
            <h2>Projects</h2>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>demo</th>
                            <th>code</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Notes AWS App</td>
                            <td><Link to="/notes" target="_blank" className="link-style hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </Link></td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-portfolio/blob/main/src/Notes.js"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>Restaurant Resrevation</td>
                            <td><a href="https://ap-restaurant-reservation-frontend.onrender.com/dashboard" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-restaurant-reservation" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>WeLoveMovies</td>
                            <td><a href="https://ap-welovemovies-backend.onrender.com/movies" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-restaurant-reservation" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>GrubDash</td>
                            <td></td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-grubdash" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>Simple Landing Page</td>
                            <td><a href="https://ap-drinks-landing-page.onrender.com/" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-drinks-landing-page" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>Responsive Flexbox Design</td>
                            <td><a href="https://ap-responsive-flexbox.onrender.com/" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-responsive-flexbox" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Projects;