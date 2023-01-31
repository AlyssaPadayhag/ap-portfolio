import React from "react";
import { Link } from "react-router-dom";
import "./projects.scss";

function Projects() {
    return(
        <div className="projects">
            {/* <h2>Projects</h2> */}
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>description</th>
                            <th>demo</th>
                            <th>code</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Thinkful Hackathon - Job Search App
                                <p>Front-end, React, MUI, Bootstrap, Figma</p>
                            </td>
                            <td>
                                Worked with 2 designers and 2 other engineers and mimic a real world project.
                                Prompt: to create a job search tool or app in 1 week
                            </td>
                            <td><a href="https://thinkful-hackathon-team-8.onrender.com/" target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                            <td><a href="https://github.com/japyles/thinkful-hackathon"  target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>
                                Restaurant Reservation
                                <p>Full-stack, CRUD, React, Express, PostGreSQL App</p>
                            </td>
                            <td>
                                User can Create, Read, Update, and Delete reservations and tables.
                                Assign party to table with sufficent capacity.
                                Also have reservation restrictions (business hours, days open, etc)
                            </td>
                            <td><a href="https://ap-restaurant-reservation-frontend.onrender.com/"  target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-restaurant-reservation"  target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>
                                CSTCN (Customre Service/Technical Call Notes)
                                <p>Front-end, React, MUI</p>
                            </td>
                            <td>
                               User input and easily copy to clipboard. Create, Update, Delete in-progress.
                               Created to make my current job more efficient. i.e. not having to hi-light in a simple notes app vs. clicking to copy
                            </td>
                            <td><a href="https://cstcn.onrender.com"  target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/cstcn"  target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>
                                WeLoveMovies
                                <p>Back-end, Node, Express, Knex, PostgreSQL, </p>
                            </td>
                            <td>
                            Setting up a database and building out specific routes
                            so that users can gain access to data about movies, theaters, and reviews. 
                            See endpoints in code (github) link
                            </td>
                            <td><a href="https://ap-welovemovies-backend.onrender.com/movies"  target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-welovemovies"  target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        {/* <tr>
                            <td>
                                GrubDash
                                <p>Back-end, Node, Express, REST API</p>
                            </td>
                            <td></td>
                            <td></td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-grubdash"  target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr> */}
                        <tr>
                            <td>
                                Notes AWS App
                                <p>Full-stack, Authentication, AWS: Amplify, S3</p>
                            </td>
                            <td>
                                Example notes app with login. Please feel free to test the account creation and login!
                                Made with AWS
                            </td>
                            <td><Link to="/notes" target="__blank" className="link-style hvr-pulse-shrink"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </Link></td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-portfolio/blob/main/src/Notes.js" target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>
                                Simple Landing Page
                                <p>Front-end design</p>
                            </td>
                            <td>
                                Very simple landing page with responsive thumbnail images at the bottom.
                            </td>
                            <td><a href="https://ap-drinks-landing-page.onrender.com/"  target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-drinks-landing-page"  target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square hvr-icon"></i> </a> </td>
                        </tr>
                        <tr>
                            <td>
                                Responsive Flexbox Design
                                <p>Front-end responsive design</p>
                            </td>
                            <td>
                                Very simple responsive flex design.
                            </td>
                            <td><a href="https://ap-responsive-flexbox.onrender.com/"  target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                            <td><a href="https://github.com/AlyssaPadayhag/ap-responsive-flexbox"  target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Projects;