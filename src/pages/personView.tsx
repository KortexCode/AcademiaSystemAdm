import { useEffect, useState, useRef } from "react";
import { useAprendizService } from "../service/useAprendizService";
import { useProfesorService } from "../service/useProfesorService";
import { usePersonService } from "../service/usePersonService";
import { Link } from "react-router-dom";
import { TableData } from "../components/tableData";
import {
  columsPerson,
  columnsAprendiz,
  columnsProfesor,
} from "../util/personColums";
import { FaTable } from "react-icons/fa6";
import "../styles/personView.css";

function PersonView() {
  //Servicios
  const { getAprendices } = useAprendizService();
  const { getProfesores } = useProfesorService();
  const { getPersonas } = usePersonService();
  //Estados
  const [rows, setRows] = useState([]);
  const [column, setColum] = useState([]);

  const [radioInputStundent, setRadioInputStudent] = useState(false);
  const [radioInputInstructor, setRadioInputInstructor] = useState(false);

  //Referencias
  let rowStudentRef = useRef([]);
  let rowInstructorRef = useRef([]);

  //Determina el tipo de tabla, así genera los botones de acción para cada registro
  /*  const dataTableType = radioInputOn
    ? {
        type: "student",
        typeModal: "generic",
      }
    : {
        type: "generic",
        typeModal: "generic",
      }; */

  const handleShowStundents = () => {
    console.log("pidiendo estudiante");
    setColum(columnsAprendiz);
    setRows(rowStudentRef.current);
    setRadioInputStudent(true);
    setRadioInputInstructor(false);
  };
  const handleShowInstructors = () => {
    console.log("pidiendo profesores");
    setColum(columnsProfesor);
    setRows(rowInstructorRef.current);
    setRadioInputInstructor(true);
    setRadioInputStudent(false);
  };

  useEffect(() => {
    async function fetchData() {
      const resPersonas = await getPersonas();
      setColum(columsPerson);
      setRows(resPersonas);

      const resStundent = await getAprendices();
      rowStudentRef.current = resStundent;
      console.log("aprendices effec", rowStudentRef.current);

      const resInstructor = await getProfesores();
      rowInstructorRef.current = resInstructor;
      console.log("profesores en personview", rowInstructorRef.current);
    }
    fetchData();
  }, []);

  return (
    <div className="w-[100%] pt-[56px]">
      <div className="w-full flex items-center justify-center  p-2 bg-primary text-gray-900">
        <h3 className="me-2 text-2xl font-extrabold  text-center">
          Tabla Personas
        </h3>
        <FaTable size={22} className="mt-1" />
      </div>
      <div className="container-view w-full px-3 border-2 mb-3 border-t-0 shadow-lg ">
        {/*filtros */}
        <div className="filter-container w-full flex mt-6 mb-4 space-x-2">
          <div className="flex justify-center w-40 p-4 border-2 rounded-lg shadow-lg bg-white">
            <div className="w-full flex flex-col space-x-y">
              <label className="inline-flex items-center py-2">
                <input
                  type="checkbox"
                  className="text-primary focus:ring-primary"
                />
                <span className="ml-2 text-gray-700">Activos</span>
              </label>
              <label className="inline-flex items-center py-2">
                <input
                  type="checkbox"
                  className="text-primary focus:ring-primary"
                />
                <span className="ml-2 text-gray-700">Inactivos</span>
              </label>
            </div>
          </div>

          <div className="flex w-40 p-4 border-2 rounded-lg shadow-lg bg-white">
            <div className="w-full flex-col space-x-y">
              <div className="flex items-center justify-start py-2">
                <div>
                  <input
                    type="checkbox"
                    checked={radioInputStundent}
                    onChange={handleShowStundents}
                  />
                </div>

                <span id="checkStudent" className="ml-2 text-gray-700">
                  Estudiantes
                </span>
              </div>
              <div className="flex items-center justify-start py-2">
                <input
                  id="checkInstructor"
                  type="checkbox"
                  checked={radioInputInstructor}
                  onChange={handleShowInstructors}
                />
                <span className="ml-2 text-gray-700">Instructores</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vista de tabla */}
        <div className="w-full table-view p-5 border-2 rounded-lg shadow-lg mb-4 bg-white">
          <div className="w-full flex justify-end">
            <div className="w-full me-2">
              <Link
                to="/menu/personas/agregar-personas"
                className="inline-block"
              >
                <button className="px-4 py-3 font-medium rounded-md text-zinc-900 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Agregar Persona
                </button>
              </Link>
            </div>
            <input
              type="text"
              placeholder="Buscar personas..."
              className="w-full sm:w-1/2 md:w-64 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          {/* Tabla de resultados */}
          <div className="w-full mt-3">
            <TableData columns={column} rows={rows} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { PersonView };
