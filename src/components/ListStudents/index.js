import React from "react";
import './liststudents.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const ListStudents = ({ students, setStudentsUpdate, setOpenFormUpdate, setElementId, }) => {

    const handleUpdate = (id, name, gmail, phone) => {
        setElementId({
            id: id,
            nombre_alumno: name,
            correo_alumno: gmail,
            telefono_alumno: phone,
        })
        setOpenFormUpdate(true)

    }

    const handleDelete = (id) => {
        fetch(`http://localhost:3080/api/v1/students/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.text())
            .then(res => console.log(res))

        setStudentsUpdate(true)
    }

    return (
        <div className="container contenedor_tabla">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gmail</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id_alumnos}>
                            <td>{student.id_alumnos}</td>
                            <td>{student.nombre_alumno}</td>
                            <td>{student.correo_alumno}</td>
                            <td>{student.telefono_alumno}</td>
                            <td>
                                <div className="row">
                                    <button
                                        onClick={() =>
                                            handleUpdate(
                                                student.id_alumnos,
                                                student.nombre_alumno,
                                                student.correo_alumno,
                                                student.telefono_alumno
                                            )} className="btn col-5 icono_path ">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </button>
                                    <button onClick={() => handleDelete(student.id_alumnos)} className="btn col-7 icono_delete">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default ListStudents;