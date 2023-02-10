import React from "react";
import './newstudents.css'

function NewStudents(props) {

    const openModal=()=>{
        props.setOpenFormCreate(prevState => !prevState)
    }

    return (
        <button onClick={openModal} type="button" class="btn btn-success button_newstudents">
            new students
        </button>

    )
}

export default NewStudents;