import { Link } from "react-router-dom";
import { TableData } from "../components/tableData";
/* import { useState } from "react"; */

const columnDataProgram = [
  "Nombre",
  "Descripción",
  "Categoría",
  "Fecha de registro",
  "Acciones",
];

const rowDataProgram = [
  {
    nombre: "Formación",
    descripcion:
      "Se enseña a niños de 4 a 11 años las danzas folclóricas y ritmos",
    categoria: "Infantil",
    recordDate: "05/11/2024",
  },
  {
    nombre: "Formación",
    descripcion:
      "Se enseña a niños de 12 a 18 años las danzas folclóricas y ritmos",
    categoria: "Juvenil",
    recordDate: "05/11/2024",
  },
  {
    nombre: "Bailo Terapia",
    descripcion: "Ejercitar con bailes al usuario en diferentes ritmos",
    categoria: "No Aplica",
    recordDate: "05/11/2024",
  },
];

function ProgramView() {
  /* const [rows, setRows] = useState(rowDataProgram); */

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 pb-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-7">
        <Link to={"/menu"} className="inline-block my-4">
          Back
        </Link>
        {/* Título y botón de agregar */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-gray-900">Programas</h1>
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <input
            type="text"
            placeholder="Buscar programas..."
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Tabla de resultados */}
        <TableData columnData={columnDataProgram} rowData={rowDataProgram} />
      </div>
    </div>
  );
}

export { ProgramView };
