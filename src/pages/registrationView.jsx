import { Table } from "../components/table";
import { ArrowBackIcon } from "../components/arrowBackIcon";
import { SelectProgramCategory } from "../components/selectProgramCategory";

const column = [
  "ID",
  "Nombre",
  "Apellido",
  "Programa",
  "Categoría",
  "Horario",
  "Instructor",
  "Acciones",
];

const rows = [
  [
    "107834934",
    "Jhoana",
    "Galindo",
    "Formación",
    "Juvenil",
    "Jueves 5pm - 7pm",
    "Donal Trump",
  ],
  [
    "107834934",
    "Jhoana",
    "Galindo",
    "Formación",
    "Juvenil",
    "Jueves 5pm - 7pm",
    "Donal Trump",
  ],
];

function RegistrationView() {
  const dataTableType = {
    type: "generic",
    typeModal: "generic",
  };
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
        <SelectProgramCategory />

        <div>
          <label className="block mb-2 text-base font-medium text-gray-700">
            Horario
          </label>
          <select
            className="w-auto px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            required
          >
            <option value="sabadoAm">Sábado, 9:00 am - 12:00 pm </option>
            <option value="sabadoPm">Sábado, 2:00 pm - 5:00 pm</option>
            <option value="martesPm">Martes, 5:30 pm - 6:30 pm</option>
            <option value="miercolesPm">Miércoles, 5:30 pm - 6:30 pm</option>
            <option value="juevesPm">Jueves, 5:30 pm - 6:30 pm</option>
          </select>
        </div>

        {/* Tabla de resultados */}
        <Table
          ArrayColumn={column}
          ArrayRows={rows}
          tableType={dataTableType}
        ></Table>
      </div>
    </div>
  );
}

export { RegistrationView };
