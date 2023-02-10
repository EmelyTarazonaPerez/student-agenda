import React, { useEffect, useState } from "react";
import './app.css'
import Nabvar from "./components/navbar";
import ListStudents from "./components/ListStudents";
import NewStudents from "./components/newStudents";
import FormNewStudent from "./components/form";


function App() {
  const [body, setBody] = useState({
    nombre_alumno: "",
    telefono_alumno: undefined,
    correo_alumno: "",
  });
  const [students, setStudents] = useState([]);
  const [studentsUpdate, setStudentsUpdate] = useState(false)
  const [openFormCreate, setOpenFormCreate] = useState(false)
  const [openFormUpdate, setOpenFormUpdate] = useState(false)
  /*guardar id*/
  const [elementId, setElementId] = useState({})
  useEffect(() => {
    const getStudents = () => {
      fetch('http://localhost:3080/api/v1/students')
        .then(res => res.json())
        .then(res => setStudents(res))
    }
    getStudents()
    setStudentsUpdate(false)
  }, [studentsUpdate]);

  return (
    <div className="App">
      <header className="App-header">
        <Nabvar />
      </header>
      <body className="fondo">  
        {/*pagina lista de estudiantes*/}
        <div className="lista_container">
          <section className="container">
            <NewStudents
              setOpenFormCreate={setOpenFormCreate} />
          </section>
          <ListStudents
            students={students}
            setStudentsUpdate={setStudentsUpdate}
            setOpenFormUpdate={setOpenFormUpdate}
            setElementId={setElementId}
          />
        </div>
        {/* pagina formulario */}
        {openFormCreate &&
          <section className="form_cortina">
            <div className="open_form">
              <div className="illustracion_form">
                <img src="happy.svg" alt="Mi SVG feliz" />
              </div>
              <FormNewStudent
                students={students}
                openFormCreate={openFormCreate}
                setElementId={setElementId}
                mensaje='Create new student'
                body={body}
                setBody={setBody}
              />
            </div>
          </section>
        }
        {/*modal update */}
        {openFormUpdate &&
          <section className="form_cortina">
            <div className="open_form">
              <div className="illustracion_form">
                <img src="Update.svg" alt="Mi SVG feliz" />
              </div>
              <FormNewStudent
                elementId={elementId}
                setElementId={setElementId}
                openFormUpdate={openFormUpdate}
                mensaje='Update student'
                setBody={setBody}
              />
            </div>
          </section>
        }
      </body>
    </div>
  );
}

export default App;
