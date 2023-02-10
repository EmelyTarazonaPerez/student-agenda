import React from "react";
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nabvar(params) {
    return (
        <div className="navbar_container">
            <div className="container_user">
                <FontAwesomeIcon className= "icono_navbar" icon={faBars} />
            </div>
            <div className="info_api">
                <h1>Agenda of Students</h1>
            </div>
        </div>

    )
}

export default Nabvar;