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
                            <td>
                                Restaurant Reservation
                                <p>Full-stack, CRUD, React, Express, PostGreSQL App</p>
                            </td>
                            <td><a href="https://ap-restaurant-reservation-frontend.onrender.com/" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-restaurant-reservation" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>
                                WeLoveMovies
                                <p>Back-end, Node, Express, Knex, PostgreSQL, </p>
                            </td>
                            <td><a href="https://ap-welovemovies-backend.onrender.com/movies" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-restaurant-reservation" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>
                                GrubDash
                                <p>Back-end, Node, Express, REST API</p>
                            </td>
                            <td></td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-grubdash" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>
                                Notes AWS App
                                <p>Full-stack, Authentication, AWS: Amplify, S3</p>
                            </td>
                            <td><Link to="/notes" target="_blank" className="link-style hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </Link></td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-portfolio/blob/main/src/Notes.js"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>
                                Simple Landing Page
                                <p>Front-end design</p>
                            </td>
                            <td><a href="https://ap-drinks-landing-page.onrender.com/" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-drinks-landing-page" className="hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>
                                Responsive Flexbox Design
                                <p>Front-end responsive design</p>
                            </td>
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