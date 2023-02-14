import React from "react";
import './form.css'

function FormNewStudent({ setBody, body, openFormUpdate, openFormCreate, elementId, setElementId }) {


    const handleChange = (e) => {
        if (openFormCreate) {
            setBody({
                ...body,
                [e.target.name]: e.target.value
            })
        }
        else {
            setElementId({
                ...elementId,
                [e.target.name]: e.target.value
            })
        }
    }

    /*insertar datos*/
    const handleSubmit = (e) => {

        if (openFormCreate) {
            fetch('http://localhost:3080/api/v1/students', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(res => res.json())
                .then(res => console.log(res))
        }
        else {
            console.log(elementId)
            fetch(`http://localhost:3080/api/v1/students/${elementId.id}`, {
                mode: 'cors',
                method: 'PUT',
                body: JSON.stringify(elementId),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then(res => res.json())
                .then(res => console.log(res))
        }
    }
    /*conectar a base de datos*/


    return (
        <form onSubmit={handleSubmit} className="form">
            <legend className="form_title">{openFormCreate?'Create new student':'Update student'}</legend>
            <p className="form_paragraph">Fill in the fields</p>
            <div className="form_container">
                <div className="form_group">
                    <input
                        value={openFormUpdate ? elementId.nombre_alumno : body.nombre_alumno}
                        name="nombre_alumno"
                        onChange={handleChange}
                        type="text"
                        className="form_input"
                        placeholder=" "
                    >
                    </input>
                    <label htmlFor='body' className="form_label">Nombre:</label>
                </div>
                <div className="form_group">
                    <input
                        value={openFormUpdate ? elementId.telefono_alumno : body.telefono_alumno}
                        name="telefono_alumno"
                        type="number"
                        onChange={handleChange}
                        className="form_input"
                        placeholder=" ">
                    </input>
                    <label htmlFor="body" className="form_label">Telefono:</label>
                </div>
                <div className="form_group">
                    <input
                        value={openFormUpdate ? elementId.correo_alumno : body.correo_alumno}
                        name="correo_alumno"
                        onChange={handleChange}
                        type="text"
                        className="form_input"
                        placeholder=" ">
                    </input>
                    <label htmlFor='body' className="form_label">Gmail:</label>
                </div>
                {
                    openFormCreate &&
                    <button type='submit' className='btn btn-success' >Create</button>

                }
                {
                    openFormUpdate &&
                    <button type='submit' className='btn btn-success' >Update</button>

                }
            </div>
        </form>
    )
}

export default FormNewStudent;