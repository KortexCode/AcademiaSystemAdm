import { Table } from "../components/table";
import { ArrowBackIcon } from "../components/arrowBackIcon";
import { SelectProgramCategory } from "../components/selectProgramCategory";
/* import { useState } from "react"; */

const column = [
  "Nombre",
  "Descripción",
  "Categoría",
  "Fecha de registro",
  "Acciones",
];

const rows = [
  [
    "Formación",
    "Se enseña a niños de 4 a 11 años las danzas folclóricas y ritmos",
    "Infantil",
    "05/11/2024",
  ],
  [
    "Formación",
    "Se enseña a niños de 12 a 18 años las danzas folclóricas y ritmos",
    "Juvenil",
    "05/11/2024",
  ],
  [
    "Bailo Terapia",
    "Ejercitar con bailes al usuario en diferentes ritmos",
    "No Aplica",
    "05/11/2024",
  ],
];

function ProgramView() {
  /* const [rows, setRows] = useState(rowDataProgram); */

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 pb-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-7">
        <ArrowBackIcon root={"/menu"} />
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

        <SelectProgramCategory />

        {/* Tabla de resultados */}
        <Table
          ArrayColumn={column}
          ArrayRows={rows}
          tableType="programs"
        ></Table>
      </div>
    </div>
  );
}

export { ProgramView };
