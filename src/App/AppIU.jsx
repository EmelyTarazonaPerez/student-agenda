import React, { useContext } from "react";
import './app.css'
import Nabvar from "../components/navbar";
import ListStudents from "../components/ListStudents";
import NewStudents from "../components/newStudents";
import FormNewStudent from "../components/form";
import { MyContext } from "../context";


function AppIU () {

  const {body,
    setBody,
    students,
    setStudentsUpdate,
    openFormCreate,
    setOpenFormCreate,
    openFormUpdate,
    setOpenFormUpdate,
    elementId,
    setElementId } = useContext(MyContext)



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
                setBody={setBody}
              />
            </div>
          </section>
        }
      </body>
    </div>
  );
}

export default AppIU;
