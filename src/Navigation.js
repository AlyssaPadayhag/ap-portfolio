import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return(
        <div>
            <ul>
                <li><Link className="nav-style" to="/notes" target="_blank"> Notes </Link></li>
            </ul>
        </div>
    );
}

export default Navigation;