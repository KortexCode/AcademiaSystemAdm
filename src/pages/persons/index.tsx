import { useEffect, useState, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { usePersonService } from "../../services/personService/usePersonService";
import { useAprendizService } from "../../services/personService/useAprendizService";
import { useProfesorService } from "../../services/personService/useProfesorService";
import { Link } from "react-router-dom";
import { TableData } from "../../components/tableData";
import { HiUserGroup } from "react-icons/hi";
import { AnimationLoader } from "@shared/components/loginLoader/animationLoader";
import { Alert } from "@utils/alerts";
import {
  columsPerson,
  columnsAprendiz,
  columnsProfesor,
} from "../../utils/personColums";
import "./styles.css";

function Persons() {
  const queryClient = useQueryClient();
  //Servicios
  const {
    data: personData,
    isLoading: personLoading,
    error: personError,
    refetch: reFetchPerson,
  } = usePersonService();
  const {
    data: aprendizData,
    isLoading: aprendizLoading,
    error: aprendizError,
    refetch: reFetchAprendiz,
  } = useAprendizService();
  const {
    data: instructorData,
    isLoading: instructorLoading,
    error: instructorError,
    refetch: reFetchInstructor,
  } = useProfesorService();
  //Estados
  const [rows, setRows] = useState<any[] | undefined>([]);
  const [column, setColum] = useState([]);
  const [radioInputAll, setRadioInputAll] = useState(true);
  const [radioInputStundent, setRadioInputStudent] = useState(false);
  const [radioInputInstructor, setRadioInputInstructor] = useState(false);
  //Maneja los cambios de estado cuando el usuario marca los checkboxes
  const handleShowAll = () => {
    setColum(columsPerson);
    setRadioInputAll(true);
    setRadioInputStudent(false);
    setRadioInputInstructor(false);
    if(!personData && !personError) {
      reFetchPerson();
    }else {
      setRows([]);
    }
  };
  const handleShowStundents = () => {
    setColum(columnsAprendiz);
    setRadioInputStudent(true);
    setRadioInputAll(false);
    setRadioInputInstructor(false);
    if(!aprendizData && !aprendizError) {
      reFetchAprendiz();
    }else {
      setRows([]);
    }
  };
  const handleShowInstructors = () => {
    setColum(columnsProfesor);
    setRadioInputInstructor(true);
    setRadioInputAll(false);
    setRadioInputStudent(false);
    if(!instructorData && !instructorError) {
      reFetchInstructor();
    }else {
      setRows([]);
    }
  };
  //Maneja los cambios de estado cuando el usuario marca los checkbox y los datos se cargan
  useEffect(() => {
    if (radioInputAll && personData) {
      setColum(columsPerson);
      setRows(personData);
    }
    if (radioInputStundent && aprendizData) {
      setRows(aprendizData);
    }
    if (radioInputInstructor && instructorData) {
      setRows(instructorData);
    }
  }, [
    personData,
    aprendizData,
    instructorData,
    radioInputAll,
    radioInputStundent,
    radioInputInstructor,
  ]);
  //Maneja los cambios de estado y mensajes de error cuando hay errores en la carga de datos
  useEffect(() => {
    if (personError || aprendizError || instructorError) {
      if (instructorError) {
        Alert.errorAlert(instructorError.message);
        setRows([]);
      } else if (aprendizError) {
        Alert.errorAlert(aprendizError.message);
        setRows([]);
      }
      if (personError) {
        Alert.errorAlert(personError.message);
        setRows([]);
      }
    }
  }, [personError, aprendizError, instructorError]);

  //Retorna animación cuando hay espera en la carga de datos
  if (personLoading || instructorLoading || aprendizLoading) {
    console.log("carga", personLoading, aprendizLoading, instructorLoading);
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <AnimationLoader message="Cargando datos de la tabla..." />
      </div>
    );
  }

  return (
    <div className="w-[100%] pt-[56px] z-0">
      <div className="w-full flex items-center justify-start gap-2  pt-4 pl-3  text-gray-600">
        <h3 className="text-lg font-bold text-center p-0 m-0">
          Módulo de Personas
        </h3>
        <HiUserGroup size={22} />
      </div>
      <div className="container-view w-full px-3 border-2 mb-3 border-t-0 shadow-lg ">
        {/*filtros */}
        <div className="filter-container w-full flex mt-6 mb-4 space-x-3">
          <div className="flex items-center justify-start py-2">
            <div>
              <input
                type="checkbox"
                checked={radioInputAll}
                onChange={handleShowAll}
              />
            </div>

            <span id="checkStudent" className="ml-2 text-gray-700">
              Todos
            </span>
          </div>

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

export { Persons };
