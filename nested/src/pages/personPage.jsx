import { Link } from "react-router-dom";
import { TableData } from "../components/tableData";

const columnData = [
  "ID",
  "Nombre",
  "Apelldio",
  "Edad",
  "Sexo",
  "Dirección",
  "Teléfono",
  "Correo",
  "Seguridad Social",
  "Patología",
  "Fecha de registro",
  "Acciones",
];

function PersonPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 pb-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-6">
        <Link to={"/menu"}>Back</Link>
        {/* Título y botón de agregar */}
        <div className="pt-4 flex items-center justify-between">
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

        {/* Tabla de resultados */}
        <TableData columnData={columnData} />
      </div>
    </div>
  );
}

export { PersonPage };
