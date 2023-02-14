import React, { createContext, useEffect, useState } from "react";
const MyContext = createContext()

const MyProvider = (props) => {
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
    <MyContext.Provider value={{
      body,
      setBody,
      students,
      setStudents,
      studentsUpdate,
      setStudentsUpdate,
      openFormCreate,
      setOpenFormCreate,
      openFormUpdate,
      setOpenFormUpdate,
      elementId,
      setElementId
    }
    }>
            {props.children}
    </MyContext.Provider>
  )
}

export {MyProvider, MyContext }