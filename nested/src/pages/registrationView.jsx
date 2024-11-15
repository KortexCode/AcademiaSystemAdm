import { TableData } from "../components/tableData";
import { ArrowBackIcon } from "../components/arrowBackIcon";
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
  [
    "Jhoana",
    "Galindo",
    "Formación",
    "Juvenil",
    "Jueves 5pm - 7pm",
    "Donal Trump",
  ],
  [
    "Jhoana",
    "Galindo",
    "Formación",
    "Juvenil",
    "Jueves 5pm - 7pm",
    "Donal Trump",
  ],
];

function RegistrationView() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 pb-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-6">
        <ArrowBackIcon root={"/menu"} />
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

        <div>
          <label className="block mb-2 text-base font-medium text-gray-700">
            Sexo
          </label>
          <select
            className="w-auto px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            required
          >
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div className="flex flex-wrap">
          <div className=" mr-2">
            <label className="block mb-2 text-base font-medium text-gray-700">
              Programa
            </label>
            <select
              className="w-auto px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              required
            >
              <option value="formacion">Formación</option>
              <option value="personalizado">Personalizado</option>
              <option value="semiPersonalizado">Semi Personalizado</option>
              <option value="bailoTerapia">Bailo terapia</option>
            </select>
          </div>
          <div className="mt-2 mobile:mt-0">
            <label className="block mb-2 text-base font-medium text-gray-700">
              Categoría
            </label>
            <select
              className="w-auto px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              required
            >
              <option value="Masculino">Elección</option>
              <option value="Masculino">Elección</option>
              <option value="Masculino">Elección</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-base font-medium text-gray-700">
            Horario
          </label>
          <select
            className="w-auto px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            required
          >
            <option value="Masculino">Horario a elegir</option>
            <option value="Masculino">Horario a elegir</option>
          </select>
        </div>

        {/* Tabla de resultados */}
        <TableData columnData={columnData} rowData={rowData} />
      </div>
    </div>
  );
}

export { RegistrationView };
