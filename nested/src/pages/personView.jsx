import { Link } from "react-router-dom";
import { Table } from "../components/table";
import { useState } from "react";
import { ArrowBackIcon } from "../components/arrowBackIcon";

const columnDataInstructor = [
  "ID",
  "Nombre",
  "Apellido",
  "Edad",
  "Sexo",
  "Dirección",
  "Teléfono",
  "Correo",
  "Seguridad Social",
  "Patología",
  "Perfil",
  "Profesion",
  "Disponibilidad",
  "Horas",
  "Fecha de registro",
  "Acciones",
];

const rowDataInstructor = [
  [
    "1233",
    "Donald",
    "Trump",
    "70",
    "Masculino",
    "White House main av",
    "300-6765-234",
    "president_2024@gmail.com",
    "Si",
    "Ninguna",
    "Bailarín profesional en géneros de los 80's",
    "Artes Escenicas",
    "TARDE",
    "4",
    "05/11/2024",
  ],
];

const columnDataStudent = [
  "ID",
  "Nombre",
  "Apellido",
  "Edad",
  "Sexo",
  "Dirección",
  "Teléfono",
  "Correo",
  "Seguridad Social",
  "Patología",
  "Acudiente",
  "Teléfono Acudiente",
  "Teléfono Acudiente Alt",
  "Ocupación",
  "Fecha de registro",
  "Acciones",
];

const rowDataStudent = [
  [
    "1223",
    "Jhoana",
    "Galindo",
    "20",
    "Femenino",
    "calle 13 #67-23",
    "345-567-232",
    "johana_galindo@gmail.com",
    "Si",
    "Ninguna",
    "Paola Galindo",
    "323-123-121",
    "451-345-123",
    "Estudiante",
    "05/11/2024",
  ],
  [
    "1223",
    "Luzdeluna",
    "Cortés",
    "12",
    "Femenino",
    "calle 16 #27-23 los Sinamorroles",
    "315-567-2327",
    "iam_raito@gmail.com",
    "Si",
    "Alergica a los gatos",
    "Beatriz Montes",
    "318-112-1217",
    "300-345-1232",
    "Estudiante",
    "05/11/2024",
  ],
];

function PersonView() {
  const [colum, setColum] = useState(columnDataStudent);
  const [rows, setRows] = useState(rowDataStudent);
  const [radioInputOn, setRadioInputOn] = useState(true);

  const handleShowStundents = () => {
    if (radioInputOn === false) {
      setRadioInputOn(true);
      setColum(columnDataStudent);
      setRows(rowDataStudent);
    }
  };
  const handleShowInstructors = () => {
    setRadioInputOn(false);
    setColum(columnDataInstructor);
    setRows(rowDataInstructor);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 pb-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-6">
        <ArrowBackIcon root={"/menu"} />
        {/* Título y botón de agregar */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-gray-900">Personas</h1>
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <input
            type="text"
            placeholder="Buscar personas..."
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          />
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="text-primary focus:ring-primary"
              />
              <span className="ml-2 text-gray-700">Activos</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="text-primary focus:ring-primary"
              />
              <span className="ml-2 text-gray-700">Inactivos</span>
            </label>
          </div>
        </div>
        {/*Botón agregar personas*/}

        <Link to="/menu/personas/agregar-personas" className="inline-block">
          <button className="px-4 py-3 font-medium rounded-md text-zinc-900 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Agregar Persona
          </button>
        </Link>

        <div className="flex space-x-4">
          <div className="flex items-center justify-start py-2">
            <input
              type="radio"
              checked={radioInputOn}
              onChange={handleShowStundents}
            />
            <span id="checkStudent" className="ml-2 text-gray-700">
              Estudiantes
            </span>
          </div>
          <div className="flex items-center justify-start py-2">
            <input
              id="checkInstructor"
              type="radio"
              checked={!radioInputOn}
              onChange={handleShowInstructors}
            />
            <span className="ml-2 text-gray-700">Instructores</span>
          </div>
        </div>

        {/* Tabla de resultados */}
        <Table ArrayColumn={colum} ArrayRows={rows}>
          <td className="px-4 py-2 whitespace-nowrap text-sm font-medium">
            <button className="mr-2 text-primary hover:text-primary-dark">
              Editar
            </button>
            |
            <button className="mx-2 text-red-600 hover:text-red-800">
              Eliminar
            </button>
            |
            <button className="mx-2 text-blue-600 hover:text-red-800">
              inscribir
            </button>
          </td>
        </Table>
      </div>
    </div>
  );
}

export { PersonView };
