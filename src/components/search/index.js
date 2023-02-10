import React from "react";
import './search.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function SearchInput(params) {
    return (
        <div className="search_input">
            <div className="info_input">
                <FontAwesomeIcon className="icono_search" icon={faMagnifyingGlass} />
                <input className="input_search" placeholder="Search students.. " ></input>
            </div>
        </div>

    )
}

export default SearchInput;