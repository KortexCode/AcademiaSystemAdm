import { Link } from "react-router-dom";
import { TableData } from "../components/tableData";
/* import { useState } from "react"; */

const columnData = [
  "Nombre",
  "Apellido",
  "Programa",
  "Categoría",
  "Horario",
  "Instructor",
  "Acciones",
];

const rowData = [
  {
    personName: "Jhoana",
    lastName: "Galindo",
    programa: "Formación",
    categoria: "Juvenil",
    Horario: "Jueves 5pm - 7pm",
    instructor: "Donal Trump",
  },
  {
    personName: "Jhoana",
    lastName: "Galindo",
    programa: "Formación",
    categoria: "Juvenil",
    Horario: "Jueves 5pm - 7pm",
    instructor: "Donal Trump",
  },
];

function RegistrationView() {
  /*  const [colum, setColum] = useState(columnDataStudent); */
  /* const [rows, setRows] = useState(rowDataStudent); */

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 pb-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-6">
        <Link to={"/menu"}>Back</Link>
        {/* Título y botón de agregar */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Inscripciones
          </h1>
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <input
            type="text"
            placeholder="Buscar personas..."
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        {/*Botón agregar personas*/}

        <Link to="/menu/inscripcion/registro" className="block">
          <button className="px-4 py-3 font-medium rounded-md text-zinc-900 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Nuevo Registro
          </button>
        </Link>

        {/* Tabla de resultados */}
        <TableData columnData={columnData} rowData={rowData} />
      </div>
    </div>
  );
}

export { RegistrationView };
