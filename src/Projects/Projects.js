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
                            <td><Link className="link-style" to="/notes" target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </Link></td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-portfolio/blob/main/src/Notes.js"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>Restaurant Resrevation</td>
                            <td><a href="https://ap-restaurant-reservation-frontend.onrender.com/dashboard"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-restaurant-reservation"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>WeLoveMovies</td>
                            <td><a href="https://ap-welovemovies-backend.onrender.com/movies"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-restaurant-reservation"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>GrubDash</td>
                            <td></td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-grubdash"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>Simple Landing Page</td>
                            <td><a href="https://ap-drinks-landing-page.onrender.com/"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-drinks-landing-page"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>Responsive Flexbox Design</td>
                            <td><a href="https://ap-responsive-flexbox.onrender.com/"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-responsive-flexbox"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Projects;