import { Link } from "react-router-dom";
import { TableDataPerson } from "../components/tableDataPerson";
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
  {
    id: "1233",
    personName: "Donald",
    lastName: "Trump",
    age: "70",
    sexo: "Masculino",
    adress: "White House main av",
    cellPhone: "300-6765-234",
    email: "president_2024@gmail.com",
    social_segurity: "Si",
    pathology: "Ninguna",
    perfil: "Bailarín profesional en géneros de los 80's",
    profesion: "Artes Escenicas",
    disponibilidad: "TARDE",
    horas: "4",
    recordDate: "05/11/2024",
  },
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
  {
    id: "1223",
    personName: "Jhoana",
    lastName: "Galindo",
    age: "20",
    sexo: "Femenino",
    adress: "calle 13 #67-23",
    cellPhone: "345-567-232",
    email: "johana_galindo@gmail.com",
    social_segurity: "Si",
    pathology: "Ninguna",
    acudiente: "Paola Galindo",
    telAcudi: "323-123-121",
    telAcudiAlt: "451-345-123",
    ocupacion: "Estudiante",
    recordDate: "05/11/2024",
  },
  {
    id: "1223",
    personName: "Luzdeluna",
    lastName: "Cortés",
    age: "12",
    sexo: "Femenino",
    adress: "calle 16 #27-23 los Sinamorroles",
    cellPhone: "315-567-2327",
    email: "iam_raito@gmail.com",
    social_segurity: "Si",
    pathology: "Alergica a los gatos",
    acudiente: "Beatriz Montes",
    telAcudi: "318-112-1217",
    telAcudiAlt: "300-345-1232",
    ocupacion: "Estudiante",
    recordDate: "05/11/2024",
  },
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

        <Link to="/menu/personas/agregar-personas" className="block">
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
        <TableDataPerson columnData={colum} rowData={rows} />
      </div>
    </div>
  );
}

export { PersonView };
